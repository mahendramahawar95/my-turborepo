"use client";

import {useFormStatus} from "react-dom"
type props={
    label:string;
}
export const SubmitButton = ({ label = "Submit" }:props) => {
    
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