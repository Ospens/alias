import { createContext, useContext } from "react";
import GameStore from "stores/GameStore";

const gameStoreContext = createContext<GameStore | undefined>(undefined);

gameStoreContext.displayName = "GameStoreContext";

export const GameStoreProvider = gameStoreContext.Provider;

// Can be used only inside GameRouting components and its children
export const useGameStore = () => {
  const hook = useContext(gameStoreContext);

  if (hook === undefined) {
    throw new Error("GameStoreProvider not found");
  }

  return hook;
};
