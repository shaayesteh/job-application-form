import React from "react";

interface CustomInputProps {
  label: string;
  type: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  min?: number | string;
}

function CustomInput({
  label,
  type,
  value,
  onChange,
  error,
  min,
}: CustomInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-300">{label}</label>
      <input
        required
        minLength={3}
        min={min}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full border rounded bg-white dark:bg-gray-700 dark:text-white text-gray-700 dark:text-white"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default CustomInput;
