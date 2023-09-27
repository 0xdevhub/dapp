import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export enum CONTAINER_SIZES {
  fallback = '100%'
}

export const colors = {
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
      paddingLeft: '16px'
    }
  }

  addUtilities(utility)
})

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  corePlugins: {
    container: false
  },
  plugins: [container],
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
