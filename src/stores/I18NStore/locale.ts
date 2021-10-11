import { Language } from "stores/SettingsStore";
import { Locale } from "./I18NStore.types";

export const LOCALES: Record<Language, Locale> = {
  en: {
    routing: {
      homeTitle: "Teams",
      settingsTitle: "Settings",
      wordSetsTitle: "Word sets",
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
  },
  ru: {
    routing: {
      homeTitle: "Список команд",
      settingsTitle: "Настройки",
      wordSetsTitle: "Выбор набора слов",
      overviewTitle: "Подготовка",
      roundResultsTitle: "Результаты",
    },
    teamNames: [
      "Ученые коты",
      "Верные псы",
      "Мудрые совы",
      "Глубоководные киты",
      "Свирепые медведи",
      "Зоркие орлы",
      "Всезнающие кроты",
      "Грациозные лани",
      "Быстрые зебры",
      "Тихие вараны",
    ],
    actions: {
      next: "Далее",
      play: "Играть",
      back: "Назад",
      guess: "Правильно",
      skip: "Пропустить",
      exit: "Выйти",
      continue: "Продолжить",
      save: "Сохранить",
      menu: "Меню",
    },
    settings: {
      penaltyForSkip: "Отнимать очки за не отгаданные слова",
      pointsForWin: "Очки для победы",
      roundDuration: "Длительность раунда",
    },
    overview: {
      winner: (teamName) => `Победила команда "${teamName}"`,
      nextTeam: (teamName) => `Очередь команды\n"${teamName}"`,
    },
  },
};
