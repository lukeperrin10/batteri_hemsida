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
    subTitleLength
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
    subTitle
    price
    slug
    kursprogram
    courseLeaders {
      ...CourseLeaderFragment
    }
    dates
    courseDuration
    images(first: 1) {
      url
    }
    wideImage {
      url
    }
    gradientColor {
      color {
        hex
      }
    }
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
      url
    }
    wideImage {
      url
    }
    logo {
      url
    }
    gradientColor {
      color {
        hex
      }
    }
    shortDescription
  
  }

  ${[CourseLeaderFragment]}
`
