import React from 'react'
import Link from 'next/link'

import getAllCategories from '../lib/get-all-categories'
import getAllAktuellts from '../lib/get-all-aktuellts'
import getPageData from '../lib/get-page-data'
import {categoriesHeroData} from '../lib/static-data'
import Card from '../components/Card'
import CategoriesHero from '../components/CategoriesHero'
import { styled } from '../stitches.config'

const CategoriesBox = styled('div', {
  width: '100vw',
  maxWidth: 1920,
  display: 'flex',
  marginY: 58,

  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 14,
      },
      desktop: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 80,
      },
    },
  },
})

const ATag = styled('a', {
  textDecoration: 'none',
})

const Kurser = ({ categories }) => {
  return (
    <>
      <CategoriesHero data={categoriesHeroData}/>
      <CategoriesBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        {categories.map((category, slug) => {
          return (
            <Link href={`/kurser/${category.slug}`} key={slug} passHref>
              <ATag>
                <Card data={category} />
              </ATag>
            </Link>
          )
        })}
      </CategoriesBox>
    </>
  )
}
export default Kurser

export async function getStaticProps({ locale }) {
  const pageData = await getPageData({ locale })
  const { categories } = await getAllCategories({ locale })
  const { aktuellts } = await getAllAktuellts({ locale })


  return {
    props: {
      ...pageData,
      categories,
      aktuellts,
    },
  }
}
