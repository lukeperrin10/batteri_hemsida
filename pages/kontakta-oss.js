import React from 'react'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import CategoriesHero from '../components/CategoriesHero'
import { styled } from '../stitches.config'
import {kontaktHeroData} from '../lib/static-data'

const IconGrid = styled('div', {
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const ContactUs = () => {
  return (
    <>
    <CategoriesHero data={kontaktHeroData}/>
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
