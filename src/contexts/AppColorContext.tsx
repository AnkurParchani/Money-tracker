"use client";
import { createContext, useState, useEffect, ReactNode, useContext } from "react";

export enum AVAILABLE_COLORS {
  RED = "red",
  GREEN = "green",
  YELLOW = "yellow",
  PINK = "pink",
  BLUE = "blue",
  PURPLE = "purple",
  VIOLET = "violet",
  ORANGE = "orange",
  GRAY = "gray",
  INDIGO = "indigo",
  AMBER = "amber",
  CYAN = "cyan",
  TEAL = "teal",
  LIME = "lime",
  SKY = "sky",
  FUCHSIA = "fuchsia",
  ROSE = "rose",
  SLATE = "slate",
  ZINC = "zinc",
  STONE = "stone",
}

type AppColorContextType = {
  appColor: AVAILABLE_COLORS;
  toggleAppColor: (newColor: AVAILABLE_COLORS) => void;
};

export const AppColorContext = createContext<AppColorContextType | undefined>(undefined);

export function AppColorProvider({ children }: { children: ReactNode }) {
  const [appColor, setAppColor] = useState<AVAILABLE_COLORS>(AVAILABLE_COLORS.GREEN);

  useEffect(() => {
    async function fetchTheme() {
      try {
        const res = await fetch(`${process.env.SERVER_URL}/api/theme-selector`);
        const data = await res.json();
        setAppColor(data.theme || AVAILABLE_COLORS.GREEN);
      } catch (error) {
        console.error("Failed to fetch theme:", error);
      }
    }

    fetchTheme();
  }, []);

  const toggleAppColor = (newColor: AVAILABLE_COLORS) => {
    setAppColor(newColor as AVAILABLE_COLORS);
  };

  return (
    <AppColorContext.Provider value={{ appColor, toggleAppColor }}>
      {children}
    </AppColorContext.Provider>
  );
}

export function useAppColor() {
  const context = useContext(AppColorContext);
  if (context === undefined) {
    throw new Error("useAppColor must be used within an AppColorProvider");
  }
  return context;
}