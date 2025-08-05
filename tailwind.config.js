// tailwind.config.ts
import aspectRatio from "@tailwindcss/aspect-ratio";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [aspectRatio],
};

export default config;
