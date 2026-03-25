export interface WordBreakdown {
  arabic: string;
  transliteration: string;
  meaning: string;
  root: string;
  grammar: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface DailyVerse {
  id: number;
  surah: string;
  surahArabic: string;
  ayahNumber: number;
  arabic: string;
  transliteration: string;
  translation: string;
  tafsir: string;
  words: WordBreakdown[];
  quiz: QuizQuestion[];
}

export const verses: DailyVerse[] = [
  {
    id: 1,
    surah: "Al-Fatiha",
    surahArabic: "الفاتحة",
    ayahNumber: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismi Allahi ar-Rahmani ar-Raheem",
    translation: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
    tafsir: "Ce verset est l'ouverture du Quran. Il nous enseigne à commencer chaque action au nom d'Allah, en invoquant Sa miséricorde. Les deux noms Ar-Rahman et Ar-Raheem viennent de la même racine (ر-ح-م) exprimant la miséricorde, mais Ar-Rahman désigne une miséricorde universelle englobant toute la création, tandis qu'Ar-Raheem est une miséricorde spécifique réservée aux croyants.",
    words: [
      { arabic: "بِسْمِ", transliteration: "Bismi", meaning: "Au nom de", root: "س-م-و", grammar: "Préposition بِ + Nom (ism)" },
      { arabic: "اللَّهِ", transliteration: "Allahi", meaning: "Allah (Dieu)", root: "أ-ل-ه", grammar: "Nom propre, génitif (majrour)" },
      { arabic: "الرَّحْمَٰنِ", transliteration: "Ar-Rahmani", meaning: "Le Tout Miséricordieux", root: "ر-ح-م", grammar: "Adjectif (sifa), forme فَعْلَان" },
      { arabic: "الرَّحِيمِ", transliteration: "Ar-Raheem", meaning: "Le Très Miséricordieux", root: "ر-ح-م", grammar: "Adjectif (sifa), forme فَعِيل" },
    ],
    quiz: [
      { question: "Quelle est la racine commune de Ar-Rahman et Ar-Raheem ?", options: ["ر-ح-م", "ع-ل-م", "ك-ت-ب", "س-م-و"], correctIndex: 0 },
      { question: "Que signifie 'بِسْمِ' ?", options: ["Par la grâce de", "Au nom de", "Avec la permission de", "Pour l'amour de"], correctIndex: 1 },
      { question: "Ar-Rahman désigne une miséricorde :", options: ["Spécifique aux croyants", "Universelle", "Limitée", "Conditionnelle"], correctIndex: 1 },
    ],
  },
  {
    id: 2,
    surah: "Al-Fatiha",
    surahArabic: "الفاتحة",
    ayahNumber: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration: "Al-hamdu lillahi Rabbi al-'aalameen",
    translation: "Louange à Allah, Seigneur de l'univers",
    tafsir: "Ce verset établit que toute louange appartient exclusivement à Allah. Le mot 'Al-Hamd' avec l'article défini 'Al' indique que TOUTE louange, dans son essence, revient à Allah. 'Rabb' signifie non seulement Seigneur mais aussi Celui qui nourrit, élève et prend soin de Sa création progressivement. 'Al-'Aalameen' englobe tous les mondes : humains, djinns, anges, animaux, etc.",
    words: [
      { arabic: "الْحَمْدُ", transliteration: "Al-hamdu", meaning: "La louange", root: "ح-م-د", grammar: "Nom défini, nominatif (marfou')" },
      { arabic: "لِلَّهِ", transliteration: "Lillahi", meaning: "À Allah", root: "أ-ل-ه", grammar: "Préposition لِ + Nom propre" },
      { arabic: "رَبِّ", transliteration: "Rabbi", meaning: "Seigneur", root: "ر-ب-ب", grammar: "Nom, génitif (badal)" },
      { arabic: "الْعَالَمِينَ", transliteration: "Al-'aalameen", meaning: "Des mondes/univers", root: "ع-ل-م", grammar: "Pluriel masculin sain, génitif" },
    ],
    quiz: [
      { question: "Que signifie 'Rabb' ?", options: ["Roi", "Seigneur/Éducateur", "Créateur", "Juge"], correctIndex: 1 },
      { question: "La racine de الْعَالَمِينَ est liée à :", options: ["La science/connaissance", "La puissance", "La beauté", "La lumière"], correctIndex: 0 },
    ],
  },
  {
    id: 3,
    surah: "Al-Fatiha",
    surahArabic: "الفاتحة",
    ayahNumber: 3,
    arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Ar-Rahmani ar-Raheem",
    translation: "Le Tout Miséricordieux, le Très Miséricordieux",
    tafsir: "Ce verset répète les deux attributs de miséricorde d'Allah après avoir mentionné Sa seigneurie. Cette répétition souligne que la seigneurie d'Allah sur les mondes est empreinte de miséricorde. Ar-Rahman est un attribut exclusif à Allah qu'aucun être ne peut porter, tandis que Ar-Raheem peut qualifier d'autres êtres.",
    words: [
      { arabic: "الرَّحْمَٰنِ", transliteration: "Ar-Rahmani", meaning: "Le Tout Miséricordieux", root: "ر-ح-م", grammar: "Adjectif, forme فَعْلَان (intensif)" },
      { arabic: "الرَّحِيمِ", transliteration: "Ar-Raheem", meaning: "Le Très Miséricordieux", root: "ر-ح-م", grammar: "Adjectif, forme فَعِيل (permanent)" },
    ],
    quiz: [
      { question: "Quel attribut est exclusif à Allah ?", options: ["Ar-Raheem", "Ar-Rahman", "Les deux", "Aucun"], correctIndex: 1 },
    ],
  },
];

export function getVerseForDay(dayIndex: number): DailyVerse {
  return verses[dayIndex % verses.length];
}
