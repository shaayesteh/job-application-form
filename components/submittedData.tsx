import React from "react";

interface SubmittedDataProps {
  data: {
    fullName: string;
    email: string;
    yearsOfExperience: number;
    skills: string[];
  };
}

function SubmittedData({ data }: SubmittedDataProps) {
  return (
    <div className="mt-6 bg-white text-gray-700 dark:bg-gray-800 p-6 rounded shadow-md max-w-md mx-auto">
      <h3 className="text-2xl mb-4 dark:text-white">Submitted Data</h3>
      <table className="table-auto w-full text-gray-700 dark:text-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Field</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Full Name</td>
            <td className="border px-4 py-2">{data.fullName}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Email</td>
            <td className="border px-4 py-2">{data.email}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Years of Experience</td>
            <td className="border px-4 py-2">{data.yearsOfExperience}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Skills</td>
            <td className="border px-4 py-2">{data.skills.join(", ")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SubmittedData;
