import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export enum CONTAINER_SIZES {
  fallback = '100%',
  md = '768px',
  lg = '1200px',
  '2xl' = '1400px'
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
      },

      '@screen 2xl': {
        maxWidth: CONTAINER_SIZES['2xl']
      }
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
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      backgroundColor: {
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
        }
      },
      colors: {
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
        }
      }
    }
  }
}

export default config
