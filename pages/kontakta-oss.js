import React from 'react'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import { styled } from '../stitches.config'
import CourseHero from '../components/CourseHero'
import Image from 'next/image'

const IconGrid = styled('div', {
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

const ContactUs = () => {
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
  return (
    <>
      <CourseHero data={heroData} btnText={'Begär Offert'} />
      <IconGrid variant={{ '@initial': 'mobile', '@bp3': 'desktop' }} >{items}</IconGrid>
      <Divider variant={{ '@initial': 'mobile', '@bp3': 'desktop' }} />
    </>
  )
}

export default ContactUs

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
