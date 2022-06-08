import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import useWindowSize from '../modules/windowSize'

import { styled } from '../stitches.config'
import Image from 'next/image'

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
        marginTop: 46,
        marginBottom: 25,
      },
      desktop: {
        maxWidth: '1560px',
        justifyContent: 'center',
        marginY: 123,
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
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'center',
  linearGradient: '-45deg, $blue 0%, $pink 80%',
  variants: {
    variant: {
      smallMobile: {
        marginX: '4%',
        flex: '0 0 291px',
        height: 371,
        paddingBottom: 15,
        paddingX: 22,
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
        padding: 30,
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

const ImageContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '50%',
  justifyContent: 'center',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '50%',
  justifyContent: 'flex-start',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const Divider = styled('span', {
  border: 'solid white 2px',
  width: '33%',
  height: 0,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const Name = styled('h3', {
  marginY: 20,
  fontSize: '$3',
  fontWeight: '$semi',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const Review = styled('p', {
  fontSize: '$2',
  fontWeight: '$reg',
  lineHeight: 1.5,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const Carousel = () => {
  const windowSize = useWindowSize()
  const [viewportRef] = useEmblaCarousel({
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
            <ImageContainer>
              <Image src='/batteri.svg' alt='' width={201} height={47} />
            </ImageContainer>
            <ContentContainer>
              <Divider />
              <Name>Johan DePaoli, Art Director</Name>
              <Review>
                “Batteri har väl sammansatta utbildningar som ger inspiration i
                det dagliga arbetet. Lärarna kommer från arbetslivet och har
                stött på samma problem som jag själv”
              </Review>
            </ContentContainer>
          </EmblaSlide>
          <EmblaSlide
            gradDir='pinkBlue'
            variant={{
              '@initial': 'smallMobile',
              '@bp2': 'mobile',
              '@bp3': 'smallDesktop',
              '@bp6': 'desktop',
            }}>
            <ImageContainer>
              <Image src='/batteri.svg' alt='' width={201} height={47} />
            </ImageContainer>
            <ContentContainer>
              <Divider />
              <Name>Karin Ekh </Name>
              <Review>
              “Batteri har gedigen utbildning som ger färdigheter både i teorin och i praktiken. Dessutom är kursens innehåll kopplat till verkligheten med lösningar som kommer till användning i det dagliga arbetet.”
              </Review>
            </ContentContainer>
          </EmblaSlide>
          <EmblaSlide
            gradDir='bluePink'
            variant={{
              '@initial': 'smallMobile',
              '@bp2': 'mobile',
              '@bp3': 'smallDesktop',
              '@bp6': 'desktop',
            }}>
            <ImageContainer>
              <Image src='/batteri.svg' alt='' width={201} height={47} />
            </ImageContainer>
            <ContentContainer>
              <Divider />
              <Name>Johan DePaoli, Art Director</Name>
              <Review>
                “Batteri har väl sammansatta utbildningar som ger inspiration i
                det dagliga arbetet. Lärarna kommer från arbetslivet och har
                stött på samma problem som jag själv”
              </Review>
            </ContentContainer>
          </EmblaSlide>
        </EmblaContainer>
      </Embla>
    </TestimonialsContainer>
  )
}

export default Carousel
