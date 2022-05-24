import { createStitches, globalCss } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      blackBg: "#232323",
      whiteBg: "##FAFCFF",
      blueBg: "#EBF3F6",

      white: "#fff",
      black: "#000",
      
      blueLight: "#456691",
      blue: "#2A6BD2",
      blueDark: "#2866C9",
      blueLink: "##009DFF",

      pink: "#DD16E5",

    },
    fontSizes: {
      1: '16px',
      2: '18px',
      3: '20px',
    },
  },
})

export const globalStyles = globalCss({
  '*, *::after, *::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    color: '$black',
    backgroundColor: "$whiteBg"
  },
})
