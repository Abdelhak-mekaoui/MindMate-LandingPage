/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f8f8ff",
        secondary: "#625f70",
        tertiary: "#7A3BB5",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 30px 100px -15px #211e35",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/brain14.png')",
      // },
      backgroundSize: {
        'cover': 'cover',
      },
      backgroundPosition: {
        'center': 'center',
      },
    },
  },
  plugins: [],
};
