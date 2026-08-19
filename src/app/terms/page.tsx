import type { Metadata } from 'next';
import { PageHero } from '@/components/marketing/page-hero';
import { Container, Section } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing use of StellarNest.',
};

const sections = [
  {
    title: '1. The service',
    body: 'StellarNest provides a non-custodial interface to a family treasury implemented as a Soroban smart contract on the Stellar network. We do not hold, control, or have the ability to move your funds — every state-changing action requires your signature.',
  },
  {
    title: '2. Your responsibilities',
    body: 'You are responsible for the security of your own signing keys or passkey device, for the accuracy of information you provide about your family and treasury, and for compliance with laws applicable to you regarding asset custody, inheritance, and taxation.',
  },
  {
    title: '3. No financial or legal advice',
    body: 'StellarNest is infrastructure, not a financial advisor, bank, or law firm. Inheritance vault configuration, investment allocation, and treasury rules are your family’s decisions — consult a qualified professional for advice specific to your situation.',
  },
  {
    title: '4. Network risk',
    body: 'The Stellar network, Soroban contracts, and any third-party wallet software carry inherent technical risk. StellarNest is not liable for losses arising from network outages, contract bugs beyond our reasonable control, or third-party wallet failures.',
  },
  {
    title: '5. Availability',
    body: 'We aim for high availability of the StellarNest application layer, but the underlying treasury contract continues to operate on Stellar independent of our infrastructure — your treasury does not depend on StellarNest staying online.',
  },
  {
    title: '6. Changes to these terms',
    body: 'We’ll notify active accounts of material changes to these terms at least 14 days before they take effect.',
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated August 2026." />
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
