import React from 'react'
import { styled } from '../stitches.config'

const TestimonialsContainer = styled('div', {
  width: '100vw',
  backgroundColor: '$blueBg',
  paddingTop: 85,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const TestimonialsInnerContainer = styled('div', {
  maxWidth: '2560px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const Title = styled('p', {
  color: '$blueLight',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const CardsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginY: 123,
  columnGap: 110,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const TestimonialCard = styled('div', {
  display: 'flex',
  width: 380,
  height: 482,
  linearGradient: '-45deg, $blue 0%, $pink 80%',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
    gradDir: {
      bluePink: {
        linearGradient: '-45deg, $pink 0%, $blue 100%',
      },
      pinkBlue: {
        linearGradient: '-45deg, $blue -30%, $pink 100%',
      },
    },
  },
})

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsInnerContainer>
        <Title>Några citat från tidiage kursdeltagare</Title>
        <CardsContainer>
          <TestimonialCard gradDir="bluePink" ></TestimonialCard>
          <TestimonialCard gradDir="pinkBlue" ></TestimonialCard>
          <TestimonialCard gradDir="bluePink" ></TestimonialCard>
        </CardsContainer>
      </TestimonialsInnerContainer>
    </TestimonialsContainer>
  )
}

export default Testimonials
