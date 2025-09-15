import { Route, Routes } from "react-router";
import LandingPage from "@/pages/LandingPage";
import AuthLayout from "@/components/layouts/AuthLayout";
import Login from "@/features/auth/Login";
import Signup from "@/features/auth/Signup";
import AppLayout from "./components/layouts/AppLayout";
import PersonalExpensesPage from "@/pages/PersonalExpensesPage";
import GroupsPage from "@/pages/GroupsPage";
import GroupDetailPage from "@/pages/GroupDetailPage";
import Dashboard from "./features/dashboard/Dashboard";
import SettingsPage from "./pages/SettingsPage";
import InvitesPage from "@/pages/InvitesPage";
import NotFound from "./NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="groups" element={<GroupsPage />} />
        <Route path="groups/:groupId" element={<GroupDetailPage />} />
        <Route path="personal" element={<PersonalExpensesPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="invites" element={<InvitesPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
