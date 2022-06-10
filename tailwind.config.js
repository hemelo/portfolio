const colors = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        "primary": colors.purple, 
        "secondary": colors.pink
      },
      fontFamily: {
        ...fontFamily,
        "sans": [
          "'Montserrat'",
          "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "'Roboto'", "'Oxygen'",
          "'Ubuntu'", "'Cantarell'", "'Fira Sans'", "'Droid Sans'", "'Helvetica Neue'",
          "sans-serif",
        ],
      },
    }
  },
  plugins: [

  ],
  darkMode: "class",
}
