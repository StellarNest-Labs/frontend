// App page.
import { Hero } from '@/components/marketing/hero';
import { StatsBand } from '@/components/marketing/stats-band';
import { HowItWorks } from '@/components/marketing/how-it-works';
import { FeatureRow } from '@/components/marketing/feature-row';
import { RolesSection } from '@/components/marketing/roles-section';
import { AssetStrip } from '@/components/marketing/asset-strip';
import { StellarSection } from '@/components/marketing/stellar-section';
import { SecuritySection } from '@/components/marketing/security-section';
import { AutomationSection } from '@/components/marketing/automation-section';
import { ComparisonSection } from '@/components/marketing/comparison-section';
import { TestimonialsCarousel } from '@/components/marketing/testimonials-carousel';
import { FaqSection } from '@/components/marketing/faq-section';
import { CtaSection } from '@/components/marketing/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <HowItWorks />

      <FeatureRow
        eyebrow="Shared savings"
        title="Save toward what your family actually wants"
        description="Create as many goals as your family needs — an Emergency Fund, a vacation, a house deposit, an education fund — and watch every contribution move the bar."
        bullets={[
          'Unlimited savings goals per treasury',
          'Every member can contribute automatically',
          'Real-time progress, visible to the whole family',
        ]}
        kind="savings"
      />
      <FeatureRow
        eyebrow="Bill management"
        title="Never miss rent, school fees, or the power bill"
        description="Electricity, rent, internet, school fees, insurance — scheduled once, paid automatically, with reminders before anything is due."
        bullets={[
          'Recurring payments execute through smart contracts',
          'Reminders land before a bill is due, not after',
          'Every payment is logged to the treasury’s audit trail',
        ]}
        kind="bills"
        reverse
      />
      <FeatureRow
        eyebrow="Family investments"
        title="Grow the treasury, together"
        description="Invest family funds into Stellar assets with a portfolio view built for a family, not a trading desk — value, profit and loss, and risk allocation at a glance."
        bullets={[
          'Portfolio value and profit/loss, always current',
          'Risk allocation across stable, growth, and yield categories',
          'Historical performance charted over time',
        ]}
        kind="investments"
      />
      <FeatureRow
        eyebrow="Inheritance vault"
        title="Wealth that continues after generations"
        description="Configure beneficiaries, percentage allocations, and time-locks once. Guardian approvals and a dead-man switch make sure the plan executes — with or without a lawyer in the room."
        bullets={[
          'Percentage allocations across any number of beneficiaries',
          'Time-locks and a dead-man switch, independently configurable',
          'Guardian approvals required before any distribution',
        ]}
        kind="inheritance"
        reverse
      />
      <FeatureRow
        eyebrow="Family rules engine"
        title="Every treasury runs on rules you set"
        description="From approval thresholds to emergency freezes, the rules engine turns your family’s financial agreements into enforceable, on-chain logic."
        bullets={[
          'Require multiple approvals above a threshold you choose',
          'Parents approve children’s spending automatically',
          'Freeze the treasury instantly if something looks wrong',
        ]}
        kind="rules"
      />

      <RolesSection />
      <AssetStrip />
      <StellarSection />
      <SecuritySection />
      <AutomationSection />
      <ComparisonSection />
      <TestimonialsCarousel />
      <FaqSection />
      <CtaSection />
    </>
  );
}