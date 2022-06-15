import Image from 'next/image'
import CourseHero from '../../components/CourseHero'
import getAllProducts from '../../lib/get-all-product'
import getAllAktuellts from '../../lib/get-all-aktuellts'
import getProductBySlug from '../../lib/get-product-slug'
// import HopHelper from '../../modules/helper'

import CourseProgram from '../../components/CourseProgram'
import { styled } from '../../stitches.config'

const CourseInfo = styled('div', {
  maxWidth: '2560px',
  display: 'flex',
  columnGap: 70,
  rowGap: 70,
  marginTop: 70,
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 40,
        marginTop: 40,
      },
      desktop: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginX: 40,
        rowGap: 70,
        marginTop: 70,
      },
    },
  },
  p: {
    marginTop: '1rem',
    color: '$black',
    '&:first-of-type': {
      marginTop: 0,
    },
  },
})

const CourseDescription = styled('div', {
  color: '$black',
  width: '100%',
  maxWidth: 660,
  variants: {
    variant: {
      mobile: {
        width: '80%',
      },
      desktop: {
        width: '100%',
      },
    },
  },
})

const Product = ({ product }) => {
  const coach = product.courseLeaders.map((variant, index) => {
    return (
      <div key={index}>
        <h3>{variant.name}</h3>
        <Image
          src={variant.courseLeaderImage.url}
          alt={variant.name}
          height={280}
          width={280}
        />
      </div>
    )
  })

  return (
    <>
      <CourseHero data={product} />
      <CourseInfo variant={{ '@initial': 'mobile', '@bp7': 'desktop' }}>
        <CourseDescription
          variant={{
            '@initial': 'mobile',
            '@bp3': 'desktop',
          }}
          dangerouslySetInnerHTML={{ __html: product.description.html }}
        />
        <CourseProgram data={product} />
      </CourseInfo>

      {/* Course Start dates:{' '}
        <select>{HopHelper.addCourseDuration(product)}</select> */}
      {coach}
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

  const { products } = await getAllProducts()
  paths = [
    ...paths,
    ...products.map((product) => ({
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

export async function getStaticProps({ params }) {
  const { product } = await getProductBySlug({ slug: params.slug })
  const { aktuellts } = await getAllAktuellts()

  return {
    props: {
      product,
      aktuellts,
    },
  }
}
export default Product
