import { Language } from "stores/SettingsStore";
import { Locale } from "./I18NStore.types";

export const LOCALES: Record<Language, Locale> = {
  // en: {
  //   routing: {
  //     homeTitle: "Teams",
  //     settingsTitle: "Teams",
  //     wordSetsTitle: "Teams",
  //     gameTitle: "Teams",
  //     roundResultsTitle: "Teams",
  //   },
  // },
  ru: {
    routing: {
      homeTitle: "Список команд",
      settingsTitle: "Настройки",
      wordSetsTitle: "Выбор набора слов",
      overviewTitle: "Подготовка",
      roundResultsTitle: "Результаты",
    },
  },
};
