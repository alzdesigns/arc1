"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

function ArcLogo({
  width = 64,
  height = 32,
  color = "white",
  className
}: {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="500 300 920 480"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ARC"
      className={className}
    >
      <path
        fill={color}
        d="M559.19,405.74v357.85c0,3.83,2.72,5.79,6.09,4.41,33.16-13.17,66.6-24.64,100.83-34.73,3.68-1.04,6.68-4.97,6.68-8.8v-173.1c0-3.83,3-7.76,6.71-8.76h0c3.71-1,6.74,1.32,6.74,5.14v173.1c0,3.83,3.02,6.14,6.77,5.18,36.51-9.28,73.39-16.21,110.62-21.9,3.99-.58,7.24-4.12,7.24-7.95v-357.85c0-3.83-3.25-6.49-7.24-5.91-82.07,12.64-161.16,33.2-238.36,63.86-3.38,1.38-6.09,5.63-6.09,9.45ZM679.5,481.02h0c-3.71,1-6.71-1.27-6.71-5.1v-47.72c0-3.83,3-7.76,6.71-8.76h0c3.71-1,6.74,1.32,6.74,5.14v47.72c0,3.83-3.03,7.72-6.74,8.72Z"
      />
      <path
        fill={color}
        d="M1100.02,328.62c-89.3-9.64-177.97-9.64-267.27,0-4.05.47-7.32,3.99-7.32,7.81v357.85c0,3.83,3.27,6.53,7.32,6.05,39.4-4.28,78.64-6.79,118.27-7.63,4.23-.06,7.67-3.18,7.67-7.01v-173.1c0-3.83,3.44-6.96,7.69-6.96h0c4.25,0,7.69,3.13,7.69,6.96v173.1c0,3.83,3.44,6.95,7.67,7.01,39.63.85,78.87,3.35,118.28,7.64,4.05.47,7.32-2.22,7.32-6.05v-183.03c0-2.48-1.39-4.94-3.65-6.45-11.1-7.41-16.69-11.05-27.92-18.2-4.94-3.14-4.94-9.81,0-12.01,11.23-5.01,16.82-7.44,27.92-12.18,2.26-.97,3.65-3.08,3.65-5.56v-120.43c0-3.83-3.27-7.34-7.32-7.81ZM966.38,444.05h0c-4.25,0-7.69-3.08-7.69-6.91v-47.72c0-3.83,3.44-6.96,7.69-6.96h0c4.25,0,7.69,3.13,7.69,6.96v47.72c0,3.83-3.44,6.91-7.69,6.91Z"
      />
      <path
        fill={color}
        d="M1259.98,475.92v-47.72c0-3.83-3-7.76-6.71-8.76h0c-3.71-1-6.74,1.32-6.74,5.14v232.47c0,3.83,3.03,7.72,6.74,8.72h0c3.72,1,6.71-1.27,6.71-5.1v-109.3c0-3.83,3-6.11,6.68-5.06,34.22,10.09,67.66,21.55,100.81,34.72,3.38,1.38,6.09,5.63,6.09,9.46v173.1c0,3.83-2.72,5.79-6.09,4.41-77.21-30.66-156.29-51.22-238.36-63.86-3.99-.58-7.24-4.12-7.24-7.95v-357.85c0-3.83,3.25-6.49,7.24-5.91,82.06,12.64,161.15,33.2,238.36,63.86,3.38,1.38,6.09,5.63,6.09,9.45v109.3c0,3.83-2.72,5.79-6.09,4.41-33.16-13.17-66.6-24.64-100.81-34.72-3.68-1.04-6.68-4.98-6.68-8.8Z"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="benefit-icon">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReliefIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="benefit-icon">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" strokeWidth="2" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function SkinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="benefit-icon">
      <path
        d="M12 3c-1.2 0-2.4.6-3 1.5C8.4 5.3 7.2 7 7 9c-.3 3 1.5 6 5 9 3.5-3 5.3-6 5-9-.2-2-1.4-3.7-2-4.5-.6-.9-1.8-1.5-3-1.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="benefit-icon">
      <circle cx="12" cy="12" r="5" strokeLinecap="round" />
      <line x1="12" y1="1" x2="12" y2="3" strokeLinecap="round" />
      <line x1="12" y1="21" x2="12" y2="23" strokeLinecap="round" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeLinecap="round" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeLinecap="round" />
      <line x1="1" y1="12" x2="3" y2="12" strokeLinecap="round" />
      <line x1="21" y1="12" x2="23" y2="12" strokeLinecap="round" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeLinecap="round" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

const navItems = ["About", "Benefits", "How It Works"];

const benefits: Array<{ title: string; description: string; icon: ReactNode }> = [
  {
    title: "Faster Recovery",
    description: "Reduce muscle soreness and speed up recovery after workouts or injuries. Get back to doing what you love, sooner.",
    icon: <BoltIcon />
  },
  {
    title: "Pain & Inflammation Relief",
    description: "A non-invasive approach to managing joint pain, stiffness, and chronic inflammation without medication.",
    icon: <ReliefIcon />
  },
  {
    title: "Skin Health & Rejuvenation",
    description: "Boost collagen production, improve skin tone, and reduce the appearance of fine lines, scars, and blemishes.",
    icon: <SkinIcon />
  },
  {
    title: "Energy & Wellbeing",
    description: "Support your body at a cellular level. Many clients report improved energy, better sleep, and an overall sense of wellbeing.",
    icon: <SunIcon />
  }
];

const steps = [
  {
    number: "01",
    title: "Book",
    description: "Choose a session time that works for you and book online in seconds."
  },
  {
    number: "02",
    title: "Visit",
    description: "Arrive at our Melbourne clinic, relax, and enjoy your session. Most take just 10 to 20 minutes."
  },
  {
    number: "03",
    title: "Recover",
    description: "Let your body do the rest. Consistent sessions deliver the best long-term results."
  }
];

function sectionId(label: string) {
  return label.toLowerCase().replace(/\s/g, "-");
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="arc-page">
      <div className="grain" />

      <nav className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`} aria-label="Main navigation">
        <div className="nav-inner">
          <ArcLogo width={64} height={32} />

          <div className="nav-links">
            {navItems.map(item => (
              <button key={item} type="button" onClick={() => scrollToSection(sectionId(item))} className="nav-link">
                {item}
              </button>
            ))}
            <button type="button" onClick={() => scrollToSection("booking")} className="cta-btn nav-cta">
              Book Now
            </button>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen(open => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
                  <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <div className="mobile-menu">
            {[...navItems, "Book Now"].map(item => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item === "Book Now" ? "booking" : sectionId(item))}
                className="mobile-menu-link"
              >
                {item}
              </button>
            ))}
          </div>
        ) : null}
      </nav>

      <section className="hero hero-gradient">
        <div className="hero-photo" />
        <div className="hero-content">
          <div className="reveal hero-logo">
            <ArcLogo width={120} height={60} />
          </div>
          <p className="reveal reveal-delay-1 eyebrow">Accelerated Recovery Club</p>
          <h1 className="reveal reveal-delay-2 hero-title">
            <span className="mobile-title-line">Recover Faster.</span> <span className="serif-italic mobile-title-line">Feel Better.</span>
            <br />
            <span className="muted-title">Glow From Within.</span>
          </h1>
          <p className="reveal reveal-delay-3 hero-copy">
            Melbourne&apos;s dedicated red light therapy and wellness club. Non-invasive treatments designed to help your body heal, recover, and
            perform at its best.
          </p>
          <div className="reveal reveal-delay-4 hero-actions">
            <button type="button" onClick={() => scrollToSection("booking")} className="cta-btn hero-action">
              Book Your Session
            </button>
            <button type="button" onClick={() => scrollToSection("about")} className="cta-btn-outline hero-action">
              Learn More
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown />
        </div>
      </section>

      <div className="glow-line" />

      <section id="about" className="content-section about-section">
        <div className="split-layout">
          <div>
            <p className="reveal section-eyebrow">About ARC</p>
            <h2 className="reveal reveal-delay-1 section-title">
              Accelerated Recovery, <span className="serif-italic">Real Results</span>
            </h2>
            <p className="reveal reveal-delay-2 section-copy">
              ARC is a fitness and wellness clinic built around the science of red light therapy. Using targeted wavelengths of red and near-infrared
              light, our treatments stimulate your body&apos;s natural healing processes at a cellular level.
            </p>
            <p className="reveal reveal-delay-3 section-copy">
              Whether you&apos;re recovering from training, managing pain, improving your skin, or simply looking to feel your best, ARC offers a safe,
              relaxing, and effective way to support your health goals.
            </p>
            <div className="reveal reveal-delay-4 aside-line">
              <span />
              No UV. No downtime. Just results.
            </div>
          </div>

          <div className="reveal reveal-delay-2 image-composition">
            <div className="recovery-image">
              <Image src="/assets/recovery.jpg" alt="Wellness and recovery" fill sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="session-badge">
              <span>10</span>
              <p>min sessions</p>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      <section id="benefits" className="content-section">
        <div className="section-wrap">
          <div className="section-heading">
            <p className="reveal section-eyebrow">Why Red Light Therapy</p>
            <h2 className="reveal reveal-delay-1 section-title centered">
              What It Can Do <span className="serif-italic">For You</span>
            </h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className={`reveal reveal-delay-${index + 1} benefit-card`}>
                <div className="benefit-icon-wrap">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" />

      <section id="how-it-works" className="content-section">
        <div className="section-wrap">
          <div className="section-heading">
            <p className="reveal section-eyebrow">How It Works</p>
            <h2 className="reveal reveal-delay-1 section-title centered">
              Simple. Relaxing. <span className="serif-italic">Effective.</span>
            </h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={step.number} className={`reveal reveal-delay-${index + 1} step-card ${index === 0 ? "step-card--first" : ""}`}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" />

      <section id="booking" className="booking-section">
        <div className="booking-glow" />
        <div className="booking-content">
          <div className="reveal">
            <span className="booking-eyebrow">
              <span className="pulse-dot" />
              Now Accepting Bookings
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 section-title centered booking-title">
            Ready to Feel the <span className="serif-italic">Difference?</span>
          </h2>
          <p className="reveal reveal-delay-2 booking-copy">
            Your first step toward better recovery, healthier skin, and improved wellbeing starts here.
          </p>
          <div className="reveal reveal-delay-3">
            <a href="#" className="cta-btn booking-button">
              Book Your Session
            </a>
          </div>
        </div>
      </section>

      <div className="glow-line" />

      <footer className="site-footer">
        <div className="footer-wrap">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <ArcLogo width={56} height={28} />
              </div>
              <p>Accelerated Recovery Club</p>
              <span>Melbourne, Australia</span>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="copyright">
            <p>&copy; 2026 ARC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
