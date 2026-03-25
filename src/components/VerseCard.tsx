import { DailyVerse } from "@/data/quranVerses";

interface VerseCardProps {
  verse: DailyVerse;
}

const VerseCard = ({ verse }: VerseCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl card-shine border border-border p-8 md:p-12 animate-fade-in">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/20 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/20 rounded-br-2xl" />

      {/* Surah info */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30" />
        <span className="text-gold font-display text-sm tracking-widest uppercase">
          {verse.surah} · Verset {verse.ayahNumber}
        </span>
        <span className="font-arabic text-gold text-lg">{verse.surahArabic}</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30" />
      </div>

      {/* Arabic text */}
      <p className="font-arabic text-4xl md:text-5xl leading-[2] text-center text-foreground gold-glow mb-8" dir="rtl">
        {verse.arabic}
      </p>

      {/* Transliteration */}
      <p className="text-center text-muted-foreground italic text-lg mb-4">
        {verse.transliteration}
      </p>

      {/* Translation */}
      <p className="text-center text-gold-light font-display text-xl md:text-2xl leading-relaxed">
        {verse.translation}
      </p>
    </div>
  );
};

export default VerseCard;
