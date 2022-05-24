import React from 'react'
import { styled } from '../stitches.config'

const Button = styled('button', {
  borderRadius: '9999px',
  paddingX: '50px',
  paddingY: '10px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },

  variants: {
    size: {
      1: {
        fontSize: '$5',
      },
      2: {
        fontSize: '$10',
      }
    },
    variant: {
      blue: {
        backgroundColor: "$blue",
        color: "$white"
      },
      grey: {
        backgroundColor: "$greyBg",
        color: "$white"
      }
    }
  },

  defaultVariants: {
    variant: "blue",
    size: 1
  }
})

const Home = () => {
  return (
    <>
      <Button>Button</Button>
      <Button variant="grey" size="1" >Button</Button>
      <Button variant="blue" size={{ '@bp1': '2'}}>Button</Button>
    </>
  )
}

export default Home
