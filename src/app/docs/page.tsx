import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/marketing/page-hero';
import { SectionHeader } from '@/components/marketing/section-header';
import { Container, Section } from '@/components/ui/container';
import { docsSections } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Create a treasury, understand roles and rules, and integrate the StellarNest API.',
};

const graphqlExample = `mutation CreateTreasury {
  createTreasury(input: {
    familyId: "fam_adeyemi"
    name: "Adeyemi Family Treasury"
    assetCode: USDC
    approvalThreshold: 1000
    requiredApprovals: 2
  }) {
    id
    contractAddress
    approvalThreshold
  }
}`;

const xdrExample = `// 1. Ask the API to build unsigned XDR
const { xdr } = await api.post('/stellar/build', {
  sourcePublicKey: wallet.publicKey,
  method: 'request_withdrawal',
  args: [treasuryId, toAddress, amount],
});

// 2. Sign client-side — StellarNest never sees your key
const signedXdr = await freighter.signTransaction(xdr);

// 3. Submit the signed envelope
await api.post('/stellar/submit', { signedXdr });`;

export default function DocsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="Everything you need to run a family treasury"
        description="From your first treasury to integrating the API — StellarNest is designed to be self-hostable and fully documented."
      />

      <Section>
        <Container>
          <SectionHeader align="left" title="Guides" className="mx-0 text-left" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {docsSections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-base font-semibold text-primary">{section.title}</h3>
                <ul className="mt-4 space-y-4">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-secondary/30">
        <Container>
          <SectionHeader
            align="left"
            eyebrow="Quickstart"
            title="Create a treasury with GraphQL"
            description="The API is code-first GraphQL. Every mutation returns exactly the fields your UI needs."
            className="mx-0 text-left"
          />
          <pre className="mt-8 overflow-x-auto rounded-2xl border border-border bg-[#0d1712] p-6 text-sm leading-relaxed text-[#d7f5e6]">
            <code className="font-mono">{graphqlExample}</code>
          </pre>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <SectionHeader
            align="left"
            eyebrow="Non-custodial by design"
            title="The build → sign → submit flow"
            description="Every on-chain action follows the same three steps — the backend never touches a secret key."
            className="mx-0 text-left"
          />
          <pre className="mt-8 overflow-x-auto rounded-2xl border border-border bg-[#0d1712] p-6 text-sm leading-relaxed text-[#d7f5e6]">
            <code className="font-mono">{xdrExample}</code>
          </pre>
          <p className="mt-6 text-sm text-muted-foreground">
            Full API reference and contract source live in{' '}
            <Link href="/developers" className="text-primary underline underline-offset-4">
              the developer hub
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-semibold">Ready to build?</h2>
          <p className="max-w-xl text-muted-foreground">
            Clone the repos, spin up Postgres with Docker, and you have a working StellarNest stack
            in minutes.
          </p>
          <Link
            href="https://github.com/StellarNest-Org"
            className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
          >
            View the repos on GitHub <ArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </Section>
    </>
  );
}
