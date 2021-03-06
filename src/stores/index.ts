import React from "react";
import RootStore from "./RootStore/RootStore";

export const stores = Object.freeze({
  rootStore: RootStore,
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;

export const useStores = () => React.useContext(storesContext);

export const useStore = <T extends keyof typeof stores>(store: T): typeof stores[T] =>
  React.useContext(storesContext)[store];

export const useRootStore = () => React.useContext(storesContext).rootStore;
export const useLocale = () => useRootStore().i18NStore.locale;
