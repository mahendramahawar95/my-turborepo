import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { registerSchema } from "@repo/validations";

export async function registerController(req: Request, res: Response) {
  try {
    const parsed = registerSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const { name, email, password } = parsed.data;

    const existingUser = false;

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
        errors: {
          email: ["Email already exists"],
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      password: hashedPassword,
    };

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
