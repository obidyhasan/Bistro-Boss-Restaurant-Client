/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        inter: ["Inter", "serif"],
      },
      backgroundImage: () => ({
        "banner1-bg":
          "linear-gradient(to top, rgb(17, 17, 17, 0),rgba(17, 17, 17, 0)), url('./src/assets/home/chef-service.jpg')",
      }),
    },
  },
  plugins: [daisyui],
};
