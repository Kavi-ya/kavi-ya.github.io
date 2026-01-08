/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Next.js uses the 'app' directory, not index.html
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Keep this if you are putting components inside a src folder
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#468585',
        secondary: '#9CDBA6',
      },
    },
  },
  plugins: [],
}