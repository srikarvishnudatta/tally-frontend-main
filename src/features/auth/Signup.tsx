import AppleButton from "@/components/apple-button"
import ErrorMessage from "@/components/error-message"
import GoogleButton from "@/components/google-button"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import Divider from "@/components/ui/divider"
import { Input } from "@/components/ui/input"
import { signup } from "@/service/auth.service"
import type { SignupData } from "@/types"
import { Label } from "@/components/ui/label"
import { useMutation } from "@tanstack/react-query"
import type { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"


function Signup() {
  const navigate = useNavigate()
    const {mutate, error, isPending} = useMutation<unknown, Error, SignupData>({
        mutationFn: (data) => signup({...data}),
        onSuccess: () => navigate('/app')
    })
  const signupHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form as HTMLFormElement)
        const firstName = formData.get("firstName") as string
        const lastName = formData.get("lastName") as string
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        mutate({firstName, lastName, email, password})
  }
  return (
    <form 
    className="mx-2 space-y-2 border-1 border-muted px-4 py-10 w-[560px] shadow-md rounded-md animate-slide-in"
    onSubmit={signupHandler}
    >
        <Logo/>
        <h2 className="text-3xl">Signup</h2>
        {error && <ErrorMessage message={error.message}/>}
        <Label htmlFor="firstName">
                   First Name
               </Label>
        <Input
                   placeholder="First Name"
                   id="firstName"
                   name="firstName"
                   required
               />
        <Label htmlFor="lastName" >
                   Last Name
               </Label>
        <Input
                   placeholder="Last Name"
                   id="lastName"
                   name="lastName"
                   required
               />
        <Label htmlFor="email">
            Email
        </Label>
        <Input required type="email" name="email" id="email" placeholder="Email"/>
            <Label htmlFor="password">
            Password
        </Label>
        <Input required type="password" name="password" id="password" placeholder="password"/>

        <Button className="w-full" disabled={isPending}>
            Signup
        </Button>
        <p className="text-center text-sm">Already have an account? <Link to={"/auth/login"} className="text-muted-foreground underline">Login here</Link></p>
        <Divider />
        <GoogleButton />
        <AppleButton />
    </form>
  )
}

export default Signup