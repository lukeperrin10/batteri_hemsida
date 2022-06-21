import React from 'react'

import getAllPopularCourses from '../lib/get-all-popular'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import { popularHeroData } from '../lib/static-data'
import CategoriesHero from '../components/CategoriesHero'
import { styled } from '../stitches.config'
import RecommendedCard from '../components/RecommendedCard'

const CoursesBox = styled('div', {
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

const CategoryPage = ({ popularCourses }) => {
  return (
    <>
      <CategoriesHero data={popularHeroData} />
      <CoursesBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        {popularCourses[0].products?.map((product, index) => {
          const course_data = {
            slug: product.slug,
            gradientColor: product.gradientColor,
            image: product.images[0],
            name: product.name,
            logo: product.logo,
            description: product.shortDescription,
          }
          return <RecommendedCard data={course_data} key={index} />
        })}
      </CoursesBox>
    </>
  )
}

export async function getPaths() {
  let paths = []

  const { popularCourses } = await getAllPopularCourses()
  paths = [
    ...paths,
    ...popularCourses[0].products.map((product) => ({
      params: {
        slug: product.slug,
      },
    })),
  ]

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps() {
  const pageData = await getPageData()
  const { aktuellts } = await getAllAktuellts()
  const { popularCourses } = await getAllPopularCourses()

  return {
    props: {
      ...pageData,
      popularCourses,
      aktuellts,
    },
  }
}

export default CategoryPage
