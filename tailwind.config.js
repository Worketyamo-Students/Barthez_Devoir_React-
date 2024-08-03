/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary": "#952A2A",
        "dark": "#202020",
        "gray": "#404040CC"
      },

      padding: {
        "25": "6.25rem"
      },

      fontFamily: {
        "openSans": ["Open Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "source": ["Source Sans 3", "sans-serif"]
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}