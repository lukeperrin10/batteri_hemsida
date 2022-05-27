import React from 'react'
import Link from 'next/link'

import { styled } from '../stitches.config'
import Card from '../components/Card'
import getPageData from '../lib/get-page-data'
import getAllCategories from '../lib/get-all-categories'

const CategoriesBox = styled('div', {
  maxWidth: 1920,
  display: 'flex',
  variants: {
    variant: {
      mobile: { flexDirection: 'column' },
      desktop: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    },
  },
})

const Button = styled('button', {
  borderRadius: '9999px',
  paddingX: '50px',
  paddingY: '10px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },

  variants: {
    size: {
      1: {
        fontSize: '$5',
      },
      2: {
        fontSize: '$10',
      },
    },
    variant: {
      blue: {
        backgroundColor: '$blue',
        color: '$white',
      },
      grey: {
        backgroundColor: '$greyBg',
        color: '$white',
      },
    },
  },

  defaultVariants: {
    variant: 'blue',
    size: 1,
  },
})

const Home = ({ categories }) => {
  return (
    <>
      {/* <Button>Button</Button>
      <Button variant='grey' size='1'>
        Button
      </Button>
      <Button variant='blue' size={{ '@bp1': '2' }}>
        Button
      </Button> */}
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
