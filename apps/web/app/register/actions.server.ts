export async function registerUser(formData: FormData) {
  "use server";

  try {
    const res = await fetch("http://localhost:5001/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API error: ${res.status} ${text}`);
    }

    return res.json();
  } catch (err) {
    // Re-throw so Next surfaces the error to the client form state
    console.error("registerUser error:", err);
    throw err;
  }
}
