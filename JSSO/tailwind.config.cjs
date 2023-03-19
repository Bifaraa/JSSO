module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        Sono: ["sono", "sans-serif"],
        IBM: ["IBM Plex Mono", "monospace"],
      },
      opacity: {
        5: ".5",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
