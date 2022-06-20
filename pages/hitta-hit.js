import React from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { styled } from '../stitches.config'

import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import { hittaHitHeroData } from '../lib/static-data'

import Map from '../components/Map'
import CategoriesHero from '../components/CategoriesHero'

const Content = styled('div', {
  display: 'flex',
  marginY: 100,
})
const MapContainer = styled('div', {})
const StatusText = styled('h3', {
  color: '#000',
})
const AddressBox = styled('div', {})
const AddressText = styled('p', {
  color: '$black',
  fontWeight: '$reg',
  fontSize: '$2',
})
const Email = styled('a', {
  fontWeight: '$reg',
  color: '$blueLink',
  fontSize: '$2',
})

const render = (status) => {
  if (status === Status.LOADING) return <StatusText>{status} ..</StatusText>
  if (status === Status.FAILURE)
    return <StatusText>{status} ... Please try again later</StatusText>
  return null
}

const FindUs = () => {
  const center = { lat: 57.6980118, lng: 11.9833662 }
  const zoom = 16

  return (
    <>
      <CategoriesHero data={hittaHitHeroData} />
      <Content>
        <MapContainer>
          <Wrapper
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            render={render}>
            <Map center={center} zoom={zoom} />
          </Wrapper>
          <AddressBox>
            <AddressText>
              Södravägen 24 <br></br>
              412 54 Göteborg <br></br>
              Telefon: 031 711 2540 <br></br>
              <Email href='mailto: info@batteri.se'>
                E-mail: info@batteri.se
              </Email>
            </AddressText>
          </AddressBox>
        </MapContainer>
      </Content>
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
