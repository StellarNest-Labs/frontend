import { cn } from '@/lib/utils';

export function NestMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn('text-primary', className)}
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeDasharray="16 9.7"
        opacity="0.9"
      />
      <circle
        cx="16"
        cy="16"
        r="9.5"
        stroke="var(--color-accent)"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeDasharray="11.5 7"
        transform="rotate(48 16 16)"
      />
      <circle
        cx="16"
        cy="16"
        r="5.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6.8 4.4"
        transform="rotate(-30 16 16)"
        opacity="0.85"
      />
      <circle cx="16" cy="16" r="2.1" fill="var(--color-accent)" />
    </svg>
  );
}

export function NestWordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <NestMark className="h-7 w-7 shrink-0" />
      <span className="font-display text-lg font-semibold tracking-tight">StellarNest</span>
    </span>
  );
}
