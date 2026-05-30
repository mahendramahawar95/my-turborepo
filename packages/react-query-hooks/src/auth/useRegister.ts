import { useMutation } from "@tanstack/react-query";
import { RegisterApi } from "@repo/api-client";

const useRegister = () => {
  return useMutation({
    mutationFn: RegisterApi,

    onSuccess: (data) => {
      console.log("Register Success:", data);

      // store token if needed
      // localStorage.setItem("token", data.token);
    },

    onError: (error: any) => {
      console.log("Register Error:", error?.response?.data?.message);
    },

    retry: 1,
  });
};

export default useRegister;
