import Link from 'next/link'
import Image from 'next/image'
import { styled } from '../stitches.config'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useWindowSize from '../modules/windowSize'

const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      mobile: {
        width: 319,
        height: 374,
        paddingX: 25,
        paddingTop: 25,
        paddingBottom: 33,
      },

      desktop: {
        width: 530,
        height: 618,
        paddingX: 34,
        paddingTop: 34,
        paddingBottom: 55,
      },
    },
  },
})

const LogoIcon = styled('div', {
  square: 54,
  alignSelf: 'flex-end',
  marginBottom: 'auto',
})

const Divider = styled('div', {
  width: '78px',
  height: '4px',
  backgroundColor: '$white',
})

const Title = styled('h2', {
  fontSize: '$2',
  fontWeight: '$semi',
  color: '$white',
  marginTop: 21,
})

const Description = styled('p', {
  fontSize: '$1',
  color: '$white',
  marginTop: 16,
  marginRight: 38,
})

const ImageBox = styled('div', {
  position: 'absolute',
  zIndex: '-1',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,

  variants: {
    variant: {
      mobile: {
        width: 319,
        height: 374,
      },
      desktop: {
        width: 530,
        height: 618,
      },
    },
  },
})

const Card = ({ data }) => {
  const windowSize = useWindowSize()
  const router = useRouter()
  const {
    slug,
    gradientColor,
    isWide,
    image,
    wideImage,
    name,
    logo,
    description,
  } = data
  switch (router.route) {
    case '/kurser/[slug]':
      return (
        <>
          <Link href={`/kurs/${slug}`} passHref>
            <CardContent
              variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
              css={{
                linearGradient: `0deg, ${gradientColor?.color.hex} 10%, transparent 80%`,
                width:
                  isWide === true && windowSize.width >= 1140
                    ? 1140
                    : isWide !== true && windowSize.width >= 1140
                    ? 530
                    : windowSize.width <= 1139 && windowSize.width >= 750
                    ? 530
                    : 319,
                height: windowSize.width >= 750 ? 618 : 374,
              }}>
              <ImageBox>
                <Image
                  src={
                    isWide && windowSize.width >= 1140
                      ? wideImage?.url
                      : image?.url
                  }
                  alt={name}
                  width={
                    isWide && windowSize.width >= 1140
                      ? 1140
                      : isWide !== true && windowSize.width >= 1140
                      ? 530
                      : windowSize.width <= 1139 && windowSize.width >= 750
                      ? 530
                      : 319
                  }
                  height={windowSize.width >= 750 ? 618 : 374}
                />
              </ImageBox>
              <LogoIcon>
                <Image
                  src={logo?.url ? logo?.url : '/batteri.svg'}
                  alt={name}
                  height={54}
                  width={54}
                />
              </LogoIcon>
              <Divider />
              <Title>{name}</Title>
              <Description>{description}</Description>
            </CardContent>
          </Link>
        </>
      )

    default:
      return (
        <>
          <Link href={`/kurser/${slug}`} passHref>
            <CardContent
              variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
              css={{
                linearGradient: `0deg, ${gradientColor?.color.hex} 10%, transparent 80%`,
                width:
                  isWide === true && windowSize.width >= 1140
                    ? 1140
                    : isWide !== true && windowSize.width >= 1140
                    ? 530
                    : windowSize.width <= 1139 && windowSize.width >= 750
                    ? 530
                    : 319,
                height: windowSize.width >= 750 ? 618 : 374,
              }}>
              <ImageBox>
                <Image
                  src={
                    isWide && windowSize.width >= 1140
                      ? wideImage?.url
                      : image?.url
                  }
                  alt={name}
                  width={
                    isWide && windowSize.width >= 1140
                      ? 1140
                      : isWide !== true && windowSize.width >= 1140
                      ? 530
                      : windowSize.width <= 1139 && windowSize.width >= 750
                      ? 530
                      : 319
                  }
                  height={windowSize.width >= 750 ? 618 : 374}
                />
              </ImageBox>
              <LogoIcon>
                <Image
                  src={logo?.url ? logo?.url : '/batteri.svg'}
                  alt={name}
                  height={54}
                  width={54}
                />
              </LogoIcon>
              <Divider />
              <Title>{name}</Title>
              <Description>{description}</Description>
            </CardContent>
          </Link>
        </>
      )
  }
}

export default Card
