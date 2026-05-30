import axios from "axios";

type CreateApiClientOptions = {
  baseURL?: string;
};

export function createApiClient({
  baseURL,
}: CreateApiClientOptions) {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
}