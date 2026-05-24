


import { Input } from "@repo/ui/input";
import { SubmitButton } from "@repo/ui/button";



async function registerUser(formData: FormData) {
  "use server";

  const res = await fetch("http://localhost:5001/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}



export default function RegisterForm() {
  return (
    <form action={registerUser}>
      <Input type="text" name="name" placeholder="Name" />
      <Input type="text" name="email" placeholder="Email" />
      <Input  name="password" placeholder="Password"  type="password" />
      <SubmitButton label="Register" />
      </form>
  );
}