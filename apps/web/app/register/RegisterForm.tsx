import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";

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
      <Input name="password" placeholder="Password" type="password" />
      <Button type="submit">Register</Button>
    </form>
  );
}



// "use client";

// import { useActionState } from "react";
// import { registerUser, FormState } from "./actions";
// import { Input } from "@repo/ui/input";
// import { SubmitButton } from "@repo/ui/button";

// const initialState: FormState = {
//   errors: {},
//   values: {
//     name: "",
//     email: "",
//     password: "",
//   },
  
//   success: false,
// };

// export default function RegisterForm() {
//   const [state, formAction] = useActionState(
//     registerUser,
//     initialState
//   );

//   console.log("state",state)

//   return (
//     <form action={formAction} className="space-y-2">

//       {/* Name */}
     
//         <Input
//           type="text"
//           name="name"
//           defaultValue={state?.values?.name || ""}
//           placeholder="Name"
//           error={state.errors?.name}
//         />
    
//       {/* Email */}
//        <Input
//           type="text"
//           name="email"
//           defaultValue={state?.values?.email || ""}
//           placeholder="Email"
//           error={state.errors?.email}
//         />

//       {/* Password */}
//        <Input
//           type="password"
//           name="password"
//           defaultValue={state?.values?.password || ""}
//           placeholder="Email"
//           error={state.errors?.password}
//         />

//       {state.success && (
//         <p className="text-green-500">Success!</p>
//       )}

//       <SubmitButton label="Submit" />
//     </form>
//   );
// }