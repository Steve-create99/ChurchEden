import { Navigate, Route, Routes } from "react-router";
import { LandingPage } from "./components/landing/landing-page";
import { OnboardingFlow } from "./components/onboarding";
import { Dashboard } from "./components/dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/onboarding/*" element={<OnboardingFlow />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}