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
  };
  teamNames: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
}
