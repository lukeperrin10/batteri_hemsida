import graphcmsClient, { gql } from './graphcms-client'
import { CategoryFragment } from './graphql-fragments'

export const getAllCategoriesQuery = gql`
  query getAllCategories() {
    categories() {
      ...CategoryFragment
    }
  }
  ${CategoryFragment}
`

async function getAllCategories() {
  const { categories } = await graphcmsClient.request(getAllCategoriesQuery, {})
  return { categories }
}

export default getAllCategories
