"use server";

import { registerApi } from "@repo/api-client";

import { registerSchema, type RegisterInput } from "@repo/validations";

export async function registerAction(prevState: unknown, formData: FormData) {
  const rawData: RegisterInput = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
    confirmPassword: String(formData.get("confirmPassword")),
  };

  const validatedFields = registerSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await registerApi(validatedFields.data);

    return response;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      Error: error,
    };
  }
}
