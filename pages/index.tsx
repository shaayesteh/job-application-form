import React from "react";
import JobApplicationForm from "../components/jobApplicationForm";
import "../globals.css";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <JobApplicationForm />
    </div>
  );
};

export default HomePage;
