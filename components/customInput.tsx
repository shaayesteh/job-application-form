import React from "react";

interface CustomInputProps {
  label: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-300">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full border rounded bg-white dark:bg-gray-700 dark:text-white text-gray-700 dark:text-white"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CustomInput;
