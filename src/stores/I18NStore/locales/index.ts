import { Language } from "stores/SettingsStore";
import type { Locale, LocaleWordSet } from "stores/I18NStore";
import { enLocale, enWordSets } from "./en";
import { ruLocale, ruWordSets } from "./ru";

export const LOCALES: Record<Language, Locale> = {
  en: enLocale,
  ru: ruLocale,
};

export const LOCALES_WORD_SETS: Record<Language, LocaleWordSet[]> = {
  en: enWordSets,
  ru: ruWordSets,
};
