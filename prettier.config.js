export const plugins = ["prettier-plugin-tailwindcss"];
export const tailwindConfig = "./tailwind.config.js";
export const trailingComma = "none";
export const tabWidth = 2;
export const printWidth = 120;
export const semi = true;
export const singleQuote = false;
export const arrowParens = "always";
export const bracketSpacing = true;
export const endOfLine = "auto";
export const overrides = [
  {
    files: ".prettierrc",
    options: { parser: "json" },
  },
];
