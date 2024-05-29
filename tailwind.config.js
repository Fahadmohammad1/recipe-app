/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#FF9F66',
        'custom-secondary': '#002379',
        'custom-third': '#FF5F00',
        'custom-extra': '#FFFAE6',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [daisyui],
};
