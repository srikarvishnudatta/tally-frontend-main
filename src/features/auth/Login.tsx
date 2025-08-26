import AppleButton from "@/components/apple-button"
import ErrorMessage from "@/components/error-message"
import GoogleButton from "@/components/google-button"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import Divider from "@/components/ui/divider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/service/auth.service"
import type { LoginData } from "@/types"
import { useMutation } from "@tanstack/react-query"
import type { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login() {
    const navigate = useNavigate()
    const {mutate, error, isPending} = useMutation<unknown, Error, LoginData>({
        mutationFn: (data) => login({...data}),
        onSuccess: () => navigate('/app')
    })
    const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form as HTMLFormElement)
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        mutate({email, password})
    }
  return (
    <form 
    className="bg-white mx-2 space-y-2 border-1 border-muted px-4 py-10 w-[560px] shadow-md rounded-md animate-slide-in"
    onSubmit={loginHandler}
    >
        <Logo/>
        <h2 className="text-3xl">Login</h2>
        {error && <ErrorMessage message={error.message}/>}
        <Label htmlFor="email">
            Email
        </Label>
        <Input required type="email" name="email" id="email" placeholder="Email"/>
        <div className="flex justify-between">
            <Label htmlFor="password">
            Password
        </Label>
        <Link to={"/auth/forgot"} className="text-muted-foreground underline text-xs">Forgot your password?</Link>
        </div>
        <Input required type="password" name="password" id="password" placeholder="password"/>
        <Button className="w-full" disabled={isPending}>
            Login
        </Button>
        <p className="text-center text-sm">Don't have an account? <Link to={"/auth/signup"} className="text-muted-foreground underline">Create one</Link></p>
        <Divider />
        <GoogleButton />
        <AppleButton />
    </form>
  )
}

export default Login