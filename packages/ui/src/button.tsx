"use client";

import { useFormStatus } from "react-dom";

type Props = {
  label?: string;
  isDisabled?: boolean;
};

export const SubmitButton = ({
  label = "Submit",
  isDisabled = false,
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || isDisabled}
      className="w-full bg-blue-500 text-white py-2 rounded disabled:opacity-50"
    >
      {pending ? "Loading..." : label}
    </button>
  );
};