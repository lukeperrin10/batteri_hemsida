import { createStitches, globalCss, keyframes } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
      openSans: 'Open Sans',
      roboto: 'Roboto'
    },
    colors: {
      blackBg: '#232323',
      greyBg: '#343434',
      whiteBg: '#FAFCFF',
      blueBg: '#EBF3F6',
      lightGreyBg: '#F1F1F3',

      white: '#fff',
      black: '#000',

      blueLight: '#456691',
      blue: '#2A6BD2',
      blueDark: '#2866C9',
      blueLink: '#009DFF',

      pink: '#DD16E5',

      Id: '#FF1C5C',
      Ai: '#FF6F0B',
      Ps: '#00A5FE',
      Ae: '#000046',
    },
    fontSizes: {
      1: '12px',
      2: '16px',
      3: '18px',
      4: '20px',
      5: '22px',
      6: '24px',
      7: '26px',
      8: '30px',
      9: '32px',
      10: '34px',
      11: '36px',
      12: '42px',
    },
    fontWeights: {
      light: '300',
      reg: '400',
      semi: '600',
      bold: '700',
    },
  },
  media: {
    bp1: '(min-width: 360px)',
    bp2: '(min-width: 425px)',
    bp3: '(min-width: 750px)',
    bp4: '(min-width: 1000px)',
    bp5: '(min-width: 1140px)',
    bp6: '(min-width: 1160px)',
    bp7: '(min-width: 1440px)',
    bp8: '(min-width: 1515px)',
    bp9: '(min-width: 1920px)',
  },
  utils: {
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    dropShadow: (value) => ({
      filter: `drop-shadow(${value})`,
    }),
    square: (value) => ({
      width: value,
      height: value,
    }),
    pillShape: () => ({
      borderRadius: 90000,
    }),
  },
  conditions: {},
})

export const globalStyles = globalCss({
  '*, *::after, *::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    color: '$white',
    fontFamily: '$openSans',
    fontWeight: '$reg',
    
  },

  'body': {
    overflowX: 'hidden',
  }

})
