import { BookOpen } from "lucide-react";

interface TafsirSectionProps {
  tafsir: string;
}

const TafsirSection = ({ tafsir }: TafsirSectionProps) => {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 md:p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-teal" />
        </div>
        <h2 className="font-display text-xl text-foreground">Tafsir</h2>
      </div>
      <p className="text-secondary-foreground leading-relaxed text-base">
        {tafsir}
      </p>
    </div>
  );
};

export default TafsirSection;
