import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoreKey } from "./AsyncStorage.types";

export const storeData = async (key: StoreKey, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

export const getData = async (key: StoreKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
