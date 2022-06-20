import React from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { styled } from '../stitches.config'

import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import { hittaHitHeroData } from '../lib/static-data'

import Map from '../components/Map'
import CategoriesHero from '../components/CategoriesHero'

const MapDiv = styled('div', {
  square: 450,
})
const Marker = styled('div', {
  square: 50,
  backgroundColor: 'red',
})
const Loading = styled('h3', {
  color: '#000',
})
const Failure = styled('h3', {
  color: '#000',
})

const render = (status) => {
  if (status === Status.LOADING) return <Loading>{status} ..</Loading>
  if (status === Status.FAILURE)
    return <Failure>{status} ... Please try again later</Failure>
  return null
}

const FindUs = () => {
  const center = { lat: 57.6980118, lng: 11.9833662 }
  const zoom = 16

  return (
    <>
      <CategoriesHero data={hittaHitHeroData} />
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        render={render}>
        <Map center={center} zoom={zoom} />
      </Wrapper>
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
