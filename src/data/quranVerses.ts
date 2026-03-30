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
  // ===== AL-FATIHA (1) =====
  {
    id: 1,
    surah: "Al-Fatiha",
    surahArabic: "الفاتحة",
    ayahNumber: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismi Allahi ar-Rahmani ar-Raheem",
    translation: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
    tafsir: "Ce verset est l'ouverture du Quran. Il nous enseigne à commencer chaque action au nom d'Allah, en invoquant Sa miséricorde. Ar-Rahman désigne une miséricorde universelle englobant toute la création, tandis qu'Ar-Raheem est une miséricorde spécifique réservée aux croyants.",
    words: [
      { arabic: "بِسْمِ", transliteration: "Bismi", meaning: "Au nom de", root: "س-م-و", grammar: "Préposition بِ + Nom (ism)" },
      { arabic: "اللَّهِ", transliteration: "Allahi", meaning: "Allah (Dieu)", root: "أ-ل-ه", grammar: "Nom propre, génitif" },
      { arabic: "الرَّحْمَٰنِ", transliteration: "Ar-Rahmani", meaning: "Le Tout Miséricordieux", root: "ر-ح-م", grammar: "Adjectif, forme فَعْلَان" },
      { arabic: "الرَّحِيمِ", transliteration: "Ar-Raheem", meaning: "Le Très Miséricordieux", root: "ر-ح-م", grammar: "Adjectif, forme فَعِيل" },
    ],
    quiz: [
      { question: "Quelle est la racine commune de Ar-Rahman et Ar-Raheem ?", options: ["ر-ح-م", "ع-ل-م", "ك-ت-ب", "س-م-و"], correctIndex: 0 },
      { question: "Que signifie 'بِسْمِ' ?", options: ["Par la grâce de", "Au nom de", "Avec la permission de", "Pour l'amour de"], correctIndex: 1 },
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
    tafsir: "Toute louange appartient exclusivement à Allah. 'Rabb' signifie Seigneur, Celui qui nourrit et élève Sa création. 'Al-'Aalameen' englobe tous les mondes : humains, djinns, anges, animaux.",
    words: [
      { arabic: "الْحَمْدُ", transliteration: "Al-hamdu", meaning: "La louange", root: "ح-م-د", grammar: "Nom défini, nominatif" },
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
    tafsir: "Ce verset répète les deux attributs de miséricorde après avoir mentionné Sa seigneurie. Ar-Rahman est exclusif à Allah, tandis que Ar-Raheem peut qualifier d'autres êtres.",
    words: [
      { arabic: "الرَّحْمَٰنِ", transliteration: "Ar-Rahmani", meaning: "Le Tout Miséricordieux", root: "ر-ح-م", grammar: "Adjectif, forme فَعْلَان (intensif)" },
      { arabic: "الرَّحِيمِ", transliteration: "Ar-Raheem", meaning: "Le Très Miséricordieux", root: "ر-ح-م", grammar: "Adjectif, forme فَعِيل (permanent)" },
    ],
    quiz: [
      { question: "Quel attribut est exclusif à Allah ?", options: ["Ar-Raheem", "Ar-Rahman", "Les deux", "Aucun"], correctIndex: 1 },
    ],
  },
  {
    id: 4,
    surah: "Al-Fatiha",
    surahArabic: "الفاتحة",
    ayahNumber: 4,
    arabic: "مَالِكِ يَوْمِ الدِّينِ",
    transliteration: "Maliki yawmi ad-deen",
    translation: "Maître du Jour de la Rétribution",
    tafsir: "Allah est le Maître absolu du Jour du Jugement. 'Malik' signifie Celui qui possède et gouverne. 'Ad-Deen' ici signifie la rétribution et le jugement, pas la religion. Ce jour-là, personne ne pourra intercéder sans Sa permission.",
    words: [
      { arabic: "مَالِكِ", transliteration: "Maliki", meaning: "Maître/Possesseur", root: "م-ل-ك", grammar: "Participe actif, génitif" },
      { arabic: "يَوْمِ", transliteration: "Yawmi", meaning: "Jour", root: "ي-و-م", grammar: "Nom, génitif (mudaf ilayh)" },
      { arabic: "الدِّينِ", transliteration: "Ad-Deen", meaning: "De la Rétribution", root: "د-ي-ن", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "Que signifie 'Ad-Deen' dans ce verset ?", options: ["La religion", "La rétribution/jugement", "La foi", "La prière"], correctIndex: 1 },
      { question: "La racine م-ل-ك est liée à :", options: ["La royauté/possession", "La connaissance", "La miséricorde", "La création"], correctIndex: 0 },
    ],
  },
  {
    id: 5,
    surah: "Al-Fatiha",
    surahArabic: "الفاتحة",
    ayahNumber: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    transliteration: "Iyyaka na'budu wa iyyaka nasta'een",
    translation: "C'est Toi (Seul) que nous adorons, et c'est Toi (Seul) dont nous implorons secours",
    tafsir: "Le pronom 'Iyyaka' est mis en avant pour exprimer l'exclusivité : l'adoration et l'aide ne sont demandées qu'à Allah seul. Ce verset marque le passage de la troisième personne à la deuxième personne (iltifat), créant une intimité dans l'invocation.",
    words: [
      { arabic: "إِيَّاكَ", transliteration: "Iyyaka", meaning: "Toi seul", root: "-", grammar: "Pronom d'exclusivité, accusatif" },
      { arabic: "نَعْبُدُ", transliteration: "Na'budu", meaning: "Nous adorons", root: "ع-ب-د", grammar: "Verbe au présent, 1ère pers. pluriel" },
      { arabic: "نَسْتَعِينُ", transliteration: "Nasta'een", meaning: "Nous implorons secours", root: "ع-و-ن", grammar: "Verbe forme X (istif'al), demande d'aide" },
    ],
    quiz: [
      { question: "Pourquoi 'Iyyaka' est placé en premier ?", options: ["Pour la rime", "Pour l'exclusivité", "Par hasard", "Pour la grammaire"], correctIndex: 1 },
      { question: "La racine de نَسْتَعِينُ est :", options: ["ع-ب-د", "ع-و-ن", "ع-ل-م", "ع-م-ل"], correctIndex: 1 },
    ],
  },
  {
    id: 6,
    surah: "Al-Fatiha",
    surahArabic: "الفاتحة",
    ayahNumber: 6,
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Ihdina as-sirata al-mustaqeem",
    translation: "Guide-nous dans le droit chemin",
    tafsir: "C'est la demande centrale de la prière. 'Ihdina' est un impératif de supplication. 'As-Sirat al-Mustaqeem' est le chemin droit, celui de l'Islam, de la Sunna, de la vérité. Cette invocation est répétée à chaque rakaat car le croyant a constamment besoin de guidée.",
    words: [
      { arabic: "اهْدِنَا", transliteration: "Ihdina", meaning: "Guide-nous", root: "ه-د-ي", grammar: "Impératif + pronom نَا (nous)" },
      { arabic: "الصِّرَاطَ", transliteration: "As-Sirata", meaning: "Le chemin", root: "ص-ر-ط", grammar: "Nom défini, accusatif" },
      { arabic: "الْمُسْتَقِيمَ", transliteration: "Al-Mustaqeem", meaning: "Le droit", root: "ق-و-م", grammar: "Participe actif forme X, accusatif" },
    ],
    quiz: [
      { question: "Que signifie 'Ihdina' ?", options: ["Pardonne-nous", "Guide-nous", "Aide-nous", "Protège-nous"], correctIndex: 1 },
      { question: "La racine de المستقيم est :", options: ["ق-و-م (se dresser)", "س-ق-م (maladie)", "ق-م-ر (lune)", "ق-د-م (avancer)"], correctIndex: 0 },
    ],
  },
  {
    id: 7,
    surah: "Al-Fatiha",
    surahArabic: "الفاتحة",
    ayahNumber: 7,
    arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration: "Sirata alladhina an'amta 'alayhim ghayri al-maghdubi 'alayhim wa la ad-dalleen",
    translation: "Le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés",
    tafsir: "Ce verset précise le chemin droit : celui des prophètes, des véridiques, des martyrs et des vertueux. 'Al-Maghdubi alayhim' désigne ceux qui connaissaient la vérité mais l'ont rejetée. 'Ad-Dalleen' désigne ceux qui se sont égarés par ignorance.",
    words: [
      { arabic: "صِرَاطَ", transliteration: "Sirata", meaning: "Le chemin", root: "ص-ر-ط", grammar: "Nom, accusatif (badal)" },
      { arabic: "الَّذِينَ", transliteration: "Alladhina", meaning: "Ceux qui", root: "-", grammar: "Pronom relatif pluriel" },
      { arabic: "أَنْعَمْتَ", transliteration: "An'amta", meaning: "Tu as comblé de faveurs", root: "ن-ع-م", grammar: "Verbe passé, 2ème pers. masc." },
      { arabic: "الْمَغْضُوبِ", transliteration: "Al-Maghdubi", meaning: "Ceux qui ont encouru la colère", root: "غ-ض-ب", grammar: "Participe passif, génitif" },
      { arabic: "الضَّالِّينَ", transliteration: "Ad-Dalleen", meaning: "Les égarés", root: "ض-ل-ل", grammar: "Participe actif pluriel, génitif" },
    ],
    quiz: [
      { question: "Qui sont 'alladhina an'amta alayhim' ?", options: ["Les anges", "Les prophètes et vertueux", "Les djinns", "Les rois"], correctIndex: 1 },
      { question: "La racine غ-ض-ب exprime :", options: ["La joie", "La colère", "La tristesse", "La peur"], correctIndex: 1 },
    ],
  },

  // ===== AL-FIL (105) =====
  {
    id: 8,
    surah: "Al-Fil",
    surahArabic: "الفيل",
    ayahNumber: 1,
    arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
    transliteration: "Alam tara kayfa fa'ala rabbuka bi-ashabi al-feel",
    translation: "N'as-tu pas vu comment ton Seigneur a agi envers les gens de l'Éléphant ?",
    tafsir: "Allah interpelle le Prophète ﷺ au sujet de l'armée d'Abraha qui a tenté de détruire la Kaaba avec des éléphants. 'Alam tara' est une question rhétorique pour affirmer la certitude de cet événement historique.",
    words: [
      { arabic: "أَلَمْ", transliteration: "Alam", meaning: "N'as-tu pas", root: "-", grammar: "Particule d'interrogation + négation" },
      { arabic: "تَرَ", transliteration: "Tara", meaning: "Vu", root: "ر-أ-ي", grammar: "Verbe au présent apocopé" },
      { arabic: "فَعَلَ", transliteration: "Fa'ala", meaning: "A agi/fait", root: "ف-ع-ل", grammar: "Verbe passé, 3ème pers." },
      { arabic: "أَصْحَابِ", transliteration: "Ashabi", meaning: "Les gens/compagnons", root: "ص-ح-ب", grammar: "Pluriel de صاحب, génitif" },
      { arabic: "الْفِيلِ", transliteration: "Al-Feel", meaning: "L'éléphant", root: "ف-ي-ل", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "Qui étaient 'Ashab al-Fil' ?", options: ["Des bergers", "L'armée d'Abraha", "Des marchands", "Des voyageurs"], correctIndex: 1 },
      { question: "Que voulaient-ils détruire ?", options: ["Médine", "La Kaaba", "Taif", "Jérusalem"], correctIndex: 1 },
    ],
  },
  {
    id: 9,
    surah: "Al-Fil",
    surahArabic: "الفيل",
    ayahNumber: 2,
    arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ",
    transliteration: "Alam yaj'al kaydahum fi tadleel",
    translation: "N'a-t-Il pas rendu leur ruse complètement vaine ?",
    tafsir: "'Kayd' signifie la ruse ou le stratagème. Allah a rendu leur plan totalement inefficace (tadleel = égarement, perte). Leur force militaire n'a rien pu contre la volonté divine.",
    words: [
      { arabic: "يَجْعَلْ", transliteration: "Yaj'al", meaning: "A rendu", root: "ج-ع-ل", grammar: "Verbe au présent apocopé" },
      { arabic: "كَيْدَهُمْ", transliteration: "Kaydahum", meaning: "Leur ruse", root: "ك-ي-د", grammar: "Nom + pronom possessif هُمْ" },
      { arabic: "تَضْلِيلٍ", transliteration: "Tadleel", meaning: "Égarement/perte", root: "ض-ل-ل", grammar: "Masdar (nom verbal), génitif" },
    ],
    quiz: [
      { question: "Que signifie 'kayd' ?", options: ["Force", "Ruse/stratagème", "Armée", "Voyage"], correctIndex: 1 },
    ],
  },
  {
    id: 10,
    surah: "Al-Fil",
    surahArabic: "الفيل",
    ayahNumber: 3,
    arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
    transliteration: "Wa arsala 'alayhim tayran ababeel",
    translation: "Et Il envoya contre eux des oiseaux par volées",
    tafsir: "'Ababeel' signifie des groupes successifs venant de toutes les directions. Ces oiseaux étaient un signe divin envoyé pour protéger la Kaaba.",
    words: [
      { arabic: "أَرْسَلَ", transliteration: "Arsala", meaning: "Il envoya", root: "ر-س-ل", grammar: "Verbe passé forme IV" },
      { arabic: "طَيْرًا", transliteration: "Tayran", meaning: "Des oiseaux", root: "ط-ي-ر", grammar: "Nom collectif, accusatif" },
      { arabic: "أَبَابِيلَ", transliteration: "Ababeel", meaning: "Par volées/groupes", root: "-", grammar: "Pluriel sans singulier connu" },
    ],
    quiz: [
      { question: "Que signifie 'Ababeel' ?", options: ["Énormes", "Par groupes/volées", "Noirs", "Rapides"], correctIndex: 1 },
    ],
  },
  {
    id: 11,
    surah: "Al-Fil",
    surahArabic: "الفيل",
    ayahNumber: 4,
    arabic: "تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ",
    transliteration: "Tarmeehim bi-hijaratin min sijjeel",
    translation: "Qui leur lançaient des pierres d'argile",
    tafsir: "'Sijjeel' désigne une argile durcie, brûlante. Chaque oiseau portait trois pierres : une dans le bec et une dans chaque patte. Ces pierres transperçaient les soldats.",
    words: [
      { arabic: "تَرْمِيهِمْ", transliteration: "Tarmeehim", meaning: "Leur lançant", root: "ر-م-ي", grammar: "Verbe présent + pronom هِمْ" },
      { arabic: "بِحِجَارَةٍ", transliteration: "Bi-hijaratin", meaning: "Des pierres", root: "ح-ج-ر", grammar: "Préposition بِ + pluriel" },
      { arabic: "سِجِّيلٍ", transliteration: "Sijjeel", meaning: "D'argile durcie", root: "س-ج-ل", grammar: "Nom, génitif" },
    ],
    quiz: [
      { question: "Que signifie 'Sijjeel' ?", options: ["Or", "Argile durcie", "Fer", "Feu"], correctIndex: 1 },
    ],
  },
  {
    id: 12,
    surah: "Al-Fil",
    surahArabic: "الفيل",
    ayahNumber: 5,
    arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ",
    transliteration: "Faja'alahum ka'asfin ma'kool",
    translation: "Et Il les rendit semblables à de la paille mâchée",
    tafsir: "'Asf' est la paille ou l'enveloppe du grain. 'Ma'kool' signifie mangée/mâchée. L'armée puissante d'Abraha fut réduite à néant, comme de la paille déchiquetée par les animaux.",
    words: [
      { arabic: "فَجَعَلَهُمْ", transliteration: "Faja'alahum", meaning: "Il les rendit", root: "ج-ع-ل", grammar: "Verbe passé + pronom هُمْ" },
      { arabic: "كَعَصْفٍ", transliteration: "Ka'asfin", meaning: "Comme de la paille", root: "ع-ص-ف", grammar: "Préposition كَ + nom" },
      { arabic: "مَأْكُولٍ", transliteration: "Ma'kool", meaning: "Mâchée/mangée", root: "أ-ك-ل", grammar: "Participe passif" },
    ],
    quiz: [
      { question: "À quoi l'armée est-elle comparée ?", options: ["Du sable", "De la paille mâchée", "De la poussière", "Des feuilles"], correctIndex: 1 },
    ],
  },

  // ===== QURAYSH (106) =====
  {
    id: 13,
    surah: "Quraysh",
    surahArabic: "قريش",
    ayahNumber: 1,
    arabic: "لِإِيلَافِ قُرَيْشٍ",
    transliteration: "Li-ilafi Quraysh",
    translation: "À cause du pacte des Quraysh",
    tafsir: "'Ilaf' signifie le pacte, l'alliance ou l'habitude. Les Quraysh avaient des pactes commerciaux avec les empires voisins qui leur assuraient sécurité et prospérité. Cette sourate rappelle que c'est Allah qui leur a accordé ces privilèges.",
    words: [
      { arabic: "لِإِيلَافِ", transliteration: "Li-ilafi", meaning: "Pour le pacte/alliance", root: "أ-ل-ف", grammar: "Préposition لِ + masdar" },
      { arabic: "قُرَيْشٍ", transliteration: "Quraysh", meaning: "Quraysh (tribu)", root: "-", grammar: "Nom propre, génitif" },
    ],
    quiz: [
      { question: "Que signifie 'Ilaf' ?", options: ["Guerre", "Pacte/alliance", "Voyage", "Prière"], correctIndex: 1 },
    ],
  },
  {
    id: 14,
    surah: "Quraysh",
    surahArabic: "قريش",
    ayahNumber: 2,
    arabic: "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",
    transliteration: "Ilafihim rihlata ash-shita'i was-sayf",
    translation: "Leur pacte [pour] les voyages d'hiver et d'été",
    tafsir: "Les Quraysh faisaient deux grands voyages commerciaux : en hiver vers le Yémen (sud) et en été vers la Syrie (nord). Ces voyages leur apportaient richesse et influence.",
    words: [
      { arabic: "رِحْلَةَ", transliteration: "Rihlata", meaning: "Voyage", root: "ر-ح-ل", grammar: "Nom, accusatif" },
      { arabic: "الشِّتَاءِ", transliteration: "Ash-Shita'i", meaning: "L'hiver", root: "ش-ت-و", grammar: "Nom défini, génitif" },
      { arabic: "الصَّيْفِ", transliteration: "As-Sayf", meaning: "L'été", root: "ص-ي-ف", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "Où allaient les Quraysh en été ?", options: ["Yémen", "Syrie", "Égypte", "Irak"], correctIndex: 1 },
    ],
  },
  {
    id: 15,
    surah: "Quraysh",
    surahArabic: "قريش",
    ayahNumber: 3,
    arabic: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
    transliteration: "Falya'budu rabba hadha al-bayt",
    translation: "Qu'ils adorent donc le Seigneur de cette Maison",
    tafsir: "En contrepartie de tous ces bienfaits, Allah leur demande une seule chose : L'adorer. 'Al-Bayt' désigne la Kaaba à la Mecque.",
    words: [
      { arabic: "فَلْيَعْبُدُوا", transliteration: "Falya'budu", meaning: "Qu'ils adorent donc", root: "ع-ب-د", grammar: "Verbe au présent apocopé (lam al-amr)" },
      { arabic: "رَبَّ", transliteration: "Rabba", meaning: "Seigneur", root: "ر-ب-ب", grammar: "Nom, accusatif" },
      { arabic: "الْبَيْتِ", transliteration: "Al-Bayt", meaning: "La Maison (Kaaba)", root: "ب-ي-ت", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "Que désigne 'Al-Bayt' ?", options: ["Une maison ordinaire", "La Kaaba", "Le Paradis", "Médine"], correctIndex: 1 },
    ],
  },
  {
    id: 16,
    surah: "Quraysh",
    surahArabic: "قريش",
    ayahNumber: 4,
    arabic: "الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ",
    transliteration: "Alladhi at'amahum min ju'in wa amanahum min khawf",
    translation: "Qui les a nourris contre la faim et rassurés de la crainte",
    tafsir: "Allah rappelle deux bienfaits fondamentaux : la nourriture (sécurité alimentaire) et la sécurité (protection contre les dangers). Ces deux besoins essentiels étaient comblés pour les Quraysh grâce à la Kaaba.",
    words: [
      { arabic: "أَطْعَمَهُمْ", transliteration: "At'amahum", meaning: "Les a nourris", root: "ط-ع-م", grammar: "Verbe passé forme IV + pronom" },
      { arabic: "جُوعٍ", transliteration: "Ju'in", meaning: "Faim", root: "ج-و-ع", grammar: "Nom, génitif" },
      { arabic: "آمَنَهُمْ", transliteration: "Amanahum", meaning: "Les a rassurés", root: "أ-م-ن", grammar: "Verbe passé forme IV + pronom" },
      { arabic: "خَوْفٍ", transliteration: "Khawf", meaning: "Crainte/peur", root: "خ-و-ف", grammar: "Nom, génitif" },
    ],
    quiz: [
      { question: "Quels deux bienfaits sont mentionnés ?", options: ["Richesse et pouvoir", "Nourriture et sécurité", "Science et sagesse", "Beauté et force"], correctIndex: 1 },
      { question: "La racine أ-م-ن est liée à :", options: ["La foi/sécurité", "La force", "La beauté", "La connaissance"], correctIndex: 0 },
    ],
  },

  // ===== AL-MA'UN (107) =====
  {
    id: 17,
    surah: "Al-Ma'un",
    surahArabic: "الماعون",
    ayahNumber: 1,
    arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ",
    transliteration: "Ara'ayta alladhi yukadhdhibu bid-deen",
    translation: "Vois-tu celui qui traite de mensonge la Rétribution ?",
    tafsir: "Allah interpelle l'auditeur en lui demandant s'il connaît ce type de personne. 'Yukadhdhibu' vient de la forme II qui exprime l'intensité : il ne se contente pas de nier, il dément activement.",
    words: [
      { arabic: "أَرَأَيْتَ", transliteration: "Ara'ayta", meaning: "As-tu vu/vois-tu", root: "ر-أ-ي", grammar: "Verbe passé, forme interrogative" },
      { arabic: "يُكَذِّبُ", transliteration: "Yukadhdhibu", meaning: "Dément/traite de mensonge", root: "ك-ذ-ب", grammar: "Verbe présent forme II (intensif)" },
      { arabic: "بِالدِّينِ", transliteration: "Bid-Deen", meaning: "La Rétribution", root: "د-ي-ن", grammar: "Préposition بِ + nom défini" },
    ],
    quiz: [
      { question: "Que signifie 'yukadhdhibu' ?", options: ["Croit", "Dément activement", "Ignore", "Oublie"], correctIndex: 1 },
    ],
  },
  {
    id: 18,
    surah: "Al-Ma'un",
    surahArabic: "الماعون",
    ayahNumber: 2,
    arabic: "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ",
    transliteration: "Fadhalika alladhi yadu'u al-yateem",
    translation: "C'est bien celui qui repousse l'orphelin",
    tafsir: "'Yadu'u' signifie repousser avec violence et dureté. Le signe de celui qui nie le Jour du Jugement est qu'il maltraite les orphelins, car il ne craint aucune rétribution.",
    words: [
      { arabic: "يَدُعُّ", transliteration: "Yadu'u", meaning: "Repousse violemment", root: "د-ع-ع", grammar: "Verbe présent, forme I (intensif)" },
      { arabic: "الْيَتِيمَ", transliteration: "Al-Yateem", meaning: "L'orphelin", root: "ي-ت-م", grammar: "Nom défini, accusatif" },
    ],
    quiz: [
      { question: "Que fait cette personne avec l'orphelin ?", options: ["Le nourrit", "Le repousse violemment", "L'ignore", "L'accueille"], correctIndex: 1 },
    ],
  },
  {
    id: 19,
    surah: "Al-Ma'un",
    surahArabic: "الماعون",
    ayahNumber: 3,
    arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
    transliteration: "Wa la yahuddu 'ala ta'ami al-miskeen",
    translation: "Et n'encourage pas à nourrir le pauvre",
    tafsir: "Non seulement il ne nourrit pas le pauvre lui-même, mais en plus il n'encourage pas les autres à le faire. C'est un double péché : l'avarice personnelle et le découragement des autres.",
    words: [
      { arabic: "يَحُضُّ", transliteration: "Yahuddu", meaning: "Encourage/incite", root: "ح-ض-ض", grammar: "Verbe présent" },
      { arabic: "طَعَامِ", transliteration: "Ta'ami", meaning: "Nourriture", root: "ط-ع-م", grammar: "Nom, génitif" },
      { arabic: "الْمِسْكِينِ", transliteration: "Al-Miskeen", meaning: "Le pauvre/nécessiteux", root: "س-ك-ن", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "La racine de المسكين est liée à :", options: ["La richesse", "L'immobilité/tranquillité", "La force", "Le mouvement"], correctIndex: 1 },
    ],
  },
  {
    id: 20,
    surah: "Al-Ma'un",
    surahArabic: "الماعون",
    ayahNumber: 4,
    arabic: "فَوَيْلٌ لِلْمُصَلِّينَ",
    transliteration: "Fawaylun lil-musalleen",
    translation: "Malheur donc à ceux qui prient",
    tafsir: "Attention, ce verset ne critique pas la prière elle-même ! Il faut le lire avec le verset suivant. Le malheur est pour ceux qui prient de manière hypocrite, sans sincérité.",
    words: [
      { arabic: "وَيْلٌ", transliteration: "Waylun", meaning: "Malheur", root: "و-ي-ل", grammar: "Nom, nominatif (exclamation)" },
      { arabic: "لِلْمُصَلِّينَ", transliteration: "Lil-Musalleen", meaning: "À ceux qui prient", root: "ص-ل-و", grammar: "Préposition + participe actif pluriel" },
    ],
    quiz: [
      { question: "Ce verset critique-t-il la prière elle-même ?", options: ["Oui", "Non, il critique l'hypocrisie dans la prière"], correctIndex: 1 },
    ],
  },
  {
    id: 21,
    surah: "Al-Ma'un",
    surahArabic: "الماعون",
    ayahNumber: 5,
    arabic: "الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ",
    transliteration: "Alladhina hum 'an salatihim sahoon",
    translation: "Ceux qui sont négligents dans leur prière",
    tafsir: "Le mot clé est 'AN' (عَنْ) et non 'FI' (فِي). 'An salatihim' signifie qu'ils sont négligents PAR RAPPORT à leur prière (la retardent, l'abandonnent). Si c'était 'fi salatihim', cela concernerait les distractions pendant la prière, ce qui arrive à tout le monde.",
    words: [
      { arabic: "صَلَاتِهِمْ", transliteration: "Salatihim", meaning: "Leur prière", root: "ص-ل-و", grammar: "Nom + pronom possessif" },
      { arabic: "سَاهُونَ", transliteration: "Sahoon", meaning: "Négligents/distraits", root: "س-ه-و", grammar: "Participe actif pluriel" },
    ],
    quiz: [
      { question: "Quelle préposition est utilisée et pourquoi est-ce important ?", options: ["'Fi' - dans la prière", "'An' - par rapport à la prière (négligence)", "'Ala' - sur la prière", "'Min' - de la prière"], correctIndex: 1 },
    ],
  },
  {
    id: 22,
    surah: "Al-Ma'un",
    surahArabic: "الماعون",
    ayahNumber: 6,
    arabic: "الَّذِينَ هُمْ يُرَاءُونَ",
    transliteration: "Alladhina hum yura'oon",
    translation: "Ceux qui font l'ostentation",
    tafsir: "'Yura'oon' vient de la racine ر-أ-ي (voir). La forme III (مُفَاعَلَة) implique montrer aux gens, faire les choses pour être vu. C'est le riya' (ostentation), opposé de l'ikhlas (sincérité).",
    words: [
      { arabic: "يُرَاءُونَ", transliteration: "Yura'oon", meaning: "Font de l'ostentation", root: "ر-أ-ي", grammar: "Verbe présent forme III (mura'at)" },
    ],
    quiz: [
      { question: "Le 'riya' est l'opposé de :", options: ["La patience", "La sincérité (ikhlas)", "La générosité", "Le courage"], correctIndex: 1 },
    ],
  },
  {
    id: 23,
    surah: "Al-Ma'un",
    surahArabic: "الماعون",
    ayahNumber: 7,
    arabic: "وَيَمْنَعُونَ الْمَاعُونَ",
    transliteration: "Wa yamna'oona al-ma'oon",
    translation: "Et refusent l'aide minime",
    tafsir: "'Al-Ma'oon' désigne les petites aides du quotidien : prêter un ustensile, du sel, de l'eau. Si une personne refuse même ces petites choses, c'est un signe de dureté de cœur et d'avarice extrême.",
    words: [
      { arabic: "يَمْنَعُونَ", transliteration: "Yamna'oona", meaning: "Refusent/empêchent", root: "م-ن-ع", grammar: "Verbe présent pluriel" },
      { arabic: "الْمَاعُونَ", transliteration: "Al-Ma'oon", meaning: "L'aide minime/ustensile", root: "م-ع-ن", grammar: "Nom défini, accusatif" },
    ],
    quiz: [
      { question: "Que désigne 'Al-Ma'oon' ?", options: ["L'aumône obligatoire", "Les petites aides du quotidien", "La prière", "Le jeûne"], correctIndex: 1 },
    ],
  },

  // ===== AL-KAWTHAR (108) =====
  {
    id: 24,
    surah: "Al-Kawthar",
    surahArabic: "الكوثر",
    ayahNumber: 1,
    arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
    transliteration: "Inna a'taynaka al-kawthar",
    translation: "Nous t'avons certes accordé l'Abondance",
    tafsir: "Al-Kawthar est un fleuve au Paradis promis au Prophète ﷺ. Le mot vient de la racine ك-ث-ر (abondance). C'est aussi le bien abondant en général : la prophétie, le Quran, l'intercession.",
    words: [
      { arabic: "إِنَّا", transliteration: "Inna", meaning: "Certes nous", root: "-", grammar: "Particule d'emphase + pronom نَا" },
      { arabic: "أَعْطَيْنَاكَ", transliteration: "A'taynaka", meaning: "T'avons donné", root: "ع-ط-و", grammar: "Verbe passé forme IV + pronoms" },
      { arabic: "الْكَوْثَرَ", transliteration: "Al-Kawthar", meaning: "L'Abondance", root: "ك-ث-ر", grammar: "Nom défini, accusatif" },
    ],
    quiz: [
      { question: "Qu'est-ce qu'Al-Kawthar ?", options: ["Une montagne", "Un fleuve au Paradis", "Un ange", "Une étoile"], correctIndex: 1 },
      { question: "La racine ك-ث-ر exprime :", options: ["La rareté", "L'abondance", "La beauté", "La force"], correctIndex: 1 },
    ],
  },
  {
    id: 25,
    surah: "Al-Kawthar",
    surahArabic: "الكوثر",
    ayahNumber: 2,
    arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
    transliteration: "Fasalli li-rabbika wanhar",
    translation: "Accomplis la prière pour ton Seigneur et sacrifie",
    tafsir: "En remerciement de ce don immense, deux actions sont demandées : la prière (relation avec Allah) et le sacrifice (partage avec les gens). 'Wanhar' vient de نَحَرَ (égorger le sacrifice).",
    words: [
      { arabic: "فَصَلِّ", transliteration: "Fasalli", meaning: "Prie donc", root: "ص-ل-و", grammar: "Impératif précédé de فَ" },
      { arabic: "لِرَبِّكَ", transliteration: "Li-Rabbika", meaning: "Pour ton Seigneur", root: "ر-ب-ب", grammar: "Préposition + nom + pronom" },
      { arabic: "وَانْحَرْ", transliteration: "Wanhar", meaning: "Et sacrifie", root: "ن-ح-ر", grammar: "Impératif" },
    ],
    quiz: [
      { question: "Les deux actions demandées sont :", options: ["Jeûne et aumône", "Prière et sacrifice", "Lecture et méditation", "Voyage et commerce"], correctIndex: 1 },
    ],
  },
  {
    id: 26,
    surah: "Al-Kawthar",
    surahArabic: "الكوثر",
    ayahNumber: 3,
    arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
    transliteration: "Inna shani'aka huwa al-abtar",
    translation: "Certes, celui qui te déteste sera le privé (de tout bien)",
    tafsir: "'Shani'aka' signifie celui qui te hait. 'Al-Abtar' signifie celui qui est coupé, sans descendance ni continuité. Cette sourate fut révélée quand les mécréants ont moqué le Prophète ﷺ après la mort de son fils.",
    words: [
      { arabic: "شَانِئَكَ", transliteration: "Shani'aka", meaning: "Celui qui te hait", root: "ش-ن-أ", grammar: "Participe actif + pronom كَ" },
      { arabic: "الْأَبْتَرُ", transliteration: "Al-Abtar", meaning: "Le privé/coupé", root: "ب-ت-ر", grammar: "Adjectif forme أَفْعَل" },
    ],
    quiz: [
      { question: "Que signifie 'Al-Abtar' ?", options: ["Le puissant", "Le coupé/privé de tout bien", "Le riche", "Le savant"], correctIndex: 1 },
    ],
  },

  // ===== AL-KAFIRUN (109) =====
  {
    id: 27,
    surah: "Al-Kafirun",
    surahArabic: "الكافرون",
    ayahNumber: 1,
    arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
    transliteration: "Qul ya ayyuha al-kafirun",
    translation: "Dis : « Ô vous les mécréants ! »",
    tafsir: "Allah ordonne au Prophète ﷺ de s'adresser directement à ceux qui rejettent la foi. Le ton est ferme mais clair : c'est une déclaration de séparation définitive dans l'adoration.",
    words: [
      { arabic: "قُلْ", transliteration: "Qul", meaning: "Dis", root: "ق-و-ل", grammar: "Impératif" },
      { arabic: "يَا أَيُّهَا", transliteration: "Ya ayyuha", meaning: "Ô vous", root: "-", grammar: "Particule d'appel + nom d'interpellation" },
      { arabic: "الْكَافِرُونَ", transliteration: "Al-Kafirun", meaning: "Les mécréants", root: "ك-ف-ر", grammar: "Participe actif pluriel" },
    ],
    quiz: [
      { question: "La racine ك-ف-ر signifie originellement :", options: ["Croire", "Couvrir/cacher (la vérité)", "Combattre", "Fuir"], correctIndex: 1 },
    ],
  },
  {
    id: 28,
    surah: "Al-Kafirun",
    surahArabic: "الكافرون",
    ayahNumber: 2,
    arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ",
    transliteration: "La a'budu ma ta'budoon",
    translation: "Je n'adore pas ce que vous adorez",
    tafsir: "Le Prophète ﷺ déclare qu'il n'adore pas leurs idoles. Le présent (a'budu) indique un refus actuel et permanent.",
    words: [
      { arabic: "لَا", transliteration: "La", meaning: "Ne...pas", root: "-", grammar: "Particule de négation" },
      { arabic: "أَعْبُدُ", transliteration: "A'budu", meaning: "J'adore", root: "ع-ب-د", grammar: "Verbe présent, 1ère pers." },
      { arabic: "تَعْبُدُونَ", transliteration: "Ta'budoon", meaning: "Vous adorez", root: "ع-ب-د", grammar: "Verbe présent, 2ème pers. pluriel" },
    ],
    quiz: [
      { question: "Quel temps verbal est utilisé ?", options: ["Le passé", "Le présent (refus permanent)", "Le futur", "L'impératif"], correctIndex: 1 },
    ],
  },
  {
    id: 29,
    surah: "Al-Kafirun",
    surahArabic: "الكافرون",
    ayahNumber: 3,
    arabic: "وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ",
    transliteration: "Wa la antum 'abidoona ma a'bud",
    translation: "Et vous n'adorez pas ce que j'adore",
    tafsir: "Cette affirmation constate un fait : les mécréants de Quraysh n'adorent pas Allah de la manière qu'Il a prescrite. Le participe actif 'abidoon renforce la permanence de cet état.",
    words: [
      { arabic: "أَنْتُمْ", transliteration: "Antum", meaning: "Vous", root: "-", grammar: "Pronom personnel, 2ème pers. pluriel" },
      { arabic: "عَابِدُونَ", transliteration: "'Abidoon", meaning: "Adorateurs", root: "ع-ب-د", grammar: "Participe actif pluriel" },
    ],
    quiz: [
      { question: "'Abidoon' est :", options: ["Un verbe", "Un participe actif", "Un nom", "Un adverbe"], correctIndex: 1 },
    ],
  },
  {
    id: 30,
    surah: "Al-Kafirun",
    surahArabic: "الكافرون",
    ayahNumber: 4,
    arabic: "وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ",
    transliteration: "Wa la ana 'abidun ma 'abadtum",
    translation: "Et je ne suis pas adorateur de ce que vous adorez",
    tafsir: "Le verbe passe au passé (abadtum) : même ce que vous avez adoré dans le passé, je ne l'adorerai jamais. C'est une rupture totale avec le polythéisme.",
    words: [
      { arabic: "عَابِدٌ", transliteration: "'Abidun", meaning: "Adorateur", root: "ع-ب-د", grammar: "Participe actif singulier, nominatif" },
      { arabic: "عَبَدْتُمْ", transliteration: "'Abadtum", meaning: "Vous avez adoré", root: "ع-ب-د", grammar: "Verbe passé, 2ème pers. pluriel" },
    ],
    quiz: [
      { question: "Pourquoi le passé est-il utilisé ici ?", options: ["Par erreur", "Pour couvrir aussi le passé de leur polythéisme", "Pour parler d'un événement précis", "Pour la rime"], correctIndex: 1 },
    ],
  },
  {
    id: 31,
    surah: "Al-Kafirun",
    surahArabic: "الكافرون",
    ayahNumber: 5,
    arabic: "وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ",
    transliteration: "Wa la antum 'abidoona ma a'bud",
    translation: "Et vous n'adorez pas ce que j'adore",
    tafsir: "La répétition n'est pas redondante. Le verset 3 concernait le présent, celui-ci concerne le futur : vous ne serez jamais des adorateurs d'Allah tant que vous persisterez dans votre mécréance.",
    words: [
      { arabic: "عَابِدُونَ", transliteration: "'Abidoon", meaning: "Adorateurs", root: "ع-ب-د", grammar: "Participe actif pluriel (état permanent)" },
    ],
    quiz: [
      { question: "Pourquoi ce verset est-il répété ?", options: ["Erreur de copie", "Pour couvrir présent et futur", "Pour la beauté du style", "Sans raison"], correctIndex: 1 },
    ],
  },
  {
    id: 32,
    surah: "Al-Kafirun",
    surahArabic: "الكافرون",
    ayahNumber: 6,
    arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
    transliteration: "Lakum deenukum waliya deen",
    translation: "À vous votre religion, et à moi ma religion",
    tafsir: "Ce verset établit la séparation claire : chacun est responsable de son choix. Ce n'est pas une acceptation du polythéisme mais une déclaration que le Prophète ﷺ ne fera aucun compromis dans le monothéisme.",
    words: [
      { arabic: "لَكُمْ", transliteration: "Lakum", meaning: "À vous", root: "-", grammar: "Préposition + pronom" },
      { arabic: "دِينُكُمْ", transliteration: "Deenukum", meaning: "Votre religion", root: "د-ي-ن", grammar: "Nom + pronom possessif" },
      { arabic: "دِينِ", transliteration: "Deen", meaning: "Ma religion", root: "د-ي-ن", grammar: "Nom + pronom ي (élidé)" },
    ],
    quiz: [
      { question: "Ce verset signifie-t-il que toutes les religions se valent ?", options: ["Oui", "Non, c'est une déclaration de non-compromis"], correctIndex: 1 },
    ],
  },

  // ===== AN-NASR (110) =====
  {
    id: 33,
    surah: "An-Nasr",
    surahArabic: "النصر",
    ayahNumber: 1,
    arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
    transliteration: "Idha ja'a nasru Allahi wal-fath",
    translation: "Lorsque vient le secours d'Allah et la victoire",
    tafsir: "Cette sourate est la dernière révélée en entier. 'An-Nasr' est le secours divin et 'Al-Fath' est la conquête de la Mecque. Elle annonçait aussi l'approche de la fin de la mission terrestre du Prophète ﷺ.",
    words: [
      { arabic: "جَاءَ", transliteration: "Ja'a", meaning: "Est venu", root: "ج-ي-أ", grammar: "Verbe passé" },
      { arabic: "نَصْرُ", transliteration: "Nasru", meaning: "Le secours", root: "ن-ص-ر", grammar: "Nom, nominatif" },
      { arabic: "الْفَتْحُ", transliteration: "Al-Fath", meaning: "La victoire/conquête", root: "ف-ت-ح", grammar: "Nom défini, nominatif" },
    ],
    quiz: [
      { question: "'Al-Fath' fait référence à :", options: ["La bataille de Badr", "La conquête de la Mecque", "L'Hégire", "La bataille d'Uhud"], correctIndex: 1 },
    ],
  },
  {
    id: 34,
    surah: "An-Nasr",
    surahArabic: "النصر",
    ayahNumber: 2,
    arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
    transliteration: "Wa ra'ayta an-nasa yadkhuloona fi deeni Allahi afwaja",
    translation: "Et que tu vois les gens entrer en foules dans la religion d'Allah",
    tafsir: "Après la conquête de la Mecque, les tribus arabes ont embrassé l'Islam massivement. 'Afwajan' (en foules) contraste avec le début de la mission où les gens entraient un par un.",
    words: [
      { arabic: "رَأَيْتَ", transliteration: "Ra'ayta", meaning: "Tu as vu", root: "ر-أ-ي", grammar: "Verbe passé, 2ème pers." },
      { arabic: "النَّاسَ", transliteration: "An-Nasa", meaning: "Les gens", root: "ن-و-س", grammar: "Nom défini, accusatif" },
      { arabic: "يَدْخُلُونَ", transliteration: "Yadkhuloona", meaning: "Entrent", root: "د-خ-ل", grammar: "Verbe présent pluriel" },
      { arabic: "أَفْوَاجًا", transliteration: "Afwajan", meaning: "En foules", root: "ف-و-ج", grammar: "Pluriel de فَوْج, accusatif (hal)" },
    ],
    quiz: [
      { question: "Que signifie 'Afwajan' ?", options: ["Un par un", "En foules", "Secrètement", "En hésitant"], correctIndex: 1 },
    ],
  },
  {
    id: 35,
    surah: "An-Nasr",
    surahArabic: "النصر",
    ayahNumber: 3,
    arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا",
    transliteration: "Fasabbih bihamdi rabbika wastaghfirhu innahu kana tawwaba",
    translation: "Glorifie ton Seigneur par Sa louange et implore Son pardon. Il est le grand Accueillant au repentir",
    tafsir: "Même au sommet du succès, le croyant doit glorifier Allah et demander pardon. 'Tawwab' (forme فَعَّال) indique qu'Allah accepte constamment et abondamment le repentir.",
    words: [
      { arabic: "فَسَبِّحْ", transliteration: "Fasabbih", meaning: "Glorifie donc", root: "س-ب-ح", grammar: "Impératif forme II" },
      { arabic: "بِحَمْدِ", transliteration: "Bihamdi", meaning: "Par la louange", root: "ح-م-د", grammar: "Préposition + nom" },
      { arabic: "وَاسْتَغْفِرْهُ", transliteration: "Wastaghfirhu", meaning: "Et implore Son pardon", root: "غ-ف-ر", grammar: "Impératif forme X + pronom" },
      { arabic: "تَوَّابًا", transliteration: "Tawwaba", meaning: "Accueillant au repentir", root: "ت-و-ب", grammar: "Adjectif forme فَعَّال (intensif)" },
    ],
    quiz: [
      { question: "La forme فَعَّال de 'Tawwab' indique :", options: ["Une action unique", "Une action abondante et répétée", "Une action passée", "Une action future"], correctIndex: 1 },
      { question: "La racine غ-ف-ر est liée à :", options: ["La punition", "Le pardon/couvrir les péchés", "La récompense", "La patience"], correctIndex: 1 },
    ],
  },

  // ===== AL-MASAD (111) =====
  {
    id: 36,
    surah: "Al-Masad",
    surahArabic: "المسد",
    ayahNumber: 1,
    arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
    transliteration: "Tabbat yada Abi Lahabin wa tabb",
    translation: "Que périssent les deux mains d'Abu Lahab et qu'il périsse",
    tafsir: "Abu Lahab était l'oncle du Prophète ﷺ et son pire ennemi. 'Tabbat' signifie perdre, périr. Ses 'deux mains' symbolisent ses actions et ses efforts contre l'Islam.",
    words: [
      { arabic: "تَبَّتْ", transliteration: "Tabbat", meaning: "Ont péri", root: "ت-ب-ب", grammar: "Verbe passé + ت féminin" },
      { arabic: "يَدَا", transliteration: "Yada", meaning: "Les deux mains", root: "ي-د-ي", grammar: "Duel, nominatif" },
      { arabic: "أَبِي لَهَبٍ", transliteration: "Abi Lahab", meaning: "Abu Lahab (père de la flamme)", root: "ل-ه-ب", grammar: "Kunya, génitif" },
    ],
    quiz: [
      { question: "Qui était Abu Lahab ?", options: ["Un compagnon", "L'oncle ennemi du Prophète ﷺ", "Un roi", "Un allié"], correctIndex: 1 },
    ],
  },
  {
    id: 37,
    surah: "Al-Masad",
    surahArabic: "المسد",
    ayahNumber: 2,
    arabic: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
    transliteration: "Ma aghna 'anhu maluhu wa ma kasab",
    translation: "Ses biens ne lui serviront à rien, ni ce qu'il a acquis",
    tafsir: "Ni sa richesse ni ses enfants ne pourront le sauver du châtiment d'Allah. 'Ma kasab' peut désigner ses enfants ou ses œuvres.",
    words: [
      { arabic: "أَغْنَىٰ", transliteration: "Aghna", meaning: "A enrichi/servi", root: "غ-ن-ي", grammar: "Verbe passé forme IV" },
      { arabic: "مَالُهُ", transliteration: "Maluhu", meaning: "Ses biens", root: "م-و-ل", grammar: "Nom + pronom possessif" },
      { arabic: "كَسَبَ", transliteration: "Kasab", meaning: "Il a acquis", root: "ك-س-ب", grammar: "Verbe passé" },
    ],
    quiz: [
      { question: "Que signifie 'Ma kasab' ?", options: ["Sa maison", "Ce qu'il a acquis (biens/enfants)", "Ses amis", "Sa tribu"], correctIndex: 1 },
    ],
  },
  {
    id: 38,
    surah: "Al-Masad",
    surahArabic: "المسد",
    ayahNumber: 3,
    arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
    transliteration: "Sayasla naran dhata lahab",
    translation: "Il sera brûlé dans un Feu plein de flammes",
    tafsir: "Ironie divine : Abu Lahab (père de la flamme) sera brûlé par les flammes. Son nom même est devenu une prophétie de son châtiment.",
    words: [
      { arabic: "سَيَصْلَىٰ", transliteration: "Sayasla", meaning: "Il brûlera", root: "ص-ل-ي", grammar: "Verbe futur (سَ + présent)" },
      { arabic: "نَارًا", transliteration: "Naran", meaning: "Un feu", root: "ن-و-ر", grammar: "Nom indéfini, accusatif" },
      { arabic: "ذَاتَ", transliteration: "Dhata", meaning: "Possédant/pleine de", root: "-", grammar: "Nom relatif féminin" },
      { arabic: "لَهَبٍ", transliteration: "Lahab", meaning: "Flammes", root: "ل-ه-ب", grammar: "Nom, génitif" },
    ],
    quiz: [
      { question: "Quelle ironie contient ce verset ?", options: ["Abu Lahab (père de la flamme) sera puni par les flammes", "Il aimait le feu", "Il était forgeron", "Aucune"], correctIndex: 0 },
    ],
  },
  {
    id: 39,
    surah: "Al-Masad",
    surahArabic: "المسد",
    ayahNumber: 4,
    arabic: "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
    transliteration: "Wamra'atuhu hammalata al-hatab",
    translation: "De même sa femme, la porteuse de bois",
    tafsir: "La femme d'Abu Lahab (Umm Jamil) mettait des épines sur le chemin du Prophète ﷺ. 'Hammalat al-Hatab' peut aussi signifier qu'elle portait des rumeurs (médisance = porter du bois pour alimenter le feu de la discorde).",
    words: [
      { arabic: "امْرَأَتُهُ", transliteration: "Imra'atuhu", meaning: "Sa femme", root: "م-ر-أ", grammar: "Nom + pronom possessif" },
      { arabic: "حَمَّالَةَ", transliteration: "Hammalata", meaning: "Porteuse", root: "ح-م-ل", grammar: "Forme فَعَّالَة (intensif fém.)" },
      { arabic: "الْحَطَبِ", transliteration: "Al-Hatab", meaning: "Le bois", root: "ح-ط-ب", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "'Hammalat al-Hatab' peut signifier :", options: ["Cuisinière", "Porteuse de bois/rumeurs", "Marchande", "Voyageuse"], correctIndex: 1 },
    ],
  },
  {
    id: 40,
    surah: "Al-Masad",
    surahArabic: "المسد",
    ayahNumber: 5,
    arabic: "فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ",
    transliteration: "Fi jidiha hablun min masad",
    translation: "À son cou une corde de fibres",
    tafsir: "'Jid' est un mot noble pour 'cou', utilisé ironiquement car elle portait un collier précieux dont elle était fière. Au lieu de ce collier, elle aura une corde de fibres tressées (masad) en Enfer.",
    words: [
      { arabic: "جِيدِهَا", transliteration: "Jidiha", meaning: "Son cou", root: "ج-ي-د", grammar: "Nom + pronom possessif fém." },
      { arabic: "حَبْلٌ", transliteration: "Hablun", meaning: "Une corde", root: "ح-ب-ل", grammar: "Nom indéfini, nominatif" },
      { arabic: "مَسَدٍ", transliteration: "Masad", meaning: "Fibres tressées", root: "م-س-د", grammar: "Nom, génitif" },
    ],
    quiz: [
      { question: "Pourquoi le mot 'Jid' (noble pour cou) est-il utilisé ?", options: ["Par respect", "Par ironie (elle portait un collier de luxe)", "Par hasard", "C'est le seul mot en arabe"], correctIndex: 1 },
    ],
  },

  // ===== AL-IKHLAS (112) =====
  {
    id: 41,
    surah: "Al-Ikhlas",
    surahArabic: "الإخلاص",
    ayahNumber: 1,
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    transliteration: "Qul huwa Allahu ahad",
    translation: "Dis : « Il est Allah, Unique »",
    tafsir: "'Ahad' est plus fort que 'Wahid'. Wahid signifie 'un' numériquement, tandis que Ahad signifie un et unique dans Son essence, sans pareil ni semblable. Cette sourate équivaut à un tiers du Quran car elle résume le monothéisme pur.",
    words: [
      { arabic: "قُلْ", transliteration: "Qul", meaning: "Dis", root: "ق-و-ل", grammar: "Impératif" },
      { arabic: "هُوَ", transliteration: "Huwa", meaning: "Il/Lui", root: "-", grammar: "Pronom personnel 3ème pers." },
      { arabic: "أَحَدٌ", transliteration: "Ahad", meaning: "Unique (sans pareil)", root: "و-ح-د", grammar: "Adjectif, nominatif" },
    ],
    quiz: [
      { question: "Quelle est la différence entre Ahad et Wahid ?", options: ["Aucune", "Ahad = unique sans pareil, Wahid = un numériquement", "Wahid est plus fort", "Ce sont des synonymes"], correctIndex: 1 },
      { question: "Cette sourate équivaut à :", options: ["La moitié du Quran", "Un tiers du Quran", "Un quart du Quran", "Tout le Quran"], correctIndex: 1 },
    ],
  },
  {
    id: 42,
    surah: "Al-Ikhlas",
    surahArabic: "الإخلاص",
    ayahNumber: 2,
    arabic: "اللَّهُ الصَّمَدُ",
    transliteration: "Allahu as-Samad",
    translation: "Allah, le Seul à être imploré",
    tafsir: "'As-Samad' est un attribut unique d'Allah signifiant : Celui vers qui toute la création se tourne dans ses besoins, Celui qui n'a besoin de personne, le Plein, le Solide, l'Éternel qui ne mange ni ne boit.",
    words: [
      { arabic: "اللَّهُ", transliteration: "Allahu", meaning: "Allah", root: "أ-ل-ه", grammar: "Nom propre, nominatif (mubtada')" },
      { arabic: "الصَّمَدُ", transliteration: "As-Samad", meaning: "Le Seul imploré/l'Absolu", root: "ص-م-د", grammar: "Adjectif défini, nominatif (khabar)" },
    ],
    quiz: [
      { question: "Que signifie 'As-Samad' ?", options: ["Le Créateur", "Celui vers qui tout se tourne et qui n'a besoin de rien", "Le Miséricordieux", "Le Puissant"], correctIndex: 1 },
    ],
  },
  {
    id: 43,
    surah: "Al-Ikhlas",
    surahArabic: "الإخلاص",
    ayahNumber: 3,
    arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
    transliteration: "Lam yalid wa lam yulad",
    translation: "Il n'a pas engendré et n'a pas été engendré",
    tafsir: "Ce verset réfute les croyances qui attribuent un fils à Allah (christianisme) ou un père (polythéisme). Allah est éternel, sans début ni fin, au-delà de la procréation.",
    words: [
      { arabic: "لَمْ", transliteration: "Lam", meaning: "N'a pas", root: "-", grammar: "Particule de négation (passé)" },
      { arabic: "يَلِدْ", transliteration: "Yalid", meaning: "Engendré (un enfant)", root: "و-ل-د", grammar: "Verbe présent apocopé" },
      { arabic: "يُولَدْ", transliteration: "Yulad", meaning: "Été engendré", root: "و-ل-د", grammar: "Verbe présent passif apocopé" },
    ],
    quiz: [
      { question: "Ce verset réfute la croyance que :", options: ["Allah est unique", "Allah a un fils ou un père", "Allah est miséricordieux", "Allah est le créateur"], correctIndex: 1 },
    ],
  },
  {
    id: 44,
    surah: "Al-Ikhlas",
    surahArabic: "الإخلاص",
    ayahNumber: 4,
    arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    transliteration: "Wa lam yakun lahu kufuwan ahad",
    translation: "Et nul n'est égal à Lui",
    tafsir: "'Kufuw' signifie égal, semblable, équivalent. Personne ni rien dans la création ne peut être comparé à Allah. Ce verset clôt la sourate en réaffirmant l'unicité absolue d'Allah.",
    words: [
      { arabic: "يَكُنْ", transliteration: "Yakun", meaning: "N'est/était", root: "ك-و-ن", grammar: "Verbe présent apocopé (kana)" },
      { arabic: "كُفُوًا", transliteration: "Kufuwan", meaning: "Égal/semblable", root: "ك-ف-أ", grammar: "Nom, accusatif (khabar kana)" },
      { arabic: "أَحَدٌ", transliteration: "Ahad", meaning: "Quiconque", root: "و-ح-د", grammar: "Nom, nominatif (ism kana)" },
    ],
    quiz: [
      { question: "Que signifie 'Kufuw' ?", options: ["Supérieur", "Égal/semblable", "Inférieur", "Proche"], correctIndex: 1 },
    ],
  },

  // ===== AL-FALAQ (113) =====
  {
    id: 45,
    surah: "Al-Falaq",
    surahArabic: "الفلق",
    ayahNumber: 1,
    arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
    transliteration: "Qul a'udhu bi-Rabbi al-falaq",
    translation: "Dis : « Je cherche protection auprès du Seigneur de l'aube »",
    tafsir: "'A'udhu' signifie je me réfugie, je cherche protection. 'Al-Falaq' signifie l'aube, le fendement (de l'obscurité par la lumière). Allah est capable de fendre les ténèbres, Il peut donc protéger de tout mal.",
    words: [
      { arabic: "أَعُوذُ", transliteration: "A'udhu", meaning: "Je cherche refuge", root: "ع-و-ذ", grammar: "Verbe présent, 1ère pers." },
      { arabic: "بِرَبِّ", transliteration: "Bi-Rabbi", meaning: "Auprès du Seigneur", root: "ر-ب-ب", grammar: "Préposition + nom" },
      { arabic: "الْفَلَقِ", transliteration: "Al-Falaq", meaning: "L'aube/le fendement", root: "ف-ل-ق", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "Que signifie 'Al-Falaq' ?", options: ["La nuit", "L'aube/le fendement", "Le soleil", "L'étoile"], correctIndex: 1 },
    ],
  },
  {
    id: 46,
    surah: "Al-Falaq",
    surahArabic: "الفلق",
    ayahNumber: 2,
    arabic: "مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "Min sharri ma khalaq",
    translation: "Contre le mal de ce qu'Il a créé",
    tafsir: "Protection globale contre le mal de toute la création. 'Ma khalaq' englobe tout : humains, djinns, animaux, éléments naturels. Le mal est dans les créatures, pas dans l'acte de création d'Allah.",
    words: [
      { arabic: "شَرِّ", transliteration: "Sharri", meaning: "Mal", root: "ش-ر-ر", grammar: "Nom, génitif" },
      { arabic: "خَلَقَ", transliteration: "Khalaq", meaning: "Il a créé", root: "خ-ل-ق", grammar: "Verbe passé" },
    ],
    quiz: [
      { question: "Le mal existe dans :", options: ["L'acte de création", "Les créatures elles-mêmes", "Allah", "Le néant"], correctIndex: 1 },
    ],
  },
  {
    id: 47,
    surah: "Al-Falaq",
    surahArabic: "الفلق",
    ayahNumber: 3,
    arabic: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ",
    transliteration: "Wa min sharri ghasiqin idha waqab",
    translation: "Contre le mal de l'obscurité quand elle s'approfondit",
    tafsir: "'Ghasiq' désigne la nuit ou la lune quand elle se couvre. 'Waqab' signifie s'approfondir, s'intensifier. La nuit est le moment où les dangers se multiplient et où le mal se propage.",
    words: [
      { arabic: "غَاسِقٍ", transliteration: "Ghasiqin", meaning: "Obscurité/nuit", root: "غ-س-ق", grammar: "Participe actif, génitif" },
      { arabic: "وَقَبَ", transliteration: "Waqab", meaning: "S'est approfondie", root: "و-ق-ب", grammar: "Verbe passé" },
    ],
    quiz: [
      { question: "Que signifie 'Ghasiq' ?", options: ["Le soleil", "La nuit/obscurité", "Le vent", "La pluie"], correctIndex: 1 },
    ],
  },
  {
    id: 48,
    surah: "Al-Falaq",
    surahArabic: "الفلق",
    ayahNumber: 4,
    arabic: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
    transliteration: "Wa min sharri an-naffathati fil-'uqad",
    translation: "Contre le mal de celles qui soufflent sur les nœuds",
    tafsir: "'An-Naffathat' (les souffleuses) désigne celles qui pratiquent la sorcellerie en soufflant sur des nœuds. La forme فَعَّالَات indique l'intensité et la répétition de l'acte.",
    words: [
      { arabic: "النَّفَّاثَاتِ", transliteration: "An-Naffathati", meaning: "Les souffleuses", root: "ن-ف-ث", grammar: "Pluriel fém. forme فَعَّالَة" },
      { arabic: "الْعُقَدِ", transliteration: "Al-'Uqad", meaning: "Les nœuds", root: "ع-ق-د", grammar: "Pluriel de عُقْدَة, génitif" },
    ],
    quiz: [
      { question: "'An-Naffathat fil-'Uqad' désigne :", options: ["Des tisserandes", "Des sorcières qui soufflent sur des nœuds", "Des couturières", "Des cuisinières"], correctIndex: 1 },
    ],
  },
  {
    id: 49,
    surah: "Al-Falaq",
    surahArabic: "الفلق",
    ayahNumber: 5,
    arabic: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    transliteration: "Wa min sharri hasidin idha hasad",
    translation: "Et contre le mal de l'envieux quand il envie",
    tafsir: "'Hasad' est l'envie, le fait de souhaiter la disparition du bienfait chez autrui. 'Idha hasad' précise que le mal se produit quand l'envieux passe à l'acte (par le regard, la parole ou l'action).",
    words: [
      { arabic: "حَاسِدٍ", transliteration: "Hasidin", meaning: "Un envieux", root: "ح-س-د", grammar: "Participe actif, génitif" },
      { arabic: "حَسَدَ", transliteration: "Hasad", meaning: "Il a envié", root: "ح-س-د", grammar: "Verbe passé" },
    ],
    quiz: [
      { question: "Le 'Hasad' est :", options: ["La jalousie positive", "Souhaiter la disparition du bienfait chez autrui", "L'admiration", "La compétition saine"], correctIndex: 1 },
    ],
  },

  // ===== AN-NAS (114) =====
  {
    id: 50,
    surah: "An-Nas",
    surahArabic: "الناس",
    ayahNumber: 1,
    arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    transliteration: "Qul a'udhu bi-Rabbi an-nas",
    translation: "Dis : « Je cherche protection auprès du Seigneur des hommes »",
    tafsir: "Contrairement à Al-Falaq qui mentionne 'Rabb al-Falaq', ici Allah est mentionné en tant que Seigneur des hommes spécifiquement, car le mal mentionné dans cette sourate (le waswas) touche principalement les humains.",
    words: [
      { arabic: "أَعُوذُ", transliteration: "A'udhu", meaning: "Je cherche refuge", root: "ع-و-ذ", grammar: "Verbe présent, 1ère pers." },
      { arabic: "بِرَبِّ", transliteration: "Bi-Rabbi", meaning: "Auprès du Seigneur", root: "ر-ب-ب", grammar: "Préposition + nom" },
      { arabic: "النَّاسِ", transliteration: "An-Nas", meaning: "Des hommes", root: "ن-و-س", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "Pourquoi 'Rabb an-Nas' et non 'Rabb al-Falaq' ici ?", options: ["Par hasard", "Car le waswas touche spécifiquement les humains", "Pour la rime", "Aucune raison"], correctIndex: 1 },
    ],
  },
  {
    id: 51,
    surah: "An-Nas",
    surahArabic: "الناس",
    ayahNumber: 2,
    arabic: "مَلِكِ النَّاسِ",
    transliteration: "Maliki an-nas",
    translation: "Le Roi des hommes",
    tafsir: "Après 'Rabb' (Seigneur), Allah est mentionné comme 'Malik' (Roi). Le Roi a autorité sur ses sujets. Cette progression (Seigneur → Roi → Divinité) renforce la protection demandée.",
    words: [
      { arabic: "مَلِكِ", transliteration: "Maliki", meaning: "Roi", root: "م-ل-ك", grammar: "Nom, génitif (badal)" },
      { arabic: "النَّاسِ", transliteration: "An-Nas", meaning: "Des hommes", root: "ن-و-س", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "La progression dans cette sourate est :", options: ["Roi → Seigneur → Dieu", "Seigneur → Roi → Dieu", "Dieu → Roi → Seigneur", "Créateur → Roi → Juge"], correctIndex: 1 },
    ],
  },
  {
    id: 52,
    surah: "An-Nas",
    surahArabic: "الناس",
    ayahNumber: 3,
    arabic: "إِلَٰهِ النَّاسِ",
    transliteration: "Ilahi an-nas",
    translation: "Le Dieu des hommes",
    tafsir: "'Ilah' est le sommet de la progression : après Seigneur et Roi, Allah est présenté comme la seule Divinité digne d'adoration. C'est vers Lui seul que l'on se tourne pour protection.",
    words: [
      { arabic: "إِلَٰهِ", transliteration: "Ilahi", meaning: "Dieu/Divinité", root: "أ-ل-ه", grammar: "Nom, génitif (badal)" },
    ],
    quiz: [
      { question: "Que signifie 'Ilah' ?", options: ["Ange", "Prophète", "Divinité digne d'adoration", "Esprit"], correctIndex: 2 },
    ],
  },
  {
    id: 53,
    surah: "An-Nas",
    surahArabic: "الناس",
    ayahNumber: 4,
    arabic: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
    transliteration: "Min sharri al-waswasi al-khannas",
    translation: "Contre le mal du mauvais conseiller furtif",
    tafsir: "'Al-Waswas' est celui qui chuchote des mauvaises pensées. 'Al-Khannas' (de خَنَسَ = reculer) signifie qu'il recule et se cache quand on mentionne Allah. C'est Shaytan qui chuchote puis se retire.",
    words: [
      { arabic: "الْوَسْوَاسِ", transliteration: "Al-Waswas", meaning: "Le chuchoteur", root: "و-س-و-س", grammar: "Nom défini (forme de répétition)" },
      { arabic: "الْخَنَّاسِ", transliteration: "Al-Khannas", meaning: "Le furtif/qui recule", root: "خ-ن-س", grammar: "Adjectif forme فَعَّال (intensif)" },
    ],
    quiz: [
      { question: "Que fait 'Al-Khannas' quand on mentionne Allah ?", options: ["Il attaque", "Il recule et se cache", "Il crie", "Il reste"], correctIndex: 1 },
    ],
  },
  {
    id: 54,
    surah: "An-Nas",
    surahArabic: "الناس",
    ayahNumber: 5,
    arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
    transliteration: "Alladhi yuwaswisu fi suduri an-nas",
    translation: "Celui qui chuchote dans les poitrines des gens",
    tafsir: "'Sudur' (poitrines) est utilisé car c'est là que se trouve le cœur (qalb), siège des pensées et des intentions. Le Shaytan s'attaque directement au cœur pour corrompre les pensées.",
    words: [
      { arabic: "يُوَسْوِسُ", transliteration: "Yuwaswisu", meaning: "Chuchote", root: "و-س-و-س", grammar: "Verbe présent (forme quadrilitère)" },
      { arabic: "صُدُورِ", transliteration: "Suduri", meaning: "Poitrines", root: "ص-د-ر", grammar: "Pluriel de صَدْر, génitif" },
    ],
    quiz: [
      { question: "Pourquoi 'sudur' (poitrines) et non 'qulub' (cœurs) ?", options: ["Par hasard", "Car la poitrine contient le cœur, siège des pensées", "Pour la rime", "Erreur de traduction"], correctIndex: 1 },
    ],
  },
  {
    id: 55,
    surah: "An-Nas",
    surahArabic: "الناس",
    ayahNumber: 6,
    arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
    transliteration: "Mina al-jinnati wan-nas",
    translation: "Qu'il soit parmi les djinns ou les hommes",
    tafsir: "Le waswas ne vient pas seulement des djinns (Shaytan) mais aussi des humains. Des personnes peuvent jouer le rôle de shaytan en chuchotant de mauvais conseils. D'où l'importance de bien choisir son entourage.",
    words: [
      { arabic: "الْجِنَّةِ", transliteration: "Al-Jinnati", meaning: "Les djinns", root: "ج-ن-ن", grammar: "Nom défini, génitif" },
      { arabic: "النَّاسِ", transliteration: "An-Nas", meaning: "Les hommes", root: "ن-و-س", grammar: "Nom défini, génitif" },
    ],
    quiz: [
      { question: "Le waswas peut venir de :", options: ["Seulement les djinns", "Seulement les humains", "Les djinns ET les humains", "Les anges"], correctIndex: 2 },
    ],
  },
];

export function getVerseForDay(dayIndex: number): DailyVerse {
  return verses[dayIndex % verses.length];
}
