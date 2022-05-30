import { gql } from './graphcms-client'

export const ImageFragment = gql`
  fragment ImageFragment on Asset {
    id
    height
    url
    width
  }
`
export const CategoryFragment = gql`
  fragment CategoryFragment on Category {
    id
    description
    name
    slug
    isWide
    image {
      ...ImageFragment
    }
    wideImage {
      ...ImageFragment
    }
    logo {
      ...ImageFragment
    }
    gradientColor {
      color {
        hex
      }
    }
  }
  ${ImageFragment}
`

export const CourseLeaderFragment = gql`
  fragment CourseLeaderFragment on CourseLeader {
    __typename
    ... on CourseLeader {
      id
      name
      courseLeaderImage {
        url
        height
        width
      }
      courseLeaderAbout {
        html
      }
    }
  }
`

export const ProductFragment = gql`
  fragment ProductFragment on Product {
    id
    description
    name
    price
    slug
    courseLeaders {
      ...CourseLeaderFragment
    }
    dates
    courseDuration
  }

  ${[CourseLeaderFragment]}
`

export const ProductCardFragment = gql`
  fragment ProductCardFragment on Product {
    id
    name
    price
    slug
    courseLeaders(first: 1) {
      ...CourseLeaderFragment
    }
    images(first: 1) {
      id
      url
      height
      width
    }
    description
  }

  ${[CourseLeaderFragment]}
`
