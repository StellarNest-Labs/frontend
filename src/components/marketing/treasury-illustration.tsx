'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { NestMark } from '@/components/nest-mark';
import { familyMembers, savingsGoals } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

export function TreasuryIllustration() {
  const totalBalance = savingsGoals.reduce((sum, g) => sum + g.current, 0) + 84300;

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden
        className="absolute -inset-16 -z-10 rounded-full bg-primary/15 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="glass-panel grain-surface relative rounded-3xl p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <NestMark className="h-8 w-8" />
            <div>
              <p className="text-xs text-muted-foreground">Adeyemi Family Treasury</p>
              <p className="font-display text-2xl font-semibold">{formatCurrency(totalBalance)}</p>
            </div>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            +6.4% this month
          </span>
        </div>

        <div className="mt-6 flex -space-x-2">
          {familyMembers.slice(0, 5).map((m) => (
            <div
              key={m.name}
              title={m.name}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-card text-[11px] font-semibold text-white"
              style={{ backgroundColor: m.avatarColor }}
            >
              {m.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          ))}
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-card bg-secondary text-[11px] font-medium text-muted-foreground">
            +2
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {savingsGoals.slice(0, 3).map((goal) => {
            const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
            return (
              <div key={goal.name}>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">{goal.name}</span>
                  <span className="text-muted-foreground">{pct}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: goal.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="animate-float glass-panel absolute -right-6 -top-8 hidden w-48 rounded-2xl p-4 shadow-xl sm:block"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          Approval needed
        </div>
        <p className="mt-1.5 font-display text-lg font-semibold">$1,250 → Rent</p>
        <p className="mt-1 text-xs text-muted-foreground">1 of 2 approvals · Parent, Guardian</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="animate-float glass-panel absolute -bottom-8 -left-6 hidden w-44 rounded-2xl p-4 shadow-xl [animation-delay:-2s] sm:block"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Automation ran
        </div>
        <p className="mt-1.5 font-display text-lg font-semibold">+$200 saved</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-success">
          Emergency Fund <ArrowUpRight className="h-3 w-3" />
        </p>
      </motion.div>
    </div>
  );
}
