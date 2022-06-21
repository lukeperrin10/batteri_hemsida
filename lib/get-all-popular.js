import graphcmsClient, { gql } from './graphcms-client'

export const getAllPopularQuery = gql`
  query AllPopularProducts {
    popularCourses {
      id
      products {
        id
        name
        slug
        shortDescription
        images(first: 1) {
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
      }
    }
  }
`

async function getAllPopularCourses() {
  const { popularCourses } = await graphcmsClient.request(getAllPopularQuery, {})

  return {
    popularCourses,
  }
}

export default getAllPopularCourses
