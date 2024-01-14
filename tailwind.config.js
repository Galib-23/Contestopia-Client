/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--twc-background)',
        text: 'var(--twc-text)',
      },
    },
  },
  plugins: [require("daisyui")],
}

