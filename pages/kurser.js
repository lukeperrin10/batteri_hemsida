import React from 'react'
import Link from 'next/link'

import getAllCategories from '../lib/get-all-categories'
import getPageData from '../lib/get-page-data'
import Card from '../components/Card'
import CategoriesHero from '../components/CategoriesHero'
import { styled } from '../stitches.config'

const CategoriesBox = styled('div', {
  width: '100vw',
  maxWidth: 1920,
  display: 'flex',

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

const Kurser = ({ categories }) => {
  return (
    <>
      <CategoriesHero />
      <CategoriesBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        {categories.map((category, slug) => {
          return (
            <Link href={`/kurser/${category.slug}`} key={slug} passHref>
              <a>
                <Card data={category} />
              </a>
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

  return {
    props: {
      ...pageData,
      categories,
    },
  }
}
