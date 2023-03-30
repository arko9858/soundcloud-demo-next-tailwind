/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        header: "46px",
        "nav-menu-item": "42px",
      },

      width: {
        lg: "1240px",
      },
      colors: {
        "search-bg": "#e5e5e5",
        "gray-1": "#333",
        "gray-2": "#999",
        "gray-3": "#f2f2f2",
        "gray-4": "#ccc",
        "gray-5": "#eee",
      },
      spacing: {
        "22px": "22px",
        "300px": "300px",
      },
      fontSize: {
        xxs: "11px",
      },
    },
    fontFamily: {
      // sans: ["Interstate", '"Lucida Grande"', "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
