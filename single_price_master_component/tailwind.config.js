/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                customCyan: "#00FFFF",
                customBrightYellow: "#FFFF00",
                customLightGray: "#F5F5F5",
                customGrayishBlue: "#A9A9A9",
                boxOne: "#FFF",
                boxTwo: "#29b3b0",
                boxThree: "#45d1cfe0",
                accentMain: "#bfde33",
            },
        },
    },
    plugins: [],
};
