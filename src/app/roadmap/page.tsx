import type { Metadata } from 'next';
import { PageHero } from '@/components/marketing/page-hero';
import { RoadmapTimeline } from '@/components/marketing/roadmap-timeline';
import { CtaSection } from '@/components/marketing/cta-section';
import { Container, Section } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'What StellarNest has shipped, what’s in progress, and what’s next.',
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title="Built in the open, shipped in stages"
        description="We ship the rules engine and treasury core first — everything else builds on top of it."
      />
      <Section>
        <Container>
          <RoadmapTimeline />
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
