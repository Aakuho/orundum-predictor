module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1337': '333px',
      },
      colors: {
        orundum: "#D41112",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-orundum", "text-orundum", "border-orundum"
  ],
};
