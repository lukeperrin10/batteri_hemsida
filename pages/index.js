import React from 'react'
import { styled } from '../stitches.config'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',

  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
})

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '2rem',
  padding: '1rem 1.5rem',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
})

const Home = () => {
  return (
    <>
      <Text as='h1' size='1'>
        Some content
      </Text>
      <Button>Button</Button>
    </>
  )
}

export default Home
