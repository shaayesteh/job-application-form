import React, { useState } from "react";
import { useFormStore } from "../store/useFormStore";
import { useForm } from "react-hook-form";
import { createApplication } from "../services/jobApplicationService";
import CustomInput from "./customInput";

interface FormData {
  fullName: string;
  email: string;
  yearsOfExperience: number;
  skills: string[];
}

const skillsOptions = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

const JobApplicationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const {
    fullName,
    email,
    yearsOfExperience,
    skills,
    setFullName,
    setEmail,
    setYearsOfExperience,
    setSkills,
    resetForm,
  } = useFormStore();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await createApplication(data);
      setSubmittedData(responseData);
      resetForm();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <button
          className="mb-4 p-2 bg-blue-500 text-white dark:bg-yellow-500"
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle Dark Mode
        </button>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto"
        >
          <h2 className="text-2xl mb-4 dark:text-white">
            Job Application Form
          </h2>

          <CustomInput
            label="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName && "Full Name is required."}
          />

          <CustomInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email && "Valid email is required."}
          />

          <CustomInput
            label="Years of Experience"
            type="number"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(parseInt(e.target.value))}
            error={
              errors.yearsOfExperience && "Years of experience is required."
            }
          />

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Skills
            </label>
            <select
              multiple
              {...register("skills", { required: true })}
              className="mt-1 p-2 w-full border rounded bg-white dark:bg-gray-700 dark:text-white text-gray-700 dark:text-white"
              value={skills}
              onChange={(e) =>
                setSkills(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              {skillsOptions.map((skill) => (
                <option
                  key={skill}
                  value={skill}
                >
                  {skill}
                </option>
              ))}
            </select>
            {errors.skills && (
              <p className="text-red-500">Select at least one skill.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded dark:bg-yellow-500"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {error && <div className="mt-4 text-red-500">{error}</div>}

        {submittedData && (
          <div className="mt-6 bg-white text-gray-700 dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto">
            <h3 className="text-2xl mb-4 dark:text-white">Submitted Data</h3>
            <pre className="bg-gray-100 dark:bg-gray-700 dark:text-white p-4 rounded">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplicationForm;
