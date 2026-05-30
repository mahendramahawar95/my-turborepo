import api from "./axios";

export const RegisterApi = async (payload:any) => {
  const res = await api.post("/auth/register", payload);

  return res.data;
};