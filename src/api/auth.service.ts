import type { LoginData, LoginResponse, SignupData } from "@/types";
import axiosInstance from "./axiosConfig";

async function login({ email, password }: LoginData) {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    const { ACCESS_TOKEN }: LoginResponse = response.data;
    if (ACCESS_TOKEN) {
      localStorage.setItem("ACCESS_TOKEN", ACCESS_TOKEN);
    }
  } catch (error) {
    throw new Error("Some unknown error");
  }
}
async function signup(data: SignupData) {
  try {
    const response = await axiosInstance.post("/auth/signup", data);
    const { ACCESS_TOKEN }: LoginResponse = response.data;
    if (response.status === 201) {
      localStorage.setItem("ACCESS_TOKEN", ACCESS_TOKEN);
    }
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}
export { login, signup };
