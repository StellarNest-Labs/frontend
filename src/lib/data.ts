import type {
  BlogPost,
  FamilyRoleDefinition,
  NavLink,
  NavMenu,
  PricingPlan,
  RoadmapPhase,
  Testimonial,
} from '@/types';

export const siteConfig = {
  name: 'StellarNest',
  tagline: 'One treasury. One family. Infinite trust.',
  description:
    'StellarNest is a family financial coordination platform built on Stellar. Save, pay bills, invest, and plan inheritance together from one programmable family treasury.',
  url: 'https://stellarnest.org',
  github: 'https://github.com/StellarNest-Org',
  x: 'https://x.com/stellarnest',
  discord: 'https://discord.gg/stellarnest',
};

export const mainNav: (NavMenu | NavLink)[] = [
  {
    label: 'Product',
    items: [
      { label: 'Features', href: '/features', description: 'Savings, bills, investing, inheritance, rules.' },
      { label: 'Roadmap', href: '/roadmap', description: 'What we’re shipping next.' },
      { label: 'Pricing', href: '/pricing', description: 'Plans for one family or a family office.' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Documentation', href: '/docs', description: 'Integrate and self-host StellarNest.' },
      { label: 'Developers', href: '/developers', description: 'Open-source stack and APIs.' },
      { label: 'Blog', href: '/blog', description: 'Notes on family finance and Stellar.' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Launch App', href: '/app' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Developers', href: '/developers' },
    { label: 'Blog', href: '/blog' },
    { label: 'GitHub', href: 'https://github.com/StellarNest-Org' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/StellarNest-Org' },
  { label: 'X', href: 'https://x.com/stellarnest' },
  { label: 'Discord', href: 'https://discord.gg/stellarnest' },
];

export const roles: FamilyRoleDefinition[] = [
  {
    name: 'Owner',
    description: 'Founds the treasury, sets the constitution, holds ultimate recovery authority.',
    permissions: ['create', 'freeze', 'invite', 'approve', 'spend', 'invest', 'inherit', 'view'],
  },
  {
    name: 'Parent',
    description: 'Co-manages the treasury, approves spending, sets allowances and rules.',
    permissions: ['invite', 'approve', 'spend', 'invest', 'view'],
  },
  {
    name: 'Guardian',
    description: 'Trusted outside the immediate family — approves large withdrawals and inheritance claims.',
    permissions: ['approve', 'view'],
  },
  {
    name: 'Child',
    description: 'Spends within an allowance and per-transaction limit set by a Parent.',
    permissions: ['spend (limited)', 'view (own)'],
  },
  {
    name: 'Advisor',
    description: 'A financial advisor or accountant with visibility, without spend authority.',
    permissions: ['view', 'suggest'],
  },
  {
    name: 'Viewer',
    description: 'Read-only access — grandparents, family office staff, or auditors.',
    permissions: ['view'],
  },
];

export const permissionMatrix = {
  actions: [
    'Create savings goal',
    'Approve withdrawal > threshold',
    'Spend within limit',
    'Configure rules',
    'Invite / remove member',
    'Freeze treasury',
    'Approve inheritance claim',
    'View activity',
  ],
  roles: ['Owner', 'Parent', 'Guardian', 'Child', 'Advisor', 'Viewer'] as const,
  grid: [
    [true, true, false, false, false, false],
    [true, true, true, false, false, false],
    [true, true, false, true, false, false],
    [true, true, false, false, false, false],
    [true, true, false, false, false, false],
    [true, true, true, false, false, false],
    [false, false, true, false, false, false],
    [true, true, true, true, true, true],
  ],
};

export const savingsGoals = [
  { name: 'Emergency Fund', target: 25000, current: 18250, asset: 'USDC', color: 'var(--color-primary)' },
  { name: 'Vacation — Lagos', target: 6000, current: 4120, asset: 'XLM', color: 'var(--color-accent)' },
  { name: 'House Purchase', target: 180000, current: 61300, asset: 'USDC', color: '#5B8A72' },
  { name: 'Education Fund', target: 40000, current: 22900, asset: 'EURC', color: '#8C6A3F' },
];

export const upcomingBills = [
  { name: 'Rent', category: 'Rent', amount: 2200, dueIn: '2 days', status: 'due' as const },
  { name: 'City Power & Light', category: 'Electricity', amount: 184, dueIn: '5 days', status: 'upcoming' as const },
  { name: 'Fibernet Home', category: 'Internet', amount: 65, dueIn: '9 days', status: 'upcoming' as const },
  { name: 'Greenwood Academy', category: 'School fees', amount: 1400, dueIn: '14 days', status: 'upcoming' as const },
  { name: 'Family Health Cover', category: 'Insurance', amount: 310, dueIn: '21 days', status: 'upcoming' as const },
];

export const portfolioAllocation = [
  { name: 'Stable (USDC/EURC)', value: 42, color: '#0f6b4c' },
  { name: 'XLM growth', value: 28, color: '#c08a2e' },
  { name: 'Yield strategies', value: 18, color: '#5b8a72' },
  { name: 'AQUA / experimental', value: 12, color: '#8c6a3f' },
];

export const portfolioHistory = [
  { month: 'Feb', value: 132000 },
  { month: 'Mar', value: 138500 },
  { month: 'Apr', value: 135200 },
  { month: 'May', value: 149800 },
  { month: 'Jun', value: 158100 },
  { month: 'Jul', value: 162400 },
  { month: 'Aug', value: 171900 },
];

export const familyMembers = [
  { name: 'Amara Adeyemi', role: 'Owner', avatarColor: '#0f6b4c' },
  { name: 'Chidi Adeyemi', role: 'Parent', avatarColor: '#c08a2e' },
  { name: 'Uncle Tunde', role: 'Guardian', avatarColor: '#5b8a72' },
  { name: 'Zainab Adeyemi', role: 'Child', avatarColor: '#8c6a3f' },
  { name: 'Kene Adeyemi', role: 'Child', avatarColor: '#a3714f' },
  { name: 'Ms. Okafor, CFA', role: 'Advisor', avatarColor: '#6b8f80' },
];

export const assets = [
  { code: 'XLM', name: 'Stellar Lumens', color: '#0f6b4c' },
  { code: 'USDC', name: 'USD Coin', color: '#2775ca' },
  { code: 'EURC', name: 'Euro Coin', color: '#5b6ee1' },
  { code: 'AQUA', name: 'Aquarius', color: '#4f7cff' },
];

export const automationWorkflows = [
  {
    title: 'Automatic savings',
    description: 'Save $200 to the Emergency Fund every payday, split across contributing members.',
    trigger: 'Every 2 weeks',
    icon: 'piggy-bank',
  },
  {
    title: 'Weekly allowance',
    description: 'Send $25 to each Child member every Friday, capped by their spending limit.',
    trigger: 'Every Friday',
    icon: 'wallet',
  },
  {
    title: 'Rent, on autopilot',
    description: 'Pay rent on the 1st of every month once the treasury balance clears the threshold.',
    trigger: 'Monthly, day 1',
    icon: 'home',
  },
  {
    title: 'Profit distribution',
    description: 'Distribute 10% of quarterly investment profit back into the Vacation goal.',
    trigger: 'Quarterly',
    icon: 'trending-up',
  },
  {
    title: 'Inheritance release',
    description: 'Release the vault to beneficiaries once legal conditions and guardian approvals clear.',
    trigger: 'Condition-based',
    icon: 'shield-check',
  },
];

export const familyRules = [
  'Require 2 approvals before any withdrawal above $1,000',
  'Parents must approve a child’s spend above their weekly allowance',
  'Each child’s monthly allowance is capped automatically on-chain',
  'Emergency withdrawal mode bypasses timelocks with 3-of-4 guardian sign-off',
  'Automatic savings transfers execute every payday, no manual step',
  'Treasury freezes instantly after two failed approval attempts in 24 hours',
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'We used to run the family finances off three spreadsheets and a group chat. StellarNest replaced all of it with one treasury everyone can actually see into.',
    name: 'Amara Adeyemi',
    role: 'Owner, the Adeyemi family treasury',
  },
  {
    quote:
      'The allowance automation alone paid for itself. My kids get paid on time, I stop getting asked for money on a Tuesday, and I can see exactly what they spend it on.',
    name: 'Chidi Adeyemi',
    role: 'Parent',
  },
  {
    quote:
      'As the outside guardian, I finally have real visibility without holding the keys myself. The approval flow is exactly the kind of check we needed.',
    name: 'Tunde Bakare',
    role: 'Guardian, extended family treasury',
  },
  {
    quote:
      'We moved our family office’s inheritance planning onto StellarNest’s vault. Time-locks and guardian approval give our clients something a will alone can’t: enforcement.',
    name: 'Ngozi Okafor, CFA',
    role: 'Advisor, Meridian Family Office',
  },
];

export const faqs = [
  {
    question: 'How are funds protected?',
    answer:
      'Every treasury is a Soroban smart contract on Stellar. Funds move only when the contract’s rules are satisfied — spending limits, approval thresholds, and freeze state are enforced on-chain, not by a server StellarNest operates. StellarNest never holds a custodial key to your treasury.',
  },
  {
    question: 'Can children have limited access?',
    answer:
      'Yes. Child members get a per-transaction and/or monthly spending limit set by a Parent. Requests within that limit execute immediately; anything above it requires approval, and the treasury can be frozen instantly if needed.',
  },
  {
    question: 'Can multiple parents approve withdrawals?',
    answer:
      'Yes. Every treasury has a configurable approval rule — for example, requiring 2 of 3 Owner/Parent/Guardian signatures for withdrawals above a threshold you set. Approvals are collected on-chain before funds move.',
  },
  {
    question: 'How does inheritance work?',
    answer:
      'The Owner configures an Inheritance Vault with beneficiaries, percentage allocations, a time-lock, and a dead-man switch. If the Owner stops checking in (heartbeat) past the switch period, or once the time-lock passes, Guardian approvals unlock distribution — automatically, pro-rata, on-chain.',
  },
  {
    question: 'Can we leave the family treasury?',
    answer:
      'Any member can be removed by an Owner or Parent, and a member’s access is scoped entirely to their role — removing them revokes it immediately. The treasury itself, and its history, stay auditable on-chain regardless of membership changes.',
  },
  {
    question: 'Can businesses use StellarNest?',
    answer:
      'Yes — our Enterprise plan supports multiple treasuries under one family office, advanced permission schemes, and API access for firms managing finances for several client families.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'For one family getting started with a shared treasury.',
    cta: 'Launch App',
    features: [
      'One family, unlimited members',
      'Basic treasury with approval rules',
      'Shared savings goals',
      'Bill reminders',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    description: 'For families who invest, automate, and plan ahead together.',
    cta: 'Start Pro trial',
    highlighted: true,
    features: [
      'Everything in Starter',
      'Unlimited members & roles',
      'Investment tracking & portfolio charts',
      'Inheritance vault with time-locks',
      'Full automation workflows',
      'Priority email support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For family offices coordinating several client treasuries.',
    cta: 'Talk to us',
    features: [
      'Everything in Pro',
      'Multiple treasuries, one dashboard',
      'Advanced permission schemes',
      'API & webhook access',
      'Dedicated onboarding',
      'Priority support with SLA',
    ],
  },
];

export const comparisonRows = [
  { label: 'Transparency', bank: 'Statements, monthly', sheet: 'Manual, easy to fake', joint: 'Partial', stellarnest: 'Full on-chain history' },
  { label: 'Automation', bank: 'Standing orders only', sheet: 'None', joint: 'None', stellarnest: 'Rules-based workflows' },
  { label: 'Global access', bank: 'Branch-dependent', sheet: 'Yes, informally', joint: 'Limited', stellarnest: 'Anywhere, any device' },
  { label: 'Fees', bank: 'Wire & FX fees', sheet: 'None (but no infra)', joint: 'Maintenance fees', stellarnest: 'Stellar network fees (~$0.00001)' },
  { label: 'Programmable rules', bank: 'No', sheet: 'No', joint: 'No', stellarnest: 'Yes, enforced on-chain' },
  { label: 'Inheritance', bank: 'Requires a will + probate', sheet: 'Informal notes', joint: 'Survivorship only', stellarnest: 'Programmable vault, no probate delay' },
  { label: 'Shared approvals', bank: 'Rare, manual', sheet: 'Trust-based only', joint: 'Either signer, no limits', stellarnest: 'Configurable multi-sig rules' },
];

export const stats = [
  { label: 'Settlement time', value: '3–5', suffix: 's' },
  { label: 'Typical network fee', value: '0.00001', prefix: '$' },
  { label: 'Families in beta', value: '1,240', suffix: '+' },
  { label: 'Treasuries automated', value: '3,800', suffix: '+' },
];

export const roadmap: RoadmapPhase[] = [
  {
    quarter: 'Shipped',
    title: 'Core treasury & rules engine',
    items: ['Multi-role treasury creation', 'Approval-threshold withdrawals', 'Shared savings goals', 'Bill reminders'],
    status: 'done' as const,
  },
  {
    quarter: 'Now',
    title: 'Automation & investing',
    items: ['Recurring automation workflows', 'Investment holdings & portfolio charts', 'Passkey sign-in'],
    status: 'active' as const,
  },
  {
    quarter: 'Next',
    title: 'Inheritance vault v1',
    items: ['Time-locked beneficiary vaults', 'Dead-man switch', 'Guardian claim approvals'],
    status: 'next' as const,
  },
  {
    quarter: 'Later',
    title: 'Family office tooling',
    items: ['Multiple treasuries per organization', 'Advanced permission schemes', 'Public API & webhooks'],
    status: 'later' as const,
  },
  {
    quarter: 'Exploring',
    title: 'Hardware & recovery',
    items: ['Hardware wallet co-signing', 'Encrypted social recovery', 'Cross-family lending circles'],
    status: 'later' as const,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'programmable-family-treasuries',
    title: 'What a programmable family treasury actually changes',
    excerpt:
      'Joint accounts and spreadsheets rely on trust alone. Rules enforced by a smart contract change what’s possible for how families coordinate money.',
    date: '2026-06-02',
    readingTime: '6 min read',
    tag: 'Product',
  },
  {
    slug: 'inheritance-without-probate-delay',
    title: 'Inheritance planning without the probate delay',
    excerpt:
      'How time-locks, dead-man switches, and guardian approvals let a family’s wealth transfer on the conditions they set — not a court calendar.',
    date: '2026-05-14',
    readingTime: '8 min read',
    tag: 'Inheritance',
  },
  {
    slug: 'soroban-for-family-finance',
    title: 'Why we built StellarNest on Soroban',
    excerpt:
      'Fast settlement and near-zero fees matter, but the real reason is programmability: rules a bank’s back office can’t override.',
    date: '2026-04-22',
    readingTime: '7 min read',
    tag: 'Engineering',
  },
  {
    slug: 'kids-and-crypto-allowances',
    title: 'Teaching kids money with an allowance they can’t overspend',
    excerpt:
      'A spending limit enforced on-chain is a better teacher than a lecture. Notes from families running weekly allowances on StellarNest.',
    date: '2026-03-30',
    readingTime: '5 min read',
    tag: 'Families',
  },
];

export const docsSections = [
  {
    title: 'Getting started',
    items: [
      { title: 'Create your first treasury', description: 'Deploy a treasury and invite your family in under five minutes.' },
      { title: 'Connect a wallet', description: 'Freighter, hardware wallets, and passkey signers.' },
      { title: 'Understanding roles', description: 'Owner, Parent, Guardian, Child, Advisor, Viewer.' },
    ],
  },
  {
    title: 'Treasury operations',
    items: [
      { title: 'Approval rules', description: 'Thresholds, required signatures, and how pending withdrawals resolve.' },
      { title: 'Savings goals', description: 'Create goals, contribute, and track progress on-chain.' },
      { title: 'Bills & automation', description: 'Recurring payments, reminders, and workflow scheduling.' },
    ],
  },
  {
    title: 'Inheritance vault',
    items: [
      { title: 'Beneficiaries & allocations', description: 'Basis-point splits that must sum to 100%.' },
      { title: 'Time-locks & dead-man switch', description: 'Two independent conditions that can unlock a claim.' },
      { title: 'Guardian approvals', description: 'Configurable multi-guardian sign-off before distribution.' },
    ],
  },
  {
    title: 'API reference',
    items: [
      { title: 'GraphQL schema', description: 'Queries and mutations for families, treasuries, and rules.' },
      { title: 'Stellar integration', description: 'Non-custodial XDR build & submit flow.' },
      { title: 'Webhooks', description: 'Subscribe to treasury and inheritance events.' },
    ],
  },
];

export const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TailwindCSS', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Soroban', category: 'Contracts' },
  { name: 'Stellar SDK', category: 'Integration' },
  { name: 'Freighter', category: 'Integration' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'Prisma', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'Docker', category: 'Infra' },
];

export const repos = [
  {
    name: 'frontend',
    description: 'The StellarNest web app — Next.js, TypeScript, Tailwind.',
    href: 'https://github.com/StellarNest-Org/frontend',
  },
  {
    name: 'backend',
    description: 'GraphQL API — NestJS, Prisma, Postgres, non-custodial Stellar integration.',
    href: 'https://github.com/StellarNest-Org/backend',
  },
  {
    name: 'contracts',
    description: 'The `treasury` Soroban contract — roles, rules, savings, bills, inheritance.',
    href: 'https://github.com/StellarNest-Org/contracts',
  },
];
