import type { Metadata } from 'next';
import { PageHero } from '@/components/marketing/page-hero';
import { PricingCards } from '@/components/marketing/pricing-cards';
import { ComparisonSection } from '@/components/marketing/comparison-section';
import { FaqSection } from '@/components/marketing/faq-section';
import { CtaSection } from '@/components/marketing/cta-section';
import { Container, Section } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Free for one family. Upgrade to Pro for automation and inheritance, or Enterprise for a family office.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing, for one family or several"
        description="Start free with a basic treasury. Upgrade when you need automation, investing, and inheritance planning."
      />
      <Section>
        <Container>
          <PricingCards />
        </Container>
      </Section>
      <ComparisonSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
