'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/container';
import { SectionHeader } from './section-header';
import { permissionMatrix, roles } from '@/lib/data';

export function RolesSection() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Roles & permissions"
          title="Every family member gets the right amount of access"
          description="Six roles, each with customizable permissions — so a child's allowance and a guardian's oversight both fit naturally into one treasury."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-lg font-semibold">{role.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/60">
                <th className="p-4 text-left font-medium text-muted-foreground">Action</th>
                {permissionMatrix.roles.map((r) => (
                  <th key={r} className="p-4 text-center font-medium text-muted-foreground">
                    {r}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {permissionMatrix.actions.map((action, rowIdx) => (
                <tr key={action} className="border-b border-border last:border-b-0 even:bg-secondary/20">
                  <td className="p-4 font-medium text-foreground">{action}</td>
                  {permissionMatrix.grid[rowIdx].map((allowed, colIdx) => (
                    <td key={colIdx} className="p-4 text-center">
                      {allowed ? (
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-muted-foreground/40" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
