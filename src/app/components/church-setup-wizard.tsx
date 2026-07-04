import { useState } from "react";
import { InputField } from "./input-field";
import { AmberButton } from "./amber-button";
import { GlassCard } from "./glass-card";
import { Church, MapPin, Globe, Calendar, Upload, Mail } from "lucide-react";
import { motion } from "motion/react";

interface ChurchSetupWizardProps {
  onComplete: () => void;
}

export function ChurchSetupWizard({ onComplete }: ChurchSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    churchName: "",
    country: "Ghana",
    city: "",
    address: "",
    foundedYear: "",
    churchLogo: null as File | null,
    churchPhone: "",
    churchEmail: "",
  });

  const steps = [
    { number: 1, title: "Church Profile" },
    { number: 2, title: "Church Details" },
  ];

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= step.number
                        ? 'border-[var(--aurora-amber)] bg-[var(--aurora-amber)] text-white'
                        : 'border-gray-300 bg-white text-gray-400'
                    }`}
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
                    animate={currentStep >= step.number ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                  <span
                    className="mt-2 text-center"
                    style={{
                      fontFamily: 'var(--font-label)',
                      fontSize: '13px',
                      color: currentStep >= step.number ? 'var(--aurora-amber)' : 'rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-24 h-[2px] mx-4 transition-all duration-300 ${
                      currentStep > step.number ? 'bg-[var(--aurora-amber)]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <GlassCard>
          {/* Step 1: Church Profile */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
                Church Profile
              </h2>

              <div className="space-y-4">
                <InputField
                  label="Church Name"
                  type="text"
                  placeholder="Grace Chapel"
                  icon={<Church size={18} />}
                  value={formData.churchName}
                  onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Country"
                    type="text"
                    placeholder="Ghana"
                    icon={<Globe size={18} />}
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  />
                  <InputField
                    label="City"
                    type="text"
                    placeholder="Accra"
                    icon={<MapPin size={18} />}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>

                <InputField
                  label="Address"
                  type="text"
                  placeholder="123 Main Street, East Legon"
                  icon={<MapPin size={18} />}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />

                <InputField
                  label="Founded Year"
                  type="number"
                  placeholder="2010"
                  icon={<Calendar size={18} />}
                  value={formData.foundedYear}
                  onChange={(e) => setFormData({ ...formData, foundedYear: e.target.value })}
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: Church Details */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>
                Church Details
              </h2>

              <div className="space-y-5">
                {/* Church Logo Upload */}
                <div>
                  <label className="block mb-2 tracking-wide" style={{ fontFamily: 'var(--font-label)', fontSize: '13px', color: 'rgba(0, 0, 0, 0.7)' }}>
                    Church Logo
                  </label>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-[var(--aurora-amber)] transition-all duration-300"
                    onClick={() => document.getElementById('logo-upload')?.click()}
                  >
                    <Upload className="mx-auto mb-3 text-gray-400" size={32} />
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(0, 0, 0, 0.6)' }}>
                      Click to upload or drag and drop
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(0, 0, 0, 0.4)' }}>
                      SVG, PNG, JPG (max. 2MB)
                    </p>
                    <input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setFormData({ ...formData, churchLogo: e.target.files?.[0] || null })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Church Phone"
                    type="tel"
                    placeholder="+233 XX XXX XXXX"
                    value={formData.churchPhone}
                    onChange={(e) => setFormData({ ...formData, churchPhone: e.target.value })}
                    required
                  />
                  <InputField
                    label="Church Email"
                    type="email"
                    placeholder="info@church.com"
                    icon={<Mail size={18} />}
                    value={formData.churchEmail}
                    onChange={(e) => setFormData({ ...formData, churchEmail: e.target.value })}
                    required
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 mt-8">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                ← Back
              </button>
            )}
            <AmberButton onClick={handleNext} className="flex-1">
              {currentStep === 2 ? "Complete Setup →" : "Continue →"}
            </AmberButton>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
