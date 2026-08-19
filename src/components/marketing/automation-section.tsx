import { Container, Section } from '@/components/ui/container';
import { SectionHeader } from './section-header';
import { AutomationList } from './feature-mockup';

export function AutomationSection() {
  return (
    <Section className="border-t border-border bg-secondary/30">
      <Container>
        <SectionHeader
          eyebrow="Family automation"
          title="Set it up once. It runs itself."
          description="Every rule below is a workflow the treasury executes on its own schedule — visible to the whole family, editable any time."
        />
        <div className="mt-14">
          <AutomationList />
        </div>
      </Container>
    </Section>
  );
}
