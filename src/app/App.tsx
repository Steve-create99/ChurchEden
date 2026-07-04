import { useState } from "react";
import { AuroraBackground } from "./components/aurora-background";
import { BrandPanel } from "./components/brand-panel";
import { GlassCard } from "./components/glass-card";
import { TabSwitcher } from "./components/tab-switcher";
import { RegisterForm } from "./components/register-form";
import { SignInForm } from "./components/signin-form";
import { ChurchSetupWizard } from "./components/church-setup-wizard";
import { SuccessScreen } from "./components/success-screen";
import { MobileBrandHeader } from "./components/mobile-brand-header";
import { Dashboard } from "./components/dashboard";

type Screen = "auth" | "setup" | "success" | "dashboard";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("auth");
  const [activeTab, setActiveTab] = useState<"register" | "signin">("register");

  const handleAuthSuccess = () => {
    setCurrentScreen("setup");
  };

  const handleSetupComplete = () => {
    setCurrentScreen("success");
  };

  const handleEnterDashboard = () => {
    setCurrentScreen("dashboard");
  };

  // Auth Screen (Split Layout)
  if (currentScreen === "auth") {
    return (
      <div className="relative min-h-screen overflow-y-auto">
        <AuroraBackground />

        <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
          {/* Mobile Header */}
          <MobileBrandHeader />

          {/* Left Panel - Brand (Desktop) */}
          <div className="hidden lg:flex lg:w-[45%] relative">
            <BrandPanel />
          </div>

          {/* Right Panel - Auth Forms */}
          <div className="flex-1 lg:w-[55%] flex items-center justify-center p-6 lg:p-12">
            <div
              className="w-full max-w-2xl rounded-3xl p-6 lg:p-12"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(200, 134, 10, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Amber accent line */}
              <div
                className="absolute top-0 left-1/4 right-1/4 h-[2px] rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, var(--aurora-amber), transparent)',
                  boxShadow: '0 0 20px rgba(200, 134, 10, 0.4)',
                }}
              />

              <div className="flex justify-center mb-8">
                <TabSwitcher activeTab={activeTab} onChange={setActiveTab} />
              </div>

              {activeTab === "register" ? (
                <RegisterForm onSuccess={handleAuthSuccess} />
              ) : (
                <SignInForm onSuccess={handleAuthSuccess} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Church Setup Wizard
  if (currentScreen === "setup") {
    return (
      <div className="relative min-h-screen overflow-y-auto">
        <AuroraBackground />
        <div className="relative z-10">
          <ChurchSetupWizard onComplete={handleSetupComplete} />
        </div>
      </div>
    );
  }

  // Success Screen
  if (currentScreen === "success") {
    return (
      <div className="relative min-h-screen overflow-y-auto">
        <AuroraBackground />
        <div className="relative z-10">
          <SuccessScreen onEnterDashboard={handleEnterDashboard} />
        </div>
      </div>
    );
  }

  // Dashboard
  return <Dashboard />;
}