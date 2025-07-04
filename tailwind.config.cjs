const {resolveProjectPath} = require('wasp/dev')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [resolveProjectPath('./src/**/*.{js,jsx,ts,tsx}')],
  theme: {
    extend: {
      colors: {
        surface: {
          '100': 'var(--color-surface-100)',
          '200': 'var(--color-surface-200)',
          '300': 'var(--color-surface-300)',
          '400': 'var(--color-surface-400)',
          '500': 'var(--color-surface-500)',
          '600': 'var(--color-surface-600)',
          '700': 'var(--color-surface-700)',
          '800': 'var(--color-surface-800)',
          '900': 'var(--color-surface-900)'
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)'
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)'
        },
        info: {
          DEFAULT: 'var(--color-info)',
          content: 'var(--color-info-foreground)'
        },
        success: {
          DEFAULT: 'var(--color-success)',
          content: 'var(--color-success-foreground)'
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          content: 'var(--color-warning-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)'
        },
        background: 'var(--color-surface-700)',
        foreground: 'var(--color-surface-200)',
        card: {
          DEFAULT: 'var(--color-surface-800)',
          foreground: 'var(--color-surface-200)'
        },
        popover: {
          DEFAULT: 'var(--color-surface-800)',
          foreground: 'var(--color-surface-200)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)'
        },
        muted: {
          DEFAULT: 'var(--color-surface-600)',
          foreground: 'var(--color-surface-200)'
        },
        border: 'var(--color-surface-500)',
        input: 'var(--color-surface-500)',
        ring: 'var(--color-accent)',
        chart: {
          '1': 'var(--color-chart-shade-1)',
          '2': 'var(--color-chart-shade-2)',
          '3': 'var(--color-chart-shade-3)',
          '4': 'var(--color-chart-shade-4)',
          '5': 'var(--color-chart-shade-5)'
        },
        sidebar: {
          'DEFAULT': 'var(--color-surface-800)',
          'foreground': 'var(--color-surface-200)',
          'primary': 'var(--color-primary)',
          'primary-foreground': 'var(--color-primary-foreground)',
          'accent': 'var(--color-surface-500)',
          'accent-foreground': 'var(--color-surface-100)',
          'border': 'var(--color-surface-400)',
          'ring': 'var(--color-accent)'
        }
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}