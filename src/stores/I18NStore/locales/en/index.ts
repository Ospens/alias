import type { Locale } from "stores/I18NStore";
import booksImg from "assets/images/books.png";
import animalsImg from "assets/images/animals.png";
import baseAsset from "./baseAsset";
import animalsAsset from "./animalsAsset";
import { pluralize } from "./pluralize";

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
  },
  overview: {
    winner: (teamName) => `Winner is "${teamName}"`,
    nextTeam: (teamName) => `Next team\n"${teamName}"`,
  },
  wordSets: {
    list: [
      {
        id: 1,
        name: "Base asset",
        words: baseAsset,
        image: booksImg,
      },
      {
        id: 2,
        name: "Animals",
        words: animalsAsset,
        image: animalsImg,
      },
    ],
    wordsCount: (count) => pluralize(count, "word"),
  },
};
