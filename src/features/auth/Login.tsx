import AppleButton from "@/components/apple-button";
import ErrorMessage from "@/components/error-message";
import GoogleButton from "@/components/google-button";
import Logo from "@/components/logo";
import Divider from "@/components/divider";
import { login } from "@/api/auth.service";
import type { LoginData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { mutate, error, isPending } = useMutation<unknown, Error, LoginData>({
    mutationFn: (data) => login({ ...data }),
    onSuccess: () => navigate("/app"),
  });
  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    mutate({ email, password });
  };
  return (
    <form
      className="mx-2 space-y-2 border-1 border-gray-400 px-4 py-10 w-[560px] shadow-md rounded-md animate-slide-in"
      onSubmit={loginHandler}
    >
      <h2 className="text-3xl font-semibold flex items-center gap-2">
        <Logo /> Login
      </h2>
      {error && <ErrorMessage message={error.message} />}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          required
          type="email"
          className="input w-full"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="flex justify-between items-center">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <Link
          to={"/auth/forgot"}
          className="text-gray-300 underline text-xs link"
        >
          Forgot your password?
        </Link>
      </div>
      <input
        className="input w-full"
        required
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button className="w-full btn btn-primary" disabled={isPending}>
        Login
      </button>
      <p className="text-gray-300 text-center text-sm">
        Don't have an account?{" "}
        <Link to={"/auth/signup"} className="link underline">
          Create one
        </Link>
      </p>
      <Divider />
      <GoogleButton />
      <AppleButton />
    </form>
  );
}

export default Login;
