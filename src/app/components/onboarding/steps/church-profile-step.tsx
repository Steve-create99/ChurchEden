import { useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Calendar, Church, Globe, Mail, MapPin, Phone, Upload } from "lucide-react";
import { OnboardingLayout } from "../onboarding-layout";
import { EdenField } from "../eden-field";
import { EdenButton } from "../eden-button";
import { useOnboarding } from "../onboarding-context";

export function ChurchProfileStep() {
  const navigate = useNavigate();
  const { data, updateData } = useOnboarding();
  const [form, setForm] = useState({
    churchName: data.churchName,
    country: data.country,
    city: data.city,
    address: data.address,
    foundedYear: data.foundedYear,
    churchPhone: data.churchPhone,
    churchEmail: data.churchEmail,
  });
  const [logoName, setLogoName] = useState<string | null>(data.churchLogo?.name ?? null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateData(form);
    navigate("/onboarding/complete");
  };

  return (
    <OnboardingLayout
      stepPath="church-profile"
      title="Church Profile"
      subtitle="Tell us about your church so we can set things up correctly."
      footer={
        <>
          <EdenButton type="button" variant="outline" onClick={() => navigate("/onboarding/welcome")}>
            Back
          </EdenButton>
          <EdenButton type="submit" form="church-profile-form" className="flex-1">
            Complete Setup
          </EdenButton>
        </>
      }
    >
      <form id="church-profile-form" onSubmit={handleSubmit} className="space-y-5">
        <EdenField
          label="Church Name"
          placeholder="Grace Chapel"
          icon={<Church size={18} />}
          value={form.churchName}
          onChange={(event) => setForm((prev) => ({ ...prev, churchName: event.target.value }))}
          required
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <EdenField
            label="Country"
            placeholder="Ghana"
            icon={<Globe size={18} />}
            value={form.country}
            onChange={(event) => setForm((prev) => ({ ...prev, country: event.target.value }))}
            required
          />
          <EdenField
            label="City"
            placeholder="Accra"
            icon={<MapPin size={18} />}
            value={form.city}
            onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
            required
          />
        </div>

        <EdenField
          label="Address"
          placeholder="123 Main Street, East Legon"
          icon={<MapPin size={18} />}
          value={form.address}
          onChange={(event) => setForm((prev) => ({ ...prev, address: event.target.value }))}
          required
        />

        <EdenField
          label="Founded Year"
          type="number"
          placeholder="2010"
          icon={<Calendar size={18} />}
          value={form.foundedYear}
          onChange={(event) => setForm((prev) => ({ ...prev, foundedYear: event.target.value }))}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <EdenField
            label="Church Phone"
            type="tel"
            placeholder="+233 XX XXX XXXX"
            icon={<Phone size={18} />}
            value={form.churchPhone}
            onChange={(event) => setForm((prev) => ({ ...prev, churchPhone: event.target.value }))}
            required
          />
          <EdenField
            label="Church Email"
            type="email"
            placeholder="info@church.com"
            icon={<Mail size={18} />}
            value={form.churchEmail}
            onChange={(event) => setForm((prev) => ({ ...prev, churchEmail: event.target.value }))}
            required
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-eden-on-surface-variant">Church Logo</label>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full rounded-xl border-2 border-dashed border-eden-outline-variant/40 p-8 text-center transition-all duration-300 hover:border-eden-primary"
          >
            <Upload className="mx-auto mb-3 text-eden-outline" size={28} />
            <p className="text-sm text-eden-on-surface-variant">
              {logoName ?? "Click to upload or drag and drop"}
            </p>
            <p className="text-xs text-eden-outline">SVG, PNG, JPG (max. 2MB)</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0] ?? null;
                setLogoName(file?.name ?? null);
                updateData({ churchLogo: file });
              }}
            />
          </button>
        </div>
      </form>
    </OnboardingLayout>
  );
}
