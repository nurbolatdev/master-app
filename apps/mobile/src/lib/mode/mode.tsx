import { createContext, type ReactNode, useContext, useMemo, useState } from "react";

/** One app, two roles (ADR-008). Saved per account after sign-in (F0-5); in memory for now. */
export type Mode = "client" | "specialist";

export function otherMode(mode: Mode): Mode {
  return mode === "client" ? "specialist" : "client";
}

/** Root of the tabs of a mode: /client/... and /specialist/... */
export function homeOf(mode: Mode): "/client" | "/specialist" {
  return mode === "client" ? "/client" : "/specialist";
}

interface ModeState {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeState | null>(null);

export function ModeProvider({ children, initial = "client" }: { children: ReactNode; initial?: Mode }) {
  const [mode, setMode] = useState<Mode>(initial);
  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode(): ModeState {
  const state = useContext(ModeContext);
  if (state === null) throw new Error("useMode must be used inside ModeProvider");
  return state;
}
