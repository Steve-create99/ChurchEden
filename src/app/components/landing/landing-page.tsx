import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import landingHero from "@/assets/landing-hero.png";
import { EdenLogo } from "../onboarding/eden-logo";

const INTEGRATIONS = ["MoMo", "Flutterwave", "Paystack", "Stripe", "PayPal"];

/**
 * Marketing landing page, re-implemented from design.md's "landing page"
 * mockup. The reference used a CSS custom-property mouse tracker purely for
 * a hover glow — reproduced here with Tailwind's built-in hover states
 * instead of a DOM-querying script.
 */
export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-eden-surface font-eden text-eden-on-background">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center contrast-110 saturate-125"
        style={{ backgroundImage: `url(${landingHero})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-eden-surface-dim/95 from-5% via-eden-surface-dim/55 via-35% to-transparent to-65%" />
      <div className="pointer-events-none absolute inset-4 z-50 rounded-[2rem] border border-white/40" />

      <main className="relative z-20 flex min-h-screen w-full flex-col px-6 py-12 sm:px-12 sm:py-16">
        <div className="flex h-full max-w-2xl flex-col">
          <header className="mb-16 sm:mb-20">
            <EdenLogo />
          </header>

          <section className="flex flex-grow flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex flex-col leading-[1.1]"
            >
              <span className="text-4xl font-light text-white/90 sm:text-6xl">Faith You Can Track</span>
              <span className="text-4xl font-bold text-white sm:text-6xl">Growth You Can Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10 max-w-[520px] text-lg leading-relaxed text-white/80"
            >
              Built for churches who serve with confidence. Premium financial stewardship for the modern ministry.
            </motion.p>

            <div className="mb-10">
              <p className="mb-4 text-xs uppercase tracking-widest text-white/60">Integrates with:</p>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                {INTEGRATIONS.map((name) => (
                  <span key={name} className="text-base font-bold">
                    {name}
                  </span>
                ))}
                <span className="text-xs font-bold uppercase tracking-tighter text-white/40">+More</span>
              </div>
            </div>

            <div className="mb-14 flex flex-wrap items-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/onboarding/welcome")}
                className="flex items-center gap-3 rounded-2xl bg-eden-primary-container px-8 py-4 font-medium text-white shadow-lg shadow-eden-primary-container/20 transition-all hover:brightness-110 sm:px-10 sm:py-5"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 font-medium text-white transition-all hover:bg-white/20 sm:px-10 sm:py-5"
              >
                Watch Demo
              </motion.button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1.5 text-[#FFD700]">
                <span className="mr-2 text-2xl font-bold text-white">5.0</span>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-white/70">Trusted by over 500 churches worldwide</p>
            </div>
          </section>

          <footer className="mt-auto pt-12">
            <p className="text-xs leading-relaxed text-white/40">
              By registering you agree to ChurchEden&apos;s{" "}
              <a className="underline underline-offset-4 transition-colors hover:text-white" href="#">
                Terms of Use
              </a>{" "}
              |{" "}
              <a className="underline underline-offset-4 transition-colors hover:text-white" href="#">
                Privacy Policy
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
