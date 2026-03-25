import { Languages } from "lucide-react";
import { WordBreakdown } from "@/data/quranVerses";

interface VocabularyGridProps {
  words: WordBreakdown[];
}

const VocabularyGrid = ({ words }: VocabularyGridProps) => {
  return (
    <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
          <Languages className="w-5 h-5 text-gold" />
        </div>
        <h2 className="font-display text-xl text-foreground">Vocabulaire & Grammaire</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {words.map((word, index) => (
          <div
            key={index}
            className="rounded-xl bg-card border border-border p-5 hover:border-gold/30 transition-colors group"
          >
            <div className="flex items-baseline justify-between mb-3">
              <span className="font-arabic text-2xl text-foreground group-hover:text-gold transition-colors" dir="rtl">
                {word.arabic}
              </span>
              <span className="text-xs text-muted-foreground font-mono tracking-wider">{word.root}</span>
            </div>
            <p className="text-gold-light text-sm italic mb-1">{word.transliteration}</p>
            <p className="text-secondary-foreground text-sm font-medium mb-2">{word.meaning}</p>
            <div className="inline-block rounded-md bg-teal/10 px-2.5 py-1">
              <span className="text-teal-light text-xs">{word.grammar}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularyGrid;
