/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["gilroy","sans-serif"],
      },
      colors: {
        primaryWhite: '#EDF1F3'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        titreHero: 'calc(25px + 50 * (100vw - 320px)/1080)',
        titreHeroH1: 'calc(12px + 1 * (100vw - 320px)/1080)',
      },
      letterSpacing: {
        widTitre: 'calc(2px + 1 * (100vw - 320px)/1080)',
      },
      spacing: {
        '128': '32rem',
        desktop: '100px',
        mobile:'10px',
        textHero: 'calc(0px - 15 * (100vw - 320px)/1080)'
      },
      animation: {
        fade:'fade 0.4s ease-in-out',
        slideDown: 'slideDown 1s ease-in-out',
      },
      Keyframes: {
        fade: {
          "0": { scale: 0, opacity: 0},
          "100%" : { scale: 1, opacity: 1},
        },
        slideDown: {
          "0%": { transform: "translateY(-70px) ", opacity: 0},
          "100%": { transform: "translateY(0)", opacity: 1}
        },
      },
    },
  },
  plugins: [],
}
