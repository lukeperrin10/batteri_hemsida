import React from 'react'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'

import CourseHero from '../components/CourseHero'

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
  return (
    <>
      <CourseHero data={heroData} btnText={'Begär Offert'}/>
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
