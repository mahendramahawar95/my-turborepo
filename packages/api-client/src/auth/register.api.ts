import type { ApiResponse, RegisterUserResponse } from "@repo/types";

import type { RegisterInput } from "@repo/validations";

export async function registerApi(
  payload: RegisterInput,
): Promise<ApiResponse<RegisterUserResponse>> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is missing");
  }

  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
}
