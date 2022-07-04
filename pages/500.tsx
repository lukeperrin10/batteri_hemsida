import React from 'react'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'



const FiveHundred = () => {
  return (
    <div>Custom 500 error</div>
  )
}

export default FiveHundred



export async function getStaticProps() {
  const { aktuellts } = await getAllAktuellts()
  const pageData = await getPageData()
  return {
    props: {
      ...pageData,
      aktuellts,
    },
  }
}