import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export enum CONTAINER_SIZES {
  fallback = '100%',
  md = '768px',
  lg = '1280px'
}

export const colors = {
  ['dark-blue']: '#26405D',
  ['light-blue']: '#2E4B6A',
  ['dark-green']: '#668672',
  primary: {
    DEFAULT: '#FFDA5C',
    dark: '#EFA236'
  },
  secondary: {
    DEFAULT: '#43B4D3',
    dark: '#0084A8'
  },
  third: {
    100: '#425759',
    300: '#3A525C',
    500: '#2A435D'
  }
}

export const container = plugin(({ addUtilities }) => {
  const utility = {
    '.container': {
      width: CONTAINER_SIZES.fallback,
      margin: 'auto',
      paddingRight: '16px',
      paddingLeft: '16px',

      '@screen md': {
        maxWidth: CONTAINER_SIZES.md
      },

      '@screen lg': {
        maxWidth: CONTAINER_SIZES.lg
      }
    }
  }

  addUtilities(utility)
})

export const gradientBorder = plugin(({ addUtilities }) => {
  const utility = {
    '.gradient-mask': {
      content: '""',
      position: 'absolute',
      inset: '0',
      '-webkit-mask':
        'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
      mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
      '-webkit-mask-composite': 'xor',
      'mask-composite': 'exclude',
      'pointer-events': 'none'
    }
  }

  addUtilities(utility)
})

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  corePlugins: {
    container: false
  },
  plugins: [container, gradientBorder],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'left-to-right-width': {
          '0%': {
            width: '0',
            right: '100%'
          },
          '50%': {
            width: '50%'
          },
          '100%': {
            width: '0',
            right: '0'
          }
        },
        'rotate-gradient': {
          '0%': {
            backgroundPosition: '-50% 0%'
          },
          '50%': {
            backgroundPosition: '300% 150%'
          },
          '100%': {
            backgroundPosition: '-50% 0%'
          }
        }
      },
      animation: {
        'line-loading': 'left-to-right-width 1s linear infinite',
        'rotate-gradient': 'rotate-gradient 5s linear infinite'
      },
      backgroundSize: {
        '300': '300% 300%'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      dropShadow: {
        secondary: `0 1px 3px ${colors.secondary.dark}`
      },
      backgroundColor: {
        ...colors
      },
      colors: {
        ...colors
      }
    }
  }
}

export default config
