import React from 'react'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import Map from '../components/Map'
import CategoriesHero from '../components/CategoriesHero'
import { styled } from '../stitches.config'
import { hittaHitHeroData } from '../lib/static-data'

const FindUs = () => {
  return (
    <>
      <CategoriesHero data={hittaHitHeroData} />
      <Map />
    </>
  )
}

export default FindUs

export async function getStaticProps({ locale }) {
  const pageData = await getPageData({ locale })
  const { aktuellts } = await getAllAktuellts({ locale })
  return {
    props: {
      ...pageData,
      aktuellts,
    },
  }
}
