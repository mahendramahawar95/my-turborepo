"use client";

import {useFormStatus} from "react-dom"

export const SubmitButton = ({ label = "Submit" }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-500 text-white py-2 rounded disabled:opacity-50"
    >
      {pending ? "Loading..." : label}
    </button>
  );
};