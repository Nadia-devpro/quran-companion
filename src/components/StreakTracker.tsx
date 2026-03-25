import { Flame, Star } from "lucide-react";

interface StreakTrackerProps {
  streak: number;
  versesLearned: number;
}

const StreakTracker = ({ streak, versesLearned }: StreakTrackerProps) => {
  return (
    <div className="flex gap-4 animate-fade-in">
      <div className="flex-1 rounded-2xl bg-card border border-border p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
          <Flame className="w-6 h-6 text-gold animate-glow-pulse" />
        </div>
        <div>
          <p className="text-2xl font-display text-foreground">{streak}</p>
          <p className="text-sm text-muted-foreground">Jours consécutifs</p>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-card border border-border p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
          <Star className="w-6 h-6 text-teal" />
        </div>
        <div>
          <p className="text-2xl font-display text-foreground">{versesLearned}</p>
          <p className="text-sm text-muted-foreground">Versets appris</p>
        </div>
      </div>
    </div>
  );
};

export default StreakTracker;
