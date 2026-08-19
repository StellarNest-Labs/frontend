import { CircleDollarSign, FileCheck2, ShieldCheck, Users } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { SectionHeader } from './section-header';

const steps = [
  {
    icon: Users,
    title: 'Create a shared treasury',
    description: 'The Owner deploys a family treasury and invites members with the role that fits them.',
  },
  {
    icon: ShieldCheck,
    title: 'Set the rules once',
    description: 'Approval thresholds, spending limits, and automation are configured once and enforced forever.',
  },
  {
    icon: FileCheck2,
    title: 'Rules execute on-chain',
    description: 'Soroban smart contracts run the rules — no single person, including StellarNest, can override them.',
  },
  {
    icon: CircleDollarSign,
    title: 'Everyone sees everything',
    description: 'Balances, approvals, and history are transparent to every member with view access, always.',
  },
];

export function HowItWorks() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Core concept"
          title="No single person can misuse family funds"
          description="StellarNest replaces trust-by-default with rules-by-design — programmable, transparent, and enforced on Stellar."
        />
        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
          />
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="mt-4 block text-xs font-medium text-accent">Step {i + 1}</span>
              <h3 className="mt-1 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
