import { colors } from "themes";
import { StackNavigationOptions } from "@react-navigation/stack";

const defaultScreenOptions: StackNavigationOptions = {
  title: "",
  headerLeft: () => null,
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: colors.background,
  },
  headerTitleStyle: {
    fontWeight: "800",
    color: colors.headerText,
    fontSize: 24,
  },
};

const SCREEN_OPTIONS = {
  HOME: {
    ...defaultScreenOptions,
    title: "Список команд",
  },
  SETTINGS: {
    ...defaultScreenOptions,
    title: "Настройки",
  },
  WORD_SETS: {
    ...defaultScreenOptions,
    title: "Выбор набора слов",
  },
};

export { SCREEN_OPTIONS };
