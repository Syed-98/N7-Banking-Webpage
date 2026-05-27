import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        banking: {
          dark: "#050D1A",
          card: "#0D1F35",
          blue: "#1E6FFF",
          border: "#1A2E4A",
          muted: "#8899AA",
          cta: "#0A1628",
          light: "#F8FAFF",
          "muted-light": "#556070",
          thumb: "#1E3A6E",
          cyan: "#00C2FF",
        },
      },
    },
  },
};

export default config;
