import { ArrowDownLeft, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

const activity = [
  { icon: Sparkles, title: 'Automation ran — $200 to Emergency Fund', time: '2 hours ago', tone: 'primary' as const },
  { icon: ArrowUpRight, title: 'Chidi requested $1,250 withdrawal for Rent', time: '5 hours ago', tone: 'muted' as const },
  { icon: ShieldCheck, title: 'Amara approved the Rent withdrawal (1 of 2)', time: '5 hours ago', tone: 'primary' as const },
  { icon: ArrowDownLeft, title: 'Uncle Tunde contributed $150 to Vacation goal', time: 'Yesterday', tone: 'muted' as const },
  { icon: ArrowUpRight, title: 'Weekly allowance sent to Zainab and Kene', time: '2 days ago', tone: 'muted' as const },
];

const toneStyles = {
  primary: 'bg-primary/10 text-primary',
  muted: 'bg-secondary text-muted-foreground',
};

export function ActivityTimeline() {
  return (
    <div className="space-y-5">
      {activity.map((item, i) => (
        <div key={i} className="flex items-start gap-3.5">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${toneStyles[item.tone]}`}>
            <item.icon className="h-3.5 w-3.5" />
          </div>
          <div>
            <p className="text-sm text-foreground/90">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
