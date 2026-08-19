'use client';

import { motion } from 'framer-motion';
import { Check, Lock, ShieldCheck, TrendingDown, TrendingUp } from 'lucide-react';
import {
  automationWorkflows,
  familyRules,
  portfolioAllocation,
  savingsGoals,
  upcomingBills,
} from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

type Kind = 'savings' | 'bills' | 'investments' | 'inheritance' | 'rules';

function SavingsMockup() {
  return (
    <div className="space-y-4">
      {savingsGoals.map((goal) => {
        const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
        return (
          <div key={goal.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium">{goal.name}</span>
              <span className="text-muted-foreground">
                {formatCurrency(goal.current)} / {formatCurrency(goal.target)}
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ backgroundColor: goal.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BillsMockup() {
  return (
    <div className="space-y-2.5">
      {upcomingBills.map((bill) => (
        <div
          key={bill.name}
          className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
        >
          <div>
            <p className="text-sm font-medium">{bill.name}</p>
            <p className="text-xs text-muted-foreground">{bill.category}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">{formatCurrency(bill.amount)}</p>
            <p
              className={`text-xs ${bill.status === 'due' ? 'text-warning' : 'text-muted-foreground'}`}
            >
              Due in {bill.dueIn}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function InvestmentsMockup() {
  const total = portfolioAllocation.reduce((s, a) => s + a.value, 0);
  return (
    <div>
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Portfolio value</p>
          <p className="font-display text-2xl font-semibold">{formatCurrency(171900)}</p>
        </div>
        <span className="flex items-center gap-1 text-sm font-medium text-success">
          <TrendingUp className="h-4 w-4" /> +18.9% YTD
        </span>
      </div>
      <div className="flex h-3 w-full overflow-hidden rounded-full">
        {portfolioAllocation.map((a) => (
          <div key={a.name} style={{ width: `${(a.value / total) * 100}%`, backgroundColor: a.color }} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
        {portfolioAllocation.map((a) => (
          <div key={a.name} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: a.color }} />
            {a.name} · {a.value}%
          </div>
        ))}
      </div>
    </div>
  );
}

function InheritanceMockup() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5">
        <Lock className="h-4 w-4 shrink-0 text-primary" />
        <div>
          <p className="text-sm font-medium">Time-lock</p>
          <p className="text-xs text-muted-foreground">Unlocks in 11 years, 4 months — or sooner via dead-man switch</p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5">
        <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
        <div>
          <p className="text-sm font-medium">Guardian approvals</p>
          <p className="text-xs text-muted-foreground">1 of 2 guardians have approved this claim</p>
        </div>
      </div>
      <div className="space-y-2 rounded-xl border border-border bg-card px-4 py-3.5">
        <p className="text-sm font-medium">Beneficiary allocation</p>
        {[
          { name: 'Zainab Adeyemi', pct: 50 },
          { name: 'Kene Adeyemi', pct: 50 },
        ].map((b) => (
          <div key={b.name} className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{b.name}</span>
            <span className="font-medium text-foreground">{b.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RulesMockup() {
  return (
    <div className="space-y-2.5">
      {familyRules.slice(0, 5).map((rule) => (
        <div key={rule} className="flex items-start gap-2.5 rounded-xl border border-border bg-card px-4 py-3">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-sm text-foreground/90">{rule}</p>
        </div>
      ))}
    </div>
  );
}

export function FeatureMockup({ kind }: { kind: Kind }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="glass-panel grain-surface rounded-3xl p-6 shadow-xl sm:p-8"
    >
      {kind === 'savings' && <SavingsMockup />}
      {kind === 'bills' && <BillsMockup />}
      {kind === 'investments' && <InvestmentsMockup />}
      {kind === 'inheritance' && <InheritanceMockup />}
      {kind === 'rules' && <RulesMockup />}
    </motion.div>
  );
}

export function AutomationList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {automationWorkflows.map((flow) => (
        <div key={flow.title} className="rounded-2xl border border-border bg-card p-5">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
            {flow.trigger}
          </span>
          <h4 className="mt-3 font-display text-base font-semibold">{flow.title}</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{flow.description}</p>
        </div>
      ))}
    </div>
  );
}

export const trendIcon = { up: TrendingUp, down: TrendingDown };
