import { Container, Section } from '@/components/ui/container';
import { SectionHeader } from './section-header';
import {
  FileClock,
  Fingerprint,
  KeyRound,
  Lock,
  ShieldAlert,
  UsersRound,
} from 'lucide-react';

const items = [
  { icon: KeyRound, title: 'Multi-signature treasury', description: 'Approval thresholds are enforced by the Soroban contract itself, not a server StellarNest controls.' },
  { icon: Fingerprint, title: 'Passkeys', description: 'Sign in and authorize with device biometrics — no password to phish, no seed phrase to screenshot.' },
  { icon: Lock, title: 'Hardware wallet support', description: 'Ledger and other hardware signers work natively for Owners and Guardians who want cold-storage assurance.' },
  { icon: FileClock, title: 'Encrypted recovery', description: 'Recovery paths are encrypted end-to-end and never reconstructable by StellarNest infrastructure alone.' },
  { icon: UsersRound, title: 'Guardian recovery', description: 'Lose your key, not your treasury — configured guardians can co-sign a recovery without becoming custodians.' },
  { icon: ShieldAlert, title: 'Audit logs & contract security', description: 'Every approval, freeze, and withdrawal is timestamped on-chain, backed by a tested Soroban contract.' },
];

export function SecuritySection() {
  return (
    <Section className="border-t border-border bg-secondary/30">
      <Container>
        <SectionHeader
          eyebrow="Security"
          title="Family funds, protected the way real treasuries should be"
          description="Security isn't a settings toggle — it's the default shape of how a StellarNest treasury works."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <item.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
