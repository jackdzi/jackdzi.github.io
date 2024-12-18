module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          dark0_hard: '#1d2021',
          dark0: '#282828',
          dark0_soft: '#32302f',
          dark1: '#3c3836',
          dark2: '#504945',
          dark3: '#665c54',
          dark4: '#7c6f64',
          gray: '#928374',
          light0_hard: '#f9f5d7',
          light0: '#fbf1c7',
          light0_soft: '#f2e5bc',
          light1: '#ebdbb2',
          light2: '#d5c4a1',
          light3: '#bdae93',
          light4: '#a89984',
          bright_red: '#fb4934',
          bright_green: '#b8bb26',
          bright_yellow: '#fabd2f',
          bright_blue: '#83a598',
          bright_purple: '#d3869b',
          bright_aqua: '#8ec07c',
          bright_orange: '#fe8019',
          neutral_red: '#cc241d',
          neutral_green: '#98971a',
          neutral_yellow: '#d79921',
          neutral_blue: '#458588',
          neutral_purple: '#b16286',
          neutral_aqua: '#689d6a',
          neutral_orange: '#d65d0e',
          faded_red: '#9d0006',
          faded_green: '#79740e',
          faded_yellow: '#b57614',
          faded_blue: '#076678',
          faded_purple: '#8f3f71',
          faded_aqua: '#427b58',
          faded_orange: '#af3a03',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
      },
      lineHeight: {
        base: 1.5,
        tight: 1.1,
      },
      colors: {
        link: '#646cff',
        linkHover: '#535bf2',
        bodyBg: '#282828',
        bodyColor: 'rgba(255, 255, 255, 0.87)',
        buttonBg: '#1a1a1a',
        buttonBorderHover: '#646cff',
        focusRing: '-webkit-focus-ring-color',
        lightModeBodyBg: '#ffffff',
        lightModeBodyColor: '#213547',
        lightModeButtonBg: '#f9f9f9',
        lightModeLinkHover: '#747bff',
      },
      borderRadius: {
        button: '8px',
      },
      padding: {
        button: '0.6em 1.2em',
      },
      fontSize: {
        button: '1em',
        h1: '3.2em',
      },
      transitionProperty: {
        button: 'border-color',
      },
      transitionTimingFunction: {
        button: 'ease',
      },
      transitionDuration: {
        button: '250ms',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable preflight to use custom reset styles
  },
}
