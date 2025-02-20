import React from "react";

type FormInputProps = {
  label: string;
  type: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  id,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-1/4 mt-4">
      <label htmlFor={id} className="text-xs text-slate-750 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border border-slate-200 focus:outline-none text-sm bg-slate-50 rounded-md px-5 py-3"
        onChange={onChange}
      />
    </div>
  );
};
