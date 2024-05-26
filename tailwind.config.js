/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        "Yellow": "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "light-moderate-cyan": "hsla(168, 44%, 70%, 1)",
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "dark-cyan": "hsla(168, 46%, 31%, 1)",
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        "white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        'barlow': ["Barlow", "sans-serif"],
        'fraunces': ["Fraunces","serif"]
      }
    },
  },
  plugins: [],
}

