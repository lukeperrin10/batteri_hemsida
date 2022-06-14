import React from 'react'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'



const FiveHundred = () => {
  return (
    <div>Custom 500 error</div>
  )
}

export default FiveHundred



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