"use server";

type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export type FormState = {
  errors?: FormErrors;
  values?: {
    name?: string;
    email?: string;
    password?: string;
  };
  success?: boolean;
};

export async function registerUser(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: FormErrors = {};

  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  if (password.length < 6)
    errors.password = "Min 6 characters";

  // ❌ Return errors + values
  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: { name, email, password }, // 🔥 important
    };
  }

  return { success: true };
}