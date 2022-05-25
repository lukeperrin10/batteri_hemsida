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
    image {
      ...ImageFragment
    }
    logo {
      ...ImageFragment
    }
    gradientColor {
      name
    }
  }
  ${[ImageFragment]}
`

export const CourseLeaderFragment = gql`
  fragment CourseLeaderFragment on CourseLeader {
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
    courseLeaders {
      ...CourseLeaderFragment
    }
    dates
    courseDuration
  }

  ${[ImageFragment, CourseLeaderFragment]}
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
    courseLeaders(first: 1) {
      ...CourseLeaderFragment
    }
  }

  ${[ImageFragment, CourseLeaderFragment]}
`
