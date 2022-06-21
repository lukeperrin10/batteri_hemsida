import graphcmsClient, { gql } from './graphcms-client'
import { RelatedCourseFragment } from './graphql-fragments'

export const getAllPopularQuery = gql`
  query AllPopularProducts {
    popularCourses {
      id
      products() {
        ...RelatedCourseFragment
      }
    }
  }
  ${RelatedCourseFragment}
`

async function getAllPopularCourses() {
  const { popularCourses } = await graphcmsClient.request(getAllPopularQuery, {})

  return {
    popularCourses,
  }
}

export default getAllPopularCourses
