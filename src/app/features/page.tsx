import type { Metadata } from 'next';
import { PageHero } from '@/components/marketing/page-hero';
import { FeatureRow } from '@/components/marketing/feature-row';
import { RolesSection } from '@/components/marketing/roles-section';
import { AssetStrip } from '@/components/marketing/asset-strip';
import { AutomationSection } from '@/components/marketing/automation-section';
import { CtaSection } from '@/components/marketing/cta-section';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Shared savings, bill management, family investments, an inheritance vault, and a programmable rules engine — everything a family treasury needs.',
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything a family treasury needs, in one place"
        description="Every feature below runs on the same treasury, governed by the same rules — nothing lives in a separate app or a separate trust boundary."
      />

      <FeatureRow
        eyebrow="Shared savings"
        title="Save toward what your family actually wants"
        description="Create as many goals as your family needs — an Emergency Fund, a vacation, a house deposit, an education fund — and watch every contribution move the bar."
        bullets={[
          'Unlimited savings goals per treasury',
          'Every member can contribute automatically',
          'Real-time progress, visible to the whole family',
          'Goals can be funded manually or by automation',
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
          'Cancel or adjust a recurring bill at any time',
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
          'Investment categories tuned for family risk tolerance',
        ]}
        kind="investments"
      />
      <FeatureRow
        eyebrow="Inheritance vault"
        title="Wealth that continues after generations"
        description="Configure beneficiaries, percentage allocations, and time-locks once. Guardian approvals and a dead-man switch make sure the plan executes."
        bullets={[
          'Percentage allocations across any number of beneficiaries',
          'Time-locks and a dead-man switch, independently configurable',
          'Guardian approvals required before any distribution',
          'Legal notes attached for context alongside the on-chain plan',
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
          'Monthly allowance limits enforced per child',
          'Freeze the treasury instantly if something looks wrong',
        ]}
        kind="rules"
      />

      <RolesSection />
      <AssetStrip />
      <AutomationSection />
      <CtaSection />
    </>
  );
}
