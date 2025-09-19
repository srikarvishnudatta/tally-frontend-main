import { Outlet } from "react-router-dom"


function AuthLayout() {
  return (
    <main className="grid-background content-size flex justify-center items-center">
        <Outlet />
    </main>
  )
}

export default AuthLayout