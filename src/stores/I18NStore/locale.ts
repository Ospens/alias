import { Language } from "stores/SettingsStore";
import { Locale } from "./I18NStore.types";

export const LOCALES: Record<Language, Locale> = {
  en: {
    routing: {
      homeTitle: "Teams",
    },
  },
  ru: {
    routing: {
      homeTitle: "Список команд",
    },
  },
};
