import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: '#000',
                    100: '#010103',
                    200: '#0e0e10',
                    300: '#171719',
                    500: '#3A3A49',
                    600: '#1A1A1A',
                },
                white: {
                    DEFAULT: '#FFF',
                    800: '#E4E4E6',
                    700: '#D6D9E9',
                    600: '#AFB0B6',
                    500: '#62646C',
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                terminal: "url('/assets/terminal.png')",
            },
        },
    },
    plugins: [],
};
export default config;
