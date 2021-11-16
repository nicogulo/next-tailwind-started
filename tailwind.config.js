module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      base: {
        "dark-1": "#F3F2F4",
        "dark-2": "#E6E6E8",
        "dark-3": "#CECDD1",
        "dark-4": "#B5B4BB",
        "dark-5": "#84818D",
        "dark-6": "#534F5F",
        "dark-7": "#09041B",
        "light-1": "rgba(255, 255, 255, 0.05)",
        "light-2": "rgba(255, 255, 255, 0.1)",
        "light-3": "rgba(255, 255, 255, 0.2)",
        "light-4": "rgba(255, 255, 255, 0.3)",
        "light-5": "rgba(255, 255, 255, 0.5)",
        "light-6": "rgba(255, 255, 255, 0.7)",
        "light-7": "#ffffff",
      },

      green: "#79B34C",
      red: "#E53935",
      blue: "#438BFB",
      yellow: "#FFBB55",
      orange: "#FC8461",
      purple: "#8542F5",
      pink: "#F87481",
      aqua: "#20C4CB",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
