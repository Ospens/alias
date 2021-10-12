import { Language } from "stores/SettingsStore";
import type { Locale } from "stores/I18NStore";
import { enLocale } from "./en";
import { ruLocale } from "./ru";

export const LOCALES: Record<Language, Locale> = {
  en: enLocale,
  ru: ruLocale,
};
