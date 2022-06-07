import React from 'react'
import Link from 'next/link'

import { styled } from '../stitches.config'
import getPageData from '../lib/get-page-data'
import getAllCategories from '../lib/get-all-categories'
import Card from '../components/Card'
import IndexHero from '../components/IndexHero'
import CertifiedBar from '../components/CertifiedBar'
import Testimonials from '../components/Testimonials'

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
const ATag = styled('a', {
  textDecoration: 'none',
})

const Home = ({ categories }) => {
  return (
    <>
      <IndexHero />
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
      <CertifiedBar />
      <Testimonials />
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
