/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          moving: {
            "0%": { transform: "translate(0%, 0%)" },
            "25%": { transform: "translate(100%, 0%)" },
            "50%": { transform: "translate(100%, 100%)" },
            "75%": { transform: "translate(0%, 100%)" },
            "100%": { transform: "translate(0%, 0%)" },
          },
        },
        animation: {
          "moving-border": "moving 4s linear infinite",
        },
      },
    },
    plugins: [],
  };
  