import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { pricingPlans } from '@/lib/data';

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingPlans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            'relative flex flex-col rounded-3xl border p-8',
            plan.highlighted
              ? 'border-primary bg-primary text-primary-foreground shadow-2xl lg:-translate-y-3'
              : 'border-border bg-card',
          )}
        >
          {plan.highlighted && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              Most families choose this
            </span>
          )}
          <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
          <p
            className={cn(
              'mt-2 text-sm',
              plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground',
            )}
          >
            {plan.description}
          </p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="font-display text-4xl font-semibold">{plan.price}</span>
            <span
              className={cn(
                'text-sm',
                plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground',
              )}
            >
              {plan.period}
            </span>
          </div>
          <Button
            className="mt-7 w-full"
            variant={plan.highlighted ? 'accent' : 'outline'}
            asChild
          >
            <Link href={plan.name === 'Enterprise' ? '/contact' : '/app'}>{plan.cta}</Link>
          </Button>
          <ul className="mt-8 space-y-3 text-sm">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <Check
                  className={cn(
                    'mt-0.5 h-4 w-4 shrink-0',
                    plan.highlighted ? 'text-accent' : 'text-primary',
                  )}
                />
                <span className={plan.highlighted ? 'text-primary-foreground/90' : 'text-foreground/90'}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
