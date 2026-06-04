"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { FormError } from "@repo/ui/form-error";

import { registerSchema, type RegisterInput } from "@repo/validations";

import { registerAction } from "@/app/actions/auth/register.action";
const initialState = {
  success: false,
  message: "",
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Creating Account..." : "Create Account"}
    </Button>
  );
}
export default function RegisterForm() {
  const [state, formAction] = useActionState(registerAction, initialState);

  const {
    register,
    formState: { errors },
    setError,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });
  useEffect(() => {
    if (state?.errors) {
      Object.entries(state.errors).forEach(([field, messages]) => {
        setError(field as keyof RegisterInput, {
          type: "server",
          message: messages?.[0],
        });
      });
    }
  }, [state, setError]);

  return (
    <form
      action={formAction}
      className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-2xl border p-6 shadow-sm"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">Name</label>

        <Input placeholder="Enter your name" {...register("name")} />

        <FormError message={errors.name?.message} />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>

        <Input placeholder="Enter your email" {...register("email")} />

        <FormError message={errors.email?.message} />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>
        <Input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />

        <FormError message={errors.password?.message} />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Confirm Password
        </label>
        <Input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />

        <FormError message={errors.confirmPassword?.message} />
      </div>

      {!state.success && state.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
      {state.success && (
        <p className="text-sm text-green-600">Account created successfully</p>
      )}

      <SubmitButton />
    </form>
  );
}
