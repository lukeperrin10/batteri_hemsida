import React from 'react'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import { styled } from '../stitches.config'
import CourseHero from '../components/CourseHero'
import Image from 'next/image'
import Button from '../components/Button'

const IconGrid = styled('section', {
  width: '100vw',
  maxWidth: 2560,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  columnGap: 100,
  variants: {
    variant: {
      mobile: {
        marginTop: 40,
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 75,
      },
      desktop: {
        marginTop: 125,
        flexDirection: 'row',
        rowGap: 100,
      },
    },
  },
})
const IconGridItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 300,
  height: 'fit-content',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const IconBox = styled('div', {
  position: 'relative',
  square: 220,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const ItemText = styled('p', {
  textAlign: 'center',
  color: '$black',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const Divider = styled('div', {
  height: 1,
  border: '1px solid $grey',
  marginY: 125,
  width: '70%',
})

const InfoSection = styled('section', {
  width: '100vw',
  maxWidth: 2560,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  columnGap: 250,
  rowGap: 150,
  marginBottom: 125,
  paddingX: 28,
})

const InfoItem = styled('div', {
  maxWidth: 520,
  display: 'flex',
  flexDirection: 'column',
  rowGap: 22,
})

const InfoTitle = styled('h3', {
  color: '$blueLight',
})

const InfoContent = styled('p', {
  color: '$black',
})

const ButtonBox = styled('div', {
  marginBottom: 125,
})

const ForForetag = () => {
  const heroData = {
    name: 'Företagsanpassad Kurs',
    images: [{ url: '/index-hero-mob.webp' }],
    wideImage: {
      url: '/index-hero.webp',
    },
    subTitle: 'Anpassa en kurs för ditt företag',
    gradientColor: {
      color: {
        hex: '#000',
      },
    },
  }

  const iconGridData = [
    {
      id: 1,
      text: 'Lorem imsum dolerm irum veni',
      icon: '/check.svg',
    },
    {
      id: 2,
      text: 'Lorem imsum dolerm irum veni vineLorem imsum dole',
      icon: '/batteri.svg',
    },
    {
      id: 3,
      text: 'Lorem imsum dolerm irum veni vineLorem',
      icon: '/check.svg',
    },
  ]

  const infoData = [
    {
      id: 1,
      title: 'Vi kommer till er',
      text: 'Oavsett om ni behöver en Excelutbildning för en hel avdelning i Haparanda eller önskar en anpassad ledarskapsutbildning i Ystad så löser vi det. Våra duktiga rådgivare har lång erfarenhet av att skräddarsy och anpassa kursupplägg för att passa just era behov och önskemål.',
    },
    {
      id: 2,
      title: 'Specifika önskemål',
      text: 'En företagsanpassad utbildning är perfekt för dig med specifika önskemål eller brådskande behov. Det är ett effektivt alternativ till traditionella utbildningar där upplägget lämpar sig lika väl för ett helt företag som för enstaka personer.',
    },
  ]

  const items = iconGridData.map((item, id) => {
    return (
      <IconGridItem key={id}>
        <IconBox>
          <Image src={item.icon} alt='' layout='fill' />
        </IconBox>
        <ItemText>{item.text}</ItemText>
      </IconGridItem>
    )
  })

  const infoItems = infoData.map((item, id) => {
    return (
      <InfoItem key={id}>
        <InfoTitle>{item.title}</InfoTitle>
        <InfoContent>{item.text}</InfoContent>
      </InfoItem>
    )
  })
  return (
    <>
      <CourseHero data={heroData} btnText={'Begär Offert'} />
      <IconGrid variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        {items}
      </IconGrid>
      <Divider variant={{ '@initial': 'mobile', '@bp3': 'desktop' }} />
      <InfoSection>{infoItems}</InfoSection>
      <ButtonBox>
        <Button linkTo='/#' text='Begär offert' />
      </ButtonBox>
    </>
  )
}

export default ForForetag

export async function getStaticProps({ locale }) {
  const { aktuellts } = await getAllAktuellts({ locale })
  const pageData = await getPageData({ locale })
  return {
    props: {
      ...pageData,
      aktuellts,
    },
  }
}
