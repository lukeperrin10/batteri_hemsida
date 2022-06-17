import React from 'react'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import { styled } from '../stitches.config'

const IconGrid = styled('div', {
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const ContactUs = () => {
  return <>Kontakt info thingi</>
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
