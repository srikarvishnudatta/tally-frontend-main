import AppleButton from "@/components/apple-button";
import ErrorMessage from "@/components/error-message";
import GoogleButton from "@/components/google-button";
import Logo from "@/components/logo";
import Divider from "@/components/divider";
import { signup } from "@/api/auth.service";
import type { SignupData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { mutate, error, isPending } = useMutation<unknown, Error, SignupData>({
    mutationFn: (data) => signup({ ...data }),
    onSuccess: () => navigate("/app"),
  });
  const signupHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    mutate({ firstName, lastName, email, password });
  };
  return (
    <form
      className="bg-secondary/10 mx-2 space-y-2 border-1 border-gray-400 border-muted px-4 py-10 w-[560px] shadow-md rounded-md animate-slide-in"
      onSubmit={signupHandler}
    >
      <h2 className="text-3xl flex items-center gap-2 font-semibold">
        <Logo /> Signup
      </h2>
      {error && <ErrorMessage message={error.message} />}
      <div>
        <label htmlFor="firstName" className="font-semibold">
          First Name
        </label>
        <input
          className="input w-full"
          placeholder="First Name"
          id="firstName"
          name="firstName"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="text-semibold">
          Last Name
        </label>
        <input
          className="input w-full"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="font-semibold">Email</label>
        <input
        className="input w-full"
          required
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="password" className="font-semibold">Password</label>
        <input
          required
          className="input w-full"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>

      <button className="btn btn-primary w-full" disabled={isPending}>
        Signup
      </button>
      <p className="text-center text-sm text-gray-300">
        Already have an account?{" "}
        <Link to={"/auth/login"} className="text-muted-foreground underline">
          Login here
        </Link>
      </p>
      <Divider />
      <GoogleButton />
      <AppleButton />
    </form>
  );
}

export default Signup;
