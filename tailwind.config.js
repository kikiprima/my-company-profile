/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#FF5300",
        projectblack: "#191919",
        secondary: "#494949",
        herocolor1: "#A45C36",
        herocolor2: "#D8A66A",
        herocolor2: "#05716C",
        herocolor4: "#0E55A3"
      },
    },
  },
  plugins: [require("daisyui")],
}
