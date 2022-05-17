import { gql } from './graphcms-client'

export const CategoryFragment = gql`
  fragment CategoryFragment on Category {
    id
    description
    name
    slug
  }
`
export const EventFragment = gql`
  fragment EventFragment on Event {
    id
    description
    name
    slug
  }
`

export const ImageFragment = gql`
  fragment ImageFragment on Asset {
    id
    height
    url
    width
  }
`



export const ProductVariantFragment = gql`
  fragment ProductVariantFragment on ProductVariants {
    __typename
    ... on CourseLeader {
      id
      name
      courseLeaderAbout {
        html
      }
      courseLeaderImage {
        ...ImageFragment
      }
    }
    ... on ProductSizeColorVariant {
      id
      name
    }
    ... on ProductSizeVariant {
      id
      name
    }
  }
`

export const ProductFragment = gql`
  fragment ProductFragment on Product {
    id
    description
    images {
      ...ImageFragment
    }
    name
    price
    slug
    variants {
      ...ProductVariantFragment
    }
    dates 
  }

  ${[ImageFragment, ProductVariantFragment ]}
`

export const ProductCardFragment = gql`
  fragment ProductCardFragment on Product {
    id
    images(first: 1) {
      ...ImageFragment
    }
    name
    price
    slug
    variants(first: 1) {
      ...ProductVariantFragment
    }
 
  }

  ${[ImageFragment, ProductVariantFragment]} 
`
