import { registerSchema } from "../validations/auth.validation";
import { registerUser } from "../services/auth.service";

export const register = async (req: any, res: any) => {
  try {
     const { name, email, password } = req.body;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // validation
    const parsed = registerSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: parsed.error.format(),
      });
    }

    const result = await registerUser(parsed.data);

    res.json(result);
  } catch (err: any) {
    res.status(500).json({
      error: err.message,
    });
  }
};