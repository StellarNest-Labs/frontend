import { Coins, Fingerprint, Repeat, ShieldCheck, Timer, Wand2 } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { SectionHeader } from './section-header';

const points = [
  {
    icon: Timer,
    title: 'Fast settlement',
    description: 'Transactions settle in 3–5 seconds on the Stellar network — a family payment never waits on a banking day.',
  },
  {
    icon: Coins,
    title: 'Low fees',
    description: 'Base fees around $0.00001 per operation mean automation — weekly allowances, recurring bills — costs nothing meaningful.',
  },
  {
    icon: Wand2,
    title: 'Soroban smart contracts',
    description: 'Every treasury is a Soroban contract. Rules, roles, and approvals are enforced by code, not by policy.',
  },
  {
    icon: Fingerprint,
    title: 'Multi-signature',
    description: 'Approval thresholds are native multi-sig logic — no custom escrow, no trusted intermediary holding funds.',
  },
  {
    icon: Repeat,
    title: 'Trustlines & asset issuance',
    description: 'Hold XLM alongside USDC, EURC, or a custom-issued family asset, each governed by a standard Stellar trustline.',
  },
  {
    icon: ShieldCheck,
    title: 'Programmable payments',
    description: 'Recurring bills, allowances, and profit distributions are scheduled on-chain — not a cron job StellarNest could quietly skip.',
  },
];

export function StellarSection() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Powered by Stellar"
          title="Built on infrastructure designed for real money movement"
          description="StellarNest doesn't reinvent settlement — it puts a family-friendly interface on primitives Stellar already does well."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="rounded-2xl border border-border bg-card p-6">
              <point.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
