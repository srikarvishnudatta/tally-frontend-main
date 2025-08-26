import { Route, Routes } from "react-router"
import LandingPage from "@/features/landingpage/LandingPage"
import AuthLayout from "@/features/auth/AuthLayout"
import Login from "@/features/auth/Login"
import Signup from "@/features/auth/Signup"
import AppLayout from "./features/home/AppLayout"
import PersonalExpensesPage from "./features/personal-expenses/PersonalExpensesPage"
import GroupsPage from "./features/groups/GroupsPage"
import GroupDetailPage from "./features/group-detail/GroupDetailPage"
import Dashboard from "./features/dashboard/Dashboard"
import SettingsPage from "./features/settings/SettingsPage"
import InvitesPage from "./features/invite/InvitesPage"
import NotFound from "./NotFound"
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup />}/>
      </Route>
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Dashboard />}/>
        <Route path="groups" element={<GroupsPage />}/>
        <Route path="groups/:groupId" element={<GroupDetailPage />}/>
        <Route path="personal" element={<PersonalExpensesPage />} />
        <Route path="settings" element={<SettingsPage />}/>
        <Route path="invites" element={<InvitesPage />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App
