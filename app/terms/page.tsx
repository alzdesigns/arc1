import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Accelerated Results Club membership terms and conditions.",
  alternates: {
    canonical: "/terms"
  },
  openGraph: {
    title: "Terms & Conditions | ARC",
    description: "Accelerated Results Club membership terms and conditions.",
    url: "/terms"
  }
};

const eligibility = [
  "Members must be 18 years of age or older.",
  "Members must complete a Health Declaration and Liability Waiver.",
  "Medical clearance is required for certain health conditions.",
  "Members must notify ARC if a medical condition changes."
];

const inclusions = ["Infrared StairMasters", "Vacuum Treadmills", "Infrared Body Rollers", "Infrared Mat Pilates", "Body Composition Scans"];

const bookings = [
  "Sessions must be booked online.",
  "Bookings are subject to availability.",
  "Walk-ins are not guaranteed.",
  "Members should arrive 5 minutes early.",
  "Late arrivals may result in a shortened session."
];

const failedPayments = ["Payment retry", "Suspension of membership", "Recovery of outstanding amounts"];

const cancellationConsequences = ["Loss of the session", "A no-show fee", "Temporary suspension of booking privileges"];

const foundingMemberships = [
  "Available for a limited launch period only.",
  "Pricing is exclusive and will not be offered again.",
  "The rate is maintained while the membership remains active, payments are up to date, and the membership is not cancelled.",
  "A cancelled founding membership cannot be reinstated."
];

const membershipFreeze = [
  "Freezes are available for medical reasons or extended travel.",
  "Minimum 2 weeks, maximum 8 weeks per calendar year.",
  "Payments resume automatically once the freeze period ends."
];

const membershipCancellation = [
  "Cancellation requests must be submitted in writing.",
  "Applicable notice periods apply.",
  "Fees are non-refundable except where required under Australian Consumer Law."
];

const healthSafety = [
  "Follow staff instructions at all times.",
  "Use equipment safely and as instructed.",
  "Stay hydrated throughout your session.",
  "Stop immediately if you feel unwell.",
  "Inform staff of any injuries before starting a session.",
  "ARC may refuse participation if safety is at risk."
];

const studioRules = [
  "Respect staff and fellow members.",
  "Wear appropriate attire.",
  "Wipe down equipment after use.",
  "Respect booking times.",
  "Follow all studio signage.",
  "Aggressive behaviour may result in suspension or termination of membership."
];

const membershipSharing = [
  "Memberships are for the use of one person only.",
  "Sharing a membership with another person is prohibited.",
  "ARC may immediately terminate shared memberships."
];

const equipmentAvailability = ["Maintenance", "Repairs", "Cleaning", "Upgrades", "Breakdowns"];

const suspensionReasons = [
  "Breaching these Terms & Conditions",
  "Sharing a membership",
  "Ignoring staff instructions",
  "Unsafe behaviour",
  "Damaging property",
  "Harassment"
];

const membershipChanges = ["Pricing", "Opening hours", "Class schedules", "Equipment", "Services", "Policies"];

export default function Terms() {
  return (
    <main className="arc-page policy-page">
      <div className="grain" />

      <header className="policy-nav">
        <Link href="/" className="policy-wordmark" aria-label="ARC home">
          ARC
        </Link>
        <Link href="/" className="policy-home-link">
          Back to Home
        </Link>
      </header>

      <article className="policy-wrap">
        <header className="policy-hero">
          <p className="section-eyebrow">Accelerated Results Club</p>
          <h1>Membership Terms &amp; Conditions</h1>
          <p>Effective Date: 22 July 2026</p>
        </header>

        <section className="policy-section">
          <h2>1. Membership Eligibility</h2>
          <ul>
            {eligibility.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. Membership Inclusions</h2>
          <p>Membership benefits are determined by membership type and are non-transferable.</p>
          <p>Inclusions may include:</p>
          <ul>
            {inclusions.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Bookings</h2>
          <ul>
            {bookings.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Cancellation &amp; No Shows</h2>
          <p>Sessions may be cancelled or rescheduled up to 12 hours before the scheduled time.</p>
          <p>Cancellations within 12 hours may result in:</p>
          <ul>
            {cancellationConsequences.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Membership Payments</h2>
          <p>Membership fees are automatically deducted, and recurring payments are authorised until the membership is cancelled.</p>
          <p>Failed payments may result in:</p>
          <ul>
            {failedPayments.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Founding Memberships</h2>
          <ul>
            {foundingMemberships.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Membership Freeze</h2>
          <ul>
            {membershipFreeze.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. Membership Cancellation</h2>
          <ul>
            {membershipCancellation.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>9. Health &amp; Safety</h2>
          <ul>
            {healthSafety.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>10. Studio Rules</h2>
          <ul>
            {studioRules.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>11. Membership Sharing</h2>
          <ul>
            {membershipSharing.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>12. CCTV</h2>
          <p>ARC operates CCTV surveillance throughout the premises. Footage may be used for security and legal purposes.</p>
        </section>

        <section className="policy-section">
          <h2>13. Equipment Availability</h2>
          <p>Equipment may be temporarily unavailable due to:</p>
          <ul>
            {equipmentAvailability.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>No refunds are provided for temporary unavailability.</p>
        </section>

        <section className="policy-section">
          <h2>14. Personal Property</h2>
          <p>Members are responsible for their own belongings. ARC is not liable for lost, stolen, or damaged property.</p>
        </section>

        <section className="policy-section">
          <h2>15. Limitation of Liability</h2>
          <p>
            Participation in ARC services is voluntary and members acknowledge the inherent risks involved. ARC is not liable for injury, illness,
            or loss except where legally required.
          </p>
        </section>

        <section className="policy-section">
          <h2>16. Suspension or Termination</h2>
          <p>ARC may suspend or terminate a membership for:</p>
          <ul>
            {suspensionReasons.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>17. Changes to Memberships</h2>
          <p>ARC may amend the following with reasonable notice:</p>
          <ul>
            {membershipChanges.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>18. Privacy</h2>
          <p>
            Personal information is collected for membership administration, bookings, communication, and legal obligations, and is handled in
            accordance with Australian privacy legislation.
          </p>
        </section>

        <section className="policy-section">
          <h2>19. Australian Consumer Law</h2>
          <p>Nothing in these Terms &amp; Conditions excludes your rights under the Competition and Consumer Act 2010 or the Australian Consumer Law.</p>
        </section>

        <section className="policy-section">
          <h2>20. Governing Law</h2>
          <p>These Terms &amp; Conditions are governed by the laws of Victoria, Australia.</p>
        </section>

        <section className="policy-section policy-contact">
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms &amp; Conditions, please contact:</p>
          <address>
            Accelerated Results Club
            <br />
            Williamstown, Victoria
          </address>
        </section>
      </article>
    </main>
  );
}
