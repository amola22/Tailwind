/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c0519",
        secondary: {
          100: "#e0f2fe",
          200: "##38bdf8",
        },
      },
      fontFamily: {
        bodyfont: ['Poppins']
      }
    },
  },
  plugins: [],
}

