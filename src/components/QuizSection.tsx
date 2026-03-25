import { useState } from "react";
import { Brain, CheckCircle2, XCircle } from "lucide-react";
import { QuizQuestion } from "@/data/quranVerses";

interface QuizSectionProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const QuizSection = ({ questions, onComplete }: QuizSectionProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    const correct = index === questions[currentQ].correctIndex;
    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ((q) => q + 1);
        setSelected(null);
      } else {
        const finalScore = correct ? score + 1 : score;
        setFinished(true);
        onComplete(finalScore);
      }
    }, 1200);
  };

  if (finished) {
    const perfect = score === questions.length;
    return (
      <div className="rounded-2xl bg-card border border-border p-8 text-center animate-fade-in">
        <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${perfect ? "bg-teal/20" : "bg-gold/20"}`}>
          <CheckCircle2 className={`w-8 h-8 ${perfect ? "text-teal" : "text-gold"}`} />
        </div>
        <h3 className="font-display text-2xl text-foreground mb-2">
          {perfect ? "Excellent !" : "Bien joué !"}
        </h3>
        <p className="text-muted-foreground">
          {score}/{questions.length} bonnes réponses
        </p>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="rounded-2xl bg-card border border-border p-6 md:p-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-xl text-foreground">Quiz</h2>
        </div>
        <span className="text-sm text-muted-foreground">
          {currentQ + 1}/{questions.length}
        </span>
      </div>

      <p className="text-foreground text-lg mb-5">{q.question}</p>

      <div className="space-y-3">
        {q.options.map((option, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.correctIndex;
          const showResult = selected !== null;

          let borderClass = "border-border hover:border-gold/40";
          if (showResult && isCorrect) borderClass = "border-teal bg-teal/10";
          else if (showResult && isSelected && !isCorrect) borderClass = "border-destructive bg-destructive/10";

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`w-full text-left rounded-xl border p-4 transition-all flex items-center justify-between ${borderClass} ${
                selected === null ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <span className="text-secondary-foreground">{option}</span>
              {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-teal" />}
              {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-destructive" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizSection;
