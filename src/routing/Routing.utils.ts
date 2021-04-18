import { colors, fonts } from "themes";
import { StackNavigationOptions } from "@react-navigation/stack";
import { Locale } from "stores/I18NStore";

const defaultScreenOptions: StackNavigationOptions = {
  title: "",
  headerLeft: () => null,
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: colors.background,
  },
  headerTitleStyle: {
    ...fonts.types.bold,
    color: colors.headerText,
    fontSize: 24,
    textAlign: "center",
  },
};

export const getScreenOptions = (locale: Locale) => ({
  HOME: {
    ...defaultScreenOptions,
    title: locale.routing.homeTitle,
  },
  SETTINGS: {
    ...defaultScreenOptions,
    title: "Настройки",
  },
  WORD_SETS: {
    ...defaultScreenOptions,
    title: "Выбор набора слов",
  },
  GAME_ROUTING: {
    headerShown: false,
    gestureEnabled: false,
  },
  OVERVIEW: {
    ...defaultScreenOptions,
    title: "Подготовка",
  },
  ROUND: {
    headerShown: false,
    gestureEnabled: false,
  },
  ROUND_RESULTS: {
    ...defaultScreenOptions,
    title: "Результаты",
    gestureEnabled: false,
  },
});
