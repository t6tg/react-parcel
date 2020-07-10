module.exports = {
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9],
    },
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
        "md:dark": {
          raw: "(min-width: 768px) and (prefers-color-scheme: dark)",
        },
      },
    },
  },
  variants: {
    aspectRatio: ["responsive"],
    textDecoration: ["responsive", "hover", "group-hover"],
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
  purge: [
    "./src/**/*.html",
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
};
