"use client";

import { useActionState } from "react";
import { registerUser, FormState } from "./actions";
import { Input } from "@repo/ui/input";
import { SubmitButton } from "@repo/ui/button";

const initialState: FormState = {
  errors: {},
  values: {
    name: "",
    email: "",
    password: "",
  },
  success: false,
};

console.log("hii")


export default function RegisterForm() {
  const [state, formAction] = useActionState(
    registerUser,
    initialState
  );


  return (
    <form action={formAction} className="space-y-2">

      {/* Name */}
     
        <Input
          type="text"
          name="name"
          defaultValue={state?.values?.name || ""}
          placeholder="Name"
          error={state.errors?.name}
        />
    
      {/* Email */}
       <Input
          type="text"
          name="email"
          defaultValue={state?.values?.email || ""}
          placeholder="Email"
          error={state.errors?.email}
        />

      {/* Password */}
       <Input
          type="password"
          name="password"
          defaultValue={state?.values?.password || ""}
          placeholder="Email"
          error={state.errors?.password}
        />

      {state.success && (
        <p className="text-green-500">Success!</p>
      )}

      <SubmitButton />
    </form>
  );
}