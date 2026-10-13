/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'lg:grid-cols-10',
    'lg:grid-cols-12',
    'lg:grid-rows-3',
    'max-lg:grid-cols-2',
    'col-span-2',
    'col-span-3',
    'lg:col-span-2',
    'lg:col-span-3',
    'lg:row-span-2',
    'lg:row-span-3',
    'lg:row-start-2',
    'lg:col-start-3',
    'lg:col-start-4',
    'lg:col-start-6',
    'lg:col-start-9',
    'max-lg:col-span-2',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '10': 'repeat(10, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '3': 'repeat(3, minmax(0, 1fr))',
      },
      colors: {
        brand: {
          dark: "#0B1012",
          surface: "#12191C",
          surfaceHover: "#1B2429",
          accent: "#FF543E",
          accentHover: "#E6432E",
          light: "#FDFDFD",
          muted: "#9AA0A4",
          border: "rgba(255, 255, 255, 0.1)",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
