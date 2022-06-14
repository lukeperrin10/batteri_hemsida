import React from 'react'

import getAllCategories from '../../lib/get-all-categories'
import getPageData from '../../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import getCategoryBySlug from '../../lib/get-category-slug'
import Card from '../../components/Card'
import CategoryHero from '../../components/CategoryHero'
import { styled } from '../../stitches.config'

const CoursesBox = styled('div', {
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

const CategoryPage = ({ category }) => {
  return (
    <>
      <CategoryHero data={category}/>
      <CoursesBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
      {category.products?.map((product, index) => {
        const course_data = {
          slug: product.slug,
          gradientColor: product.gradientColor,
          isWide: product.isWide,
          image: product.images[0],
          wideImage: product.wideImage[0],
          name: product.name,
          logo: product.logo,
          description: product.shortDescription,
        }
        return <Card data={course_data} key={index} />
      })}
      </CoursesBox>
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

  const { categories } = await getAllCategories()

  paths = [
    ...paths,
    ...categories.map((category) => ({
      params: { slug: category.slug },
    })),
  ]

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData()
  const { aktuellts } = await getAllAktuellts({ locale })
  const { category } = await getCategoryBySlug({
    slug: params.slug,
  })

  return {
    props: {
      category,
      ...pageData,
      aktuellts,
    },
  }
}

export default CategoryPage