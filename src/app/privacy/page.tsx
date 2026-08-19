import type { Metadata } from 'next';
import { PageHero } from '@/components/marketing/page-hero';
import { Container, Section } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How StellarNest handles data — and what we deliberately never collect.',
};

const sections = [
  {
    title: '1. What we collect',
    body: 'Account information (name, email), family and treasury metadata you create (goals, bills, rules), and standard web analytics. We do not collect or store your Stellar secret key at any point — every on-chain action is signed on your device.',
  },
  {
    title: '2. What’s on-chain vs. off-chain',
    body: 'Treasury balances, approvals, and rule enforcement live on the Stellar network via the treasury smart contract and are public by nature of the ledger. Off-chain, we cache this data for fast dashboards, plus store family-specific metadata (names, bill payee labels, legal notes) that isn’t suitable for a public ledger.',
  },
  {
    title: '3. How we use data',
    body: 'To operate the product (dashboards, reminders, notifications), improve it (aggregated, de-identified usage patterns), and communicate with you about your account. We do not sell personal data.',
  },
  {
    title: '4. Third parties',
    body: 'We use standard infrastructure providers for hosting, email delivery, and error monitoring. Each is bound by a data processing agreement and receives only what’s necessary to provide their service.',
  },
  {
    title: '5. Your rights',
    body: 'You can export your family’s off-chain data or request account deletion at any time. Because on-chain activity is part of a public ledger, it cannot be deleted, but it was never linked to your identity by StellarNest in the first place.',
  },
  {
    title: '6. Contact',
    body: 'Questions about this policy can be sent to privacy@stellarnest.org.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated August 2026." />
      <Section>
        <Container className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
