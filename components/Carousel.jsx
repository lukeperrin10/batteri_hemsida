import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

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

const Embla = styled('div', {
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  variants: {
    variant: {
      mobile: {
        width: '100vw',
      },
      desktop: {
        maxWidth: '1560px',
      },
    },
  },
})

const EmblaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    variant: {
      mobile: {
        // overflow: 'hidden',
        width: '100vw',
      },
      desktop: {
        maxWidth: '1560px',
      },
    },
  },
})

const EmblaSlide = styled('div', {
  display: 'flex',
  position: 'relative',
  linearGradient: '-45deg, $blue 0%, $pink 80%',
  variants: {
    variant: {
      smallMobile: {
        marginX: '4%',
        flex: '0 0 291px',
        height: 371,
      },
      mobile: {
        marginX: '4%',
        flex: '0 0 330px',
        height: 371,
      },
      desktop: {
        marginX: 55,
        flex: '0 0 380px',
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

const Carousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  })

  return (
    <TestimonialsContainer>
      <Embla
        variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
        ref={viewportRef}
        >
        <EmblaContainer
          variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <EmblaSlide
            gradDir='bluePink'
            variant={{ '@initial': 'smallMobile', '@bp2': 'mobile', '@bp3': 'desktop' }}>
            Slide 1
          </EmblaSlide>
          <EmblaSlide
            gradDir='pinkBlue'
            variant={{ '@initial': 'smallMobile', '@bp2': 'mobile', '@bp3': 'desktop' }}>
            Slide 2
          </EmblaSlide>
          <EmblaSlide
            gradDir='bluePink'
            variant={{ '@initial': 'smallMobile', '@bp2': 'mobile', '@bp3': 'desktop' }}>
            Slide 3
          </EmblaSlide>
        </EmblaContainer>
      </Embla>
    </TestimonialsContainer>
  )
}

export default Carousel
