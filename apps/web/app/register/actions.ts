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
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const errors: FormErrors = {};

  if (!name) errors.name = "Name required";
  if (!email) errors.email = "Email required";
  if (password.length < 6) errors.password = "Min 6 characters";

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: { name, email, password },
      success: false,
    };
  }

  const res = await fetch("http://localhost:5001/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      errors: {
        email: data.message || "Registration failed",
      },
      values: { name, email, password },
      success: false,
    };
  }

  return {
    success: true,
  };
}
