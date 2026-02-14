"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type PlayerType = "reader" | "talker" | "visual" | "doer" | null;

interface PlayerContextValue {
  player: PlayerType;
  setPlayer: (type: PlayerType) => void;
}

const PlayerContext = createContext<PlayerContextValue>({
  player: null,
  setPlayer: () => {},
});

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [player, setPlayer] = useState<PlayerType>(null);
  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
