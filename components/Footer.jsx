import React from 'react'
import Image from 'next/image'

import { styled } from '../stitches.config'

const FooterContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  backgroundColor: '$greyBg',
  alignItems: 'center',
  paddingTop: 94,
  paddingBottom: 40,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  justifyContent: 'center',
  columnGap: 250,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const AddressContainer = styled('div', {
  width: 260,
  display: 'flex',
  flexDirection: 'column',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const ImageContainer = styled('div', {
  position: 'relative',
  width: 196,
  height: 49,
  marginLeft: -10,
  marginBottom: 20,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const Email = styled('a', {
  fontWeight: '$reg',
  color: '$blueLink',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const AktuelltContainer = styled('div', {
  width: 260,
  display: 'flex',
  flexDirection: 'column',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const NewsLetterContainer = styled('div', {
  width: 260,
  display: 'flex',
  flexDirection: 'column',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const Title = styled('h4', {
  fontSize: '$8',
  fontWeight: '$bold',
  marginBottom: 20,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const SubTitle = styled('p', {
  fontWeight: '$bold',
  fontSize: '$3',
  marginBottom: 7,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const Description = styled('p', {
  fontWeight: '$reg',
  fontSize: '$2',
  lineHeight: 1.7,
  marginBottom: 3,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const Label = styled('Label', {
  fontSize: '$1',
  marginLeft: 0,
  marginTop: 10,
  marginBottom: 5,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const InputBar = styled('input', {
  pillShape: true,
  border: 'none',
  width: 260,
  height: 45,
  color: '$black',
  fontSize: '$4',
  paddingLeft: 10,

  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const InputBtn = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '$semi',
  textTransform: 'uppercase',
  backgroundColor: '$blue',
  marginTop: 20,
  width: 122,
  height: 45,
  pillShape: true,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const BuiltBy = styled('p', {
  marginTop: 30,
  fontSize: '$1',
  letterSpacing: 1.2,
  fontWeight: '$light',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const CopyRight = styled('p', {
  marginTop: 20,
  letterSpacing: 1.1,
  fontSize: '$1',
  fontWeight: '$light',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const Footer = () => {
  return (
    <FooterContainer>
      <MainContainer>
        <AddressContainer>
          <ImageContainer>
            <Image src='/batteri.svg' layout='fill' alt='' />
          </ImageContainer>
          <SubTitle>Södra vägen 24</SubTitle>
          <Description>
            412 54 Göteborg
            <br></br>
            Telefon: 031 711 25 40
          </Description>
          <Email href='mailto: info@batteri.se'>E-mail: info@batteri.se</Email>
        </AddressContainer>
        <AktuelltContainer>
          <Title>Aktuellt</Title>
          <SubTitle>Creative Day 2022</SubTitle>
          <Description>
            Kunskap och inspiration för dig som arbetar inhouse och på byrå.
          </Description>
        </AktuelltContainer>
        <NewsLetterContainer>
          <Title>Nyhetsbrev</Title>
          <Description>
            Fyll i din emailadress nedan för att ta del av vårt nyhetsbrev
          </Description>
          <Label htmlFor='email'>Email:</Label>
          <InputBar type='email' id='email' name='email'></InputBar>
          <InputBtn>Skicka</InputBtn>
        </NewsLetterContainer>
      </MainContainer>
      <BuiltBy>Built with &#9829; for Batteri by HOP Technology</BuiltBy>
      <CopyRight>© 2022 by Batteri kummunikation</CopyRight>
    </FooterContainer>
  )
}

export default Footer
