import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import useWindowSize from '../modules/windowSize'

import { styled } from '../stitches.config'

const TestimonialsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
        marginBottom: 123,
      },
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
        justifyContent: 'center',
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
      smallDesktop: {
        marginX: '12%',
        flex: '0 0 380px',
        height: 482,
      },
      desktop: {
        marginX: 'auto',
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
  const windowSize = useWindowSize()
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  })

  return (
    <TestimonialsContainer>
      <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        Några citat från tidiage kursdeltagare
      </Title>
      <Embla
        variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
        ref={windowSize.width <= 1160 ? viewportRef : null}>
        <EmblaContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <EmblaSlide
            gradDir='bluePink'
            variant={{
              '@initial': 'smallMobile',
              '@bp2': 'mobile',
              '@bp3': 'smallDesktop',
              '@bp6': 'desktop',
            }}>
            Slide 1
          </EmblaSlide>
          <EmblaSlide
            gradDir='pinkBlue'
            variant={{
              '@initial': 'smallMobile',
              '@bp2': 'mobile',
              '@bp3': 'smallDesktop',
              '@bp6': 'desktop',
            }}>
            Slide 2
          </EmblaSlide>
          <EmblaSlide
            gradDir='bluePink'
            variant={{
              '@initial': 'smallMobile',
              '@bp2': 'mobile',
              '@bp3': 'smallDesktop',
              '@bp6': 'desktop',
            }}>
            Slide 3
          </EmblaSlide>
        </EmblaContainer>
      </Embla>
    </TestimonialsContainer>
  )
}

export default Carousel
