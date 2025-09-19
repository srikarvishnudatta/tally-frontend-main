import AppleButton from "@/components/apple-button";
import ErrorMessage from "@/components/error-message";
import GoogleButton from "@/components/google-button";
import Divider from "@/components/divider";
import { signup } from "@/api/auth.service";
import type { SignupData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calculator } from "lucide-react";
import { signupSchema } from "@/zod/schema";

function Signup() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate, error, isPending } = useMutation<unknown, Error, SignupData>({
    mutationFn: (data) => signup({ ...data }),
    onSuccess: () => navigate("/app"),
    onError: (err: any) => {
      if (err.response?.data?.field) {
      setErrors({ [err.response.data.field]: err.response.data.message });
    } else {
      // fallback global error
      setErrors({ global: err.message });
    }
    }
  });
  const signupHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);

    const values = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = signupSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    mutate({ ...values });
  };
  return (
    <form
      className=" mx-2 space-y-2 px-4 py-10 w-[560px] shadow-md glass-effect animate-slide-in"
      onSubmit={signupHandler}
    >
      <h2 className="text-3xl flex items-center gap-2 font-semibold">
        <Calculator /> Signup
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
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
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
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>
      <div>
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          className={`input w-full ${errors.email && "border-red-500"}`}
          required
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          required
          className="input w-full"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.passwprd}</p>}
      </div>

      <button className="button w-full justify-center" disabled={isPending}>
        Signup
      </button>
      <p className="text-center text-sm text-gray-600">
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
