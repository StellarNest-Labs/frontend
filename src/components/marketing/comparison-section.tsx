import { Check, Minus } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { SectionHeader } from './section-header';
import { comparisonRows } from '@/lib/data';

export function ComparisonSection() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Why StellarNest"
          title="Beyond a joint account or a shared spreadsheet"
          description="Traditional tools rely entirely on trust. StellarNest enforces the rules your family agrees on."
        />

        <div className="mt-14 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/60">
                <th className="p-4 text-left font-medium text-muted-foreground">Capability</th>
                <th className="p-4 text-left font-medium text-muted-foreground">Traditional bank</th>
                <th className="p-4 text-left font-medium text-muted-foreground">Shared spreadsheet</th>
                <th className="p-4 text-left font-medium text-muted-foreground">Joint account</th>
                <th className="p-4 text-left font-medium text-primary">StellarNest</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-b-0 even:bg-secondary/20">
                  <td className="p-4 font-medium text-foreground">{row.label}</td>
                  <td className="p-4 text-muted-foreground">{row.bank}</td>
                  <td className="p-4 text-muted-foreground">{row.sheet}</td>
                  <td className="p-4 text-muted-foreground">{row.joint}</td>
                  <td className="p-4 font-medium text-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                      {row.stellarnest}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Minus className="h-3 w-3" /> Comparisons reflect typical retail offerings; specifics vary by institution.
        </p>
      </Container>
    </Section>
  );
}
