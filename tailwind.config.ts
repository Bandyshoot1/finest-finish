import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3e0071",
        lighter: "#690099",
        dark: "#430035",
        darker: "#1f0029",
        cyan: {
          300: "#67e8f9", // Your cyan accent color
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(to right, #3e0071, #690099)",
      },
    },
  },
  plugins: [],
};
export default config;
