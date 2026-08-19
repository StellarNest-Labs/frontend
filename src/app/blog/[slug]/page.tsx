import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { CtaSection } from '@/components/marketing/cta-section';
import { blogPosts } from '@/lib/data';

const bodies: Record<string, string[]> = {
  'programmable-family-treasuries': [
    'A joint bank account gives every signer full authority and no memory of intent. A shared spreadsheet gives everyone visibility and no enforcement at all. Neither actually encodes what a family agreed to — they just make it easier to violate the agreement quietly.',
    'A programmable treasury flips that. When a family agrees that withdrawals above $1,000 need two approvals, that agreement becomes a rule the contract checks on every request — not a norm someone might forget, or choose to ignore during a bad week.',
    'This doesn’t remove trust from the relationship. It removes trust from the infrastructure. The people still decide the rules; the contract just makes sure the rules hold.',
  ],
  'inheritance-without-probate-delay': [
    'Most inheritance planning assumes a court will eventually get involved, and that involvement takes time — often months, sometimes years, almost always at a cost to the estate.',
    'StellarNest’s inheritance vault gives a family two independent unlock conditions instead: a time-lock the Owner sets deliberately, and a dead-man switch that trips if the Owner stops checking in. Either condition, combined with guardian approval, releases the vault pro-rata to beneficiaries — no probate calendar in the loop.',
    'This isn’t a replacement for legal advice — the vault has a field for legal notes precisely because families should still involve counsel. It’s a replacement for the idea that a will is the only mechanism available.',
  ],
  'soroban-for-family-finance': [
    'We get asked why a family finance app needs a blockchain at all. The honest answer: for the settlement speed and fees, mostly not — a competent backend could handle payments fine.',
    'The real reason is enforcement. A rule enforced by a Soroban contract can’t be quietly changed by an engineer under pressure, bypassed by an admin panel, or overridden because a support ticket needed a favor. That property — code that even StellarNest can’t override — turns out to be the whole point.',
    'Stellar happened to already have fast, cheap settlement and mature primitives for multi-sig and asset issuance, which made it the practical choice for building this on top of.',
  ],
  'kids-and-crypto-allowances': [
    'Most allowance systems fail the same way: the limit is a conversation, not a constraint. A child asks for more, a parent is tired, the limit quietly moves.',
    'On StellarNest, a Child role carries an actual spending limit the contract enforces. Requests within it execute immediately; anything above it needs a Parent’s approval — visible, logged, and consistent regardless of how the conversation that day is going.',
    'Families running this report a smaller thing they didn’t expect: fewer arguments about money, because the limit isn’t a negotiation anymore. It’s just how the treasury works.',
  ],
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const paragraphs = bodies[slug] ?? [];

  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-24">
        <Container className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
          </Link>
          <Badge variant="primary" className="mt-6">
            {post.tag}
          </Badge>
          <h1 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
            · {post.readingTime}
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/90">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
