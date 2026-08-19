import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { NestMark } from '@/components/nest-mark';

export function CtaSection() {
  return (
    <Section>
      <Container>
        <div className="grain-surface relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <NestMark className="mx-auto h-12 w-12 text-primary-foreground" />
          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Bring your family&rsquo;s money onto one treasury today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-primary-foreground/85">
            Free to start, with one family and a basic treasury. Upgrade when you&rsquo;re ready to
            automate, invest, and plan inheritance.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link href="/app">
                Launch App <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-white/10"
              asChild
            >
              <Link href="/docs">Read Documentation</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
