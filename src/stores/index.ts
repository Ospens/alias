import React from "react";
import RootStore from "./RootStore/Root.store";

export const stores = Object.freeze({
  rootStore: new RootStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;

export const useStores = () => React.useContext(storesContext);

export const useStore = <T extends keyof typeof stores>(
  store: T
): typeof stores[T] => React.useContext(storesContext)[store];
