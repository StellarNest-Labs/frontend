import type { ReactNode } from 'react';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-16 sm:pt-24">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,var(--color-primary)/0.14,transparent)]"
      />
      <Container className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <Badge variant="primary" className="mb-5">
            {eyebrow}
          </Badge>
        )}
        <h1 className="text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
