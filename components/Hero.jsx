import Image from 'next/image'
import Link from 'next/link'
import { styled } from '../stitches.config'
import React from 'react'

const ImageBox = styled('div', {
  position: 'absolute',
  zIndex: '-1',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  width: '100vw',
  display: 'flex',
  alignItems: 'center',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },

  variants: {
    variant: {
      mobile: {
        height: '100vh',
        paddingLeft: 21,
      },
      desktop: {
        height: 621,
        paddingLeft: 226,
      },
    },
  },
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  square: '100%',
  zIndex: '2',

  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const LogoIcon = styled('div', {
  variants: {
    variant: {
      mobile: {
        square: 54,
      },
      desktop: {
        square: 74,
      },
    },
  },
})

const Title = styled('h1', {
  position: 'relative',
  zIndex: '500',
  color: 'red',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const Description = styled('p', {
  position: 'relative',
  zIndex: '500',
  color: 'red',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const LinkContainer = styled('div', {
  display: 'flex',

  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 20,
      },
      desktop: {
        columnGap: 29,
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
  },
})

const Button = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$white',
  backgroundColor: '$blueDark',
  pillShape: true,
  fontSize: '$4',
  fontWeight: '$semi',
  textDecoration: 'none',

  variants: {
    variant: {
      mobile: {
        padding: '15px 32px',
      },
      desktop: {
        padding: '20px 35px',
      },
    },
  },
})
const MostPopular = styled('a', {
  color: '$white',
  variants: {
    variant: {
      mobile: {
        padding: '15px 32px',
      },
      desktop: {
        padding: '20px 35px',
      },
    },
  },
})

const Hero = () => {
  return (
    <>
      <ImageBox
        variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
        css={{
          '&::before': {
            linearGradient: `0deg, transparent 10%, black 80%`,
          },
        }}>
        <Image src='/wideAi.webp' alt='' layout='fill' objectFit='cover' />
        <Content>
          <LogoIcon>
            <Image src='/wideAi.webp' alt='' width={75} height={75} />
          </LogoIcon>
          <Description>
            Sveriges mest erfarna kursutbildare inom Adobe Creative Suit.
          </Description>
          <LinkContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Link href={`/kurs/popular`} passHref>
              <Button variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                Hitta din kurs
              </Button>
            </Link>
            <Link href={`/kurs/popular`} passHref>
              <MostPopular>Mest populära kurser 2022</MostPopular>
            </Link>
          </LinkContainer>
        </Content>
      </ImageBox>
    </>
  )
}

export default Hero
