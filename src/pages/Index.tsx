import { useState, useEffect } from "react";
import { Moon, ChevronLeft, ChevronRight } from "lucide-react";
import VerseCard from "@/components/VerseCard";
import TafsirSection from "@/components/TafsirSection";
import VocabularyGrid from "@/components/VocabularyGrid";
import QuizSection from "@/components/QuizSection";
import StreakTracker from "@/components/StreakTracker";
import { getVerseForDay, verses } from "@/data/quranVerses";

const Index = () => {
  const [dayIndex, setDayIndex] = useState(() => {
    const saved = localStorage.getItem("quran-day-index");
    return saved ? parseInt(saved) : 0;
  });
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("quran-streak");
    return saved ? parseInt(saved) : 1;
  });
  const [quizDone, setQuizDone] = useState(false);

  const verse = getVerseForDay(dayIndex);

  useEffect(() => {
    localStorage.setItem("quran-day-index", String(dayIndex));
  }, [dayIndex]);

  useEffect(() => {
    localStorage.setItem("quran-streak", String(streak));
  }, [streak]);

  const handleQuizComplete = (score: number) => {
    setQuizDone(true);
    if (score > 0) {
      setStreak((s) => s + 1);
    }
  };

  const canGoNext = dayIndex < verses.length - 1;
  const canGoPrev = dayIndex > 0;

  return (
    <div className="min-h-screen bg-background geometric-pattern">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon className="w-6 h-6 text-gold" />
            <h1 className="font-display text-xl text-foreground tracking-wide">
              Nour al-Quran
            </h1>
          </div>
          <span className="text-sm text-muted-foreground">
            Jour {dayIndex + 1}
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <StreakTracker streak={streak} versesLearned={dayIndex + 1} />

        <VerseCard verse={verse} />

        <TafsirSection tafsir={verse.tafsir} />

        <VocabularyGrid words={verse.words} />

        <QuizSection
          key={verse.id}
          questions={verse.quiz}
          onComplete={handleQuizComplete}
        />

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4 pb-8">
          <button
            onClick={() => { setDayIndex((d) => d - 1); setQuizDone(false); }}
            disabled={!canGoPrev}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Verset précédent</span>
          </button>
          <button
            onClick={() => { setDayIndex((d) => d + 1); setQuizDone(false); }}
            disabled={!canGoNext}
            className="flex items-center gap-2 text-gold hover:text-gold-light disabled:opacity-30 transition-colors"
          >
            <span className="text-sm">Verset suivant</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
