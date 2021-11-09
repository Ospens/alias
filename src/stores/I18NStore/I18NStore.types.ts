export interface LocaleWordSet {
  id: number;
  name: string;
  words: string[];
  image: any;
}

export interface Locale {
  routing: {
    homeTitle: string;
    settingsTitle: string;
    wordSetsTitle: string;
    overviewTitle: string;
    roundResultsTitle: string;
  };
  actions: {
    next: string;
    back: string;
    play: string;
    guess: string;
    skip: string;
    exit: string;
    continue: string;
    save: string;
    menu: string;
  };
  teamNames: [string, string, string, string, string, string, string, string, string, string];
  settings: {
    penaltyForSkip: string;
    pointsForWin: string;
    roundDuration: string;
    languageOfWords: string;
    languageOfApp: string;
    rateApp: string;
  };
  overview: {
    winner: (teamName: string) => string;
    nextTeam: (teamName: string) => string;
  };
  wordSets: {
    wordsCount: (count: number) => string;
  };
}
