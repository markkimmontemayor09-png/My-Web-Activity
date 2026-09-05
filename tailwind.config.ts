import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ocean-deep': '#0C3B44',
        ocean: '#146B79',
        'ocean-light': '#4A97A6',
        seafoam: '#EAF3F1',
        sand: '#C9AE82',
        'sand-light': '#E8DCC2',
        beacon: '#F2872E',
        ink: '#12242B',
      },
      fontFamily: {
        display: ['Georgia', '"Iowan Old Style"', '"Palatino Linotype"', 'serif'],
        body: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
