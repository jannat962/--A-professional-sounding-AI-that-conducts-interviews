/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx}",   // ✅ for Next.js App Router
     "./page/**/*.{js,ts,jsx,tsx}", // ✅ if you still use Pages Router
     "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

