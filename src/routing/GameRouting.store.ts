import React from "react";
import GameStore from "stores/GameStore";
import { stores } from "stores";

// TODO: GameStore creating twice. The first as default value and the second time as provider value. Feature?
const gameStoreContext = React.createContext(new GameStore(stores.rootStore));

gameStoreContext.displayName = "GameStoreContext";

export const GameStoreProvider = gameStoreContext.Provider;

export const useGameStore = (): GameStore => React.useContext(gameStoreContext);
