'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NestWordmark } from '@/components/nest-mark';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { mainNav } from '@/lib/data';
import { cn } from '@/lib/utils';

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes hydration guard
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
    >
      {mounted && resolvedTheme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'glass-panel border-b shadow-sm' : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3.5">
        <Link href="/" className="shrink-0">
          <NestWordmark />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {mainNav.map((item) =>
            'items' in item ? (
              <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)}>
                <button
                  type="button"
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground',
                    openMenu === item.label && 'bg-secondary text-foreground',
                  )}
                >
                  {item.label}
                </button>
                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="glass-panel absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 rounded-2xl p-2 shadow-xl"
                    >
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-secondary"
                        >
                          <p className="text-sm font-medium text-foreground">{sub.label}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{sub.description}</p>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs">Read Documentation</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/app">Launch App</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border glass-panel lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {mainNav.flatMap((item) =>
                'items' in item
                  ? item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-secondary"
                      >
                        {sub.label}
                      </Link>
                    ))
                  : [
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-secondary"
                      >
                        {item.label}
                      </Link>,
                    ],
              )}
              <div className="mt-2 flex gap-2 px-4">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link href="/docs">Docs</Link>
                </Button>
                <Button variant="primary" size="sm" className="flex-1" asChild>
                  <Link href="/app">Launch App</Link>
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
