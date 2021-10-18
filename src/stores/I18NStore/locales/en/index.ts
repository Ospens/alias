import type { Locale } from "stores/I18NStore";
import { pluralize } from "./pluralize";

export { wordSets as enWordSets } from "./wordSets";

export const enLocale: Locale = {
  routing: {
    homeTitle: "Teams",
    settingsTitle: "Settings",
    wordSetsTitle: "Select word sets",
    overviewTitle: "Overview",
    roundResultsTitle: "Results",
  },
  teamNames: [
    "Team #1",
    "Team #2",
    "Team #3",
    "Team #4",
    "Team #5",
    "Team #6",
    "Team #7",
    "Team #8",
    "Team #9",
    "Team #10",
  ],
  actions: {
    next: "Next",
    play: "Play",
    back: "Back",
    guess: "Guess",
    skip: "Skip",
    exit: "Exit",
    continue: "Continue",
    save: "Save",
    menu: "Menu",
  },
  settings: {
    penaltyForSkip: "Take away points for not guessed words",
    pointsForWin: "Points for win",
    roundDuration: "Round duration",
    languageOfWords: "Language of words",
    languageOfApp: "Language of app",
  },
  overview: {
    winner: (teamName) => `Winner is "${teamName}"`,
    nextTeam: (teamName) => `Next team\n"${teamName}"`,
  },
  wordSets: {
    wordsCount: (count) => pluralize(count, "word"),
  },
};
