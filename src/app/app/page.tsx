import type { Metadata } from 'next';
import {
  BadgeCheck,
  Banknote,
  CalendarClock,
  Landmark,
  PiggyBank,
  Send,
  ShieldAlert,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { StatCard } from '@/components/dashboard/stat-card';
import { PortfolioChart } from '@/components/dashboard/portfolio-chart';
import { AllocationDonut } from '@/components/dashboard/allocation-donut';
import { ActivityTimeline } from '@/components/dashboard/activity-timeline';
import { FeatureMockup } from '@/components/marketing/feature-mockup';
import { familyMembers, familyRules } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Dashboard preview',
  description: 'A preview of the StellarNest treasury dashboard — balances, goals, bills, and approvals in one place.',
};

const stats = [
  { icon: Wallet, label: 'Total balance', value: formatCurrency(233400), trend: '+6.4%', trendDirection: 'up' as const },
  { icon: PiggyBank, label: 'Savings', value: formatCurrency(106570), trend: '+3 goals active', trendDirection: 'neutral' as const },
  { icon: CalendarClock, label: 'Bills due (30d)', value: formatCurrency(4159), trend: '5 scheduled', trendDirection: 'neutral' as const },
  { icon: TrendingUp, label: 'Investments', value: formatCurrency(171900), trend: '+18.9% YTD', trendDirection: 'up' as const },
  { icon: Banknote, label: 'Monthly spending', value: formatCurrency(6210), trend: '-4.1%', trendDirection: 'down' as const },
  { icon: Send, label: 'Upcoming transfers', value: '5', trend: 'Next in 2 days', trendDirection: 'neutral' as const },
  { icon: Landmark, label: 'Inheritance status', value: 'Active', trend: 'Time-locked', trendDirection: 'neutral' as const },
  { icon: ShieldAlert, label: 'Pending approvals', value: '1', trend: 'Needs 1 more', trendDirection: 'neutral' as const },
];

export default function AppPreviewPage() {
  return (
    <>
      <div className="border-b border-border bg-secondary/40">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-4">
          <div className="flex items-center gap-2 text-sm">
            <BadgeCheck className="h-4 w-4 text-primary" />
            <span className="font-medium">Product preview</span>
            <span className="text-muted-foreground">— sample data, no wallet connected</span>
          </div>
          <Badge variant="outline">Adeyemi Family Treasury</Badge>
        </Container>
      </div>

      <Section className="pt-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight">Treasury Dashboard</h1>
              <p className="mt-1.5 text-muted-foreground">
                Everything the Adeyemi family treasury is doing, in one view.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold">Portfolio value</h2>
                <span className="text-xs text-muted-foreground">Last 7 months</span>
              </div>
              <div className="mt-4">
                <PortfolioChart />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Allocation</h2>
              <div className="mt-6">
                <AllocationDonut />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Savings goals</h2>
              <div className="mt-5">
                <FeatureMockup kind="savings" />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Upcoming bills</h2>
              <div className="mt-5">
                <FeatureMockup kind="bills" />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Recent activity</h2>
              <div className="mt-5">
                <ActivityTimeline />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
              <h2 className="font-display text-lg font-semibold">Family & roles</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {familyMembers.map((m) => (
                  <div key={m.name} className="flex items-center gap-3 rounded-xl border border-border px-4 py-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: m.avatarColor }}
                    >
                      {m.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{m.name}</p>
                      <p className="text-xs text-muted-foreground">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Active rules</h2>
              <ul className="mt-5 space-y-3">
                {familyRules.slice(0, 4).map((rule) => (
                  <li key={rule} className="text-sm leading-relaxed text-muted-foreground">
                    • {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
