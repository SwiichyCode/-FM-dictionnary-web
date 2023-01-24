import { create } from "zustand";
import { persist } from "zustand/middleware";

const items = [
  { font: "--font-inter" },
  { font: "--font-lora" },
  { font: "--font-inconsolata" },
];

const useFontStore = create(
  persist(
    (set) => ({
      font: "--font-inter",
      setFont: (font) => {
        set((state) => {
          localStorage.setItem("font", font);
          return { font: font };
        });
      },
      items: items,
    }),
    {
      name: "font-store",
      getStorage: () => localStorage,
    }
  )
);

export default useFontStore;
