import type { Locale } from "stores/I18NStore";

export const ruLocale: Locale = {
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
};
