import Image from 'next/image'
import { styled } from '../stitches.config'
import useWindowSize from '../modules/windowSize'

const Hero = styled('div', {
  maxWidth: '2560px',
  variants: {
    variant: {
      mobile: {
        height: '100vh',
      },
      desktop: {
        height: 621,
      },
    },
  },
})

const ImageBox = styled('div', {
  position: 'relative',
  zIndex: '0',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  width: '100vw',
  maxWidth: '2560px',
  display: 'flex',
  alignItems: 'center',
  overflowX: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: '90%',
  zIndex: 2,

  variants: {
    variant: {
      mobile: {
        height: '100vh',
        marginLeft: 21,
      },
      desktop: {
        height: 621,
        marginLeft: '5%',
      },
    },
  },
})

const Title = styled('h1', {
  marginTop: 40,
  marginBottom: 60,
  fontWeight: '$bold',

  variants: {
    variant: {
      mobile: {
        fontSize: '$6',
        lineHeight: 1.4,
        maxWidth: 400,
      },
      desktop: {
        fontSize: '$12',
        maxWidth: 500,
      },
    },
  },
})

const SubTitle = styled('h2', {
  fontWeight: '$semi',
  marginBottom: 8,
  variants: {
    variant: {
      mobile: {
        fontSize: '$4',
        lineHeight: 1.4,
        maxWidth: 400,
      },
      desktop: {
        fontSize: '$7',
        maxWidth: 700,
      },
    },
  },
})

const Description = styled('p', {
  fontWeight: '$reg',
  variants: {
    variant: {
      mobile: {
        fontSize: '$3',
        lineHeight: 1.4,
        maxWidth: 400,
      },
      desktop: {
        fontSize: '$3',
        maxWidth: 500,
        lineHeight: 1.34,
      },
    },
  },
})

const KursCatHero = () => {
  const windowSize = useWindowSize()
  return (
    <Hero>
      <ImageBox
        variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
        css={{
          '&::before': {
            linearGradient: `0deg, transparent 10%, black 80%`,
          },
        }}>
        <Image
          src={
            windowSize.width >= 750
              ? '/index-hero.webp'
              : '/index-hero-mob.webp'
          }
          alt=''
          layout='fill'
          objectFit='cover'
          priority
        />
        <Content variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            Kurs kategorier
          </Title>
          <SubTitle  variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>Vi erbjuder kurser, event och distansutbildningar</SubTitle>
          <Description  variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            inom områdena
            text, copywriting, foto, grafisk design, publicering, webb,
            UX-design, video och audio.
          </Description>
        </Content>
      </ImageBox>
    </Hero>
  )
}

export default KursCatHero
