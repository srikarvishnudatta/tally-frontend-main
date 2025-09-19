import { Route, Routes } from "react-router";
import LandingPage from "@/pages/LandingPage";
import AuthLayout from "@/components/layouts/AuthLayout";
import Login from "@/features/auth/Login";
import Signup from "@/features/auth/Signup";
import AppLayout from "./components/layouts/AppLayout";
import ExpensesPage from "@/pages/Expenses";
import GroupsPage from "@/pages/Groups";
import GroupDetailPage from "@/pages/GroupDetailPage";
import Dashboard from "@/pages/Dashboard";
import SettingsPage from "./pages/Settings";
import InvitesPage from "@/pages/Invites";
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
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="invites" element={<InvitesPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
