/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "820px" },
      sm: { max: "640px" },
    },
    extend: {
      colors: {
        neutral_300: "hsl(252, 6%, 83%)",
        neutral_500: "hsl(245, 15%, 58%)",
        neutral_700: "hsl(245, 19%, 35%)",
        neutral_900: "hsl(248, 70%, 10%)",
        orange_500: "hsl(7, 88%, 67%)",
        orange_700: "hsl(7, 71%, 60%)",
      },
      fontFamily: {
        Inconsolata: ["Inconsolata", "serif"],
      },
      backgroundImage: {
        background_desktop: "url(assets/images/background-desktop.png)",
        pattern_lines: "url(assets/images/pattern-lines.svg)",
        pattern_ticket: "url(assets/images/pattern-ticket.svg)",
      },
    },
  },
  plugins: [],
};
