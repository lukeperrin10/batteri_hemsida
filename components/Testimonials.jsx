import React from 'react'
import { styled } from '../stitches.config'

const TestimonialsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  variants: {
    variant: {
      mobile: {
        overflow: 'hidden',
        maxWidth: '100vw',
      },
      desktop: {
        maxWidth: '2560px',
      },
    },
  },
})
const Title = styled('p', {
  color: '$blueLight',
  fontWeight: '$semi',
  variants: {
    variant: {
      mobile: {
        fontSize: '$3',
      },
      desktop: {
        fontSize: '$7',
      },
    },
  },
})
const CardsContainer = styled('div', {
  display: 'flex',
  // position: 'absolute',
  justifyContent: 'center',
  marginY: 123,
  variants: {
    variant: {
      mobile: {
        columnGap: 27,
      },
      desktop: {
        columnGap: '4vw',
      },
    },
  },
})
const TestimonialCard = styled('div', {
  display: 'flex',
  linearGradient: '-45deg, $blue 0%, $pink 80%',
  variants: {
    variant: {
      mobile: {
        width: 291,
        height: 371,
      },
      desktop: {
        width: 380,
        height: 482,
      },
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
      <TestimonialsInnerContainer
        variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          Några citat från tidiage kursdeltagare
        </Title>
        <CardsContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <TestimonialCard
            gradDir='bluePink'
            variant={{
              '@initial': 'mobile',
              '@bp3': 'desktop',
            }}></TestimonialCard>
          <TestimonialCard
            gradDir='pinkBlue'
            variant={{
              '@initial': 'mobile',
              '@bp3': 'desktop',
            }}></TestimonialCard>
          <TestimonialCard
            gradDir='bluePink'
            variant={{
              '@initial': 'mobile',
              '@bp3': 'desktop',
            }}></TestimonialCard>
        </CardsContainer>
      </TestimonialsInnerContainer>
    </TestimonialsContainer>
  )
}

export default Testimonials
