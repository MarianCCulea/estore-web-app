module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        amazon_orange: {
          DEFAULT: "#f69931",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-topg":
          "bg-[linear-gradient(90deg,_#002664_33.333%,_#FCD116_33.333%_66.666%,_#CE1126_66.666%)]",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
