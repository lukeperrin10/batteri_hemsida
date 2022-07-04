import graphcmsClient, { gql } from './graphcms-client'
import { RelatedCourseFragment } from './graphql-fragments'
import { APopular } from './graph-Interfaces'

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
  const { popularCourses } = await graphcmsClient.request<APopular>(getAllPopularQuery, {})

  return {
    popularCourses,
  }
}

export default getAllPopularCourses
