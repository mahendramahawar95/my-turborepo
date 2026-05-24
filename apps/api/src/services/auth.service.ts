import bcrypt from "bcrypt";
import { createClient } from "redis";

const redis = createClient();

export const registerUser = async (data: any) => {
  const { name, email, password } = data;

  // 1. Check if user exists in Redis
  const existing = await redis.get(`user:${email}`);
  if (existing) {
    throw new Error("User already exists");
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    name,
    email,
    password: hashedPassword,
  };

  // 3. Save in Redis (temporary storage example)
  await redis.set(`user:${email}`, JSON.stringify(user));

  return { message: "User registered successfully" };
};
