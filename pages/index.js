import React from 'react'
import Link from 'next/link'

import { styled } from '../stitches.config'
import Card from '../components/Card'
import getPageData from '../lib/get-page-data'
import getAllCategories from '../lib/get-all-categories'

const CategoriesBox = styled('div', {
  width: '100vw',
  maxWidth: 1920,
  display: 'flex',
  alignItems: 'center',

  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
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

const Home = ({ categories }) => {
  return (
    <>
      <CategoriesBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        {categories.map((category, slug) => {
          return (
            <Link href={`/kurser/${category.slug}`} key={slug} passHref>
              <Card data={category} className='courses' />
            </Link>
          )
        })}
      </CategoriesBox>
    </>
  )
}

export default Home

export async function getStaticProps({ locale }) {
  const { categories } = await getAllCategories({ locale })
  const pageData = await getPageData({ locale })
  return {
    props: {
      ...pageData,
      categories,
    },
  }
}
