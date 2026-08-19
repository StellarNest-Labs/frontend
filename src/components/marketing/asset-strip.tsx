import { Container, Section } from '@/components/ui/container';
import { SectionHeader } from './section-header';
import { assets } from '@/lib/data';

export function AssetStrip() {
  return (
    <Section className="border-t border-border bg-secondary/30">
      <Container>
        <SectionHeader
          eyebrow="Multi-asset support"
          title="Hold what your family actually holds"
          description="XLM, USDC, EURC, AQUA, or any custom Stellar asset your family trusts — each with its own logo, balance, and trustline."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {assets.map((asset) => (
            <div
              key={asset.code}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: asset.color }}
              >
                {asset.code.slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-semibold">{asset.code}</p>
                <p className="text-xs text-muted-foreground">{asset.name}</p>
              </div>
            </div>
          ))}
          <div className="col-span-2 flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border p-6 text-center sm:col-span-4">
            <p className="text-sm font-medium">+ any custom Stellar asset</p>
            <p className="text-xs text-muted-foreground">Issue and trust an asset your family already uses</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
