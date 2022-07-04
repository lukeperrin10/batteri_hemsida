import graphcmsClient, { gql } from './graphcms-client'
import { CategoryFragment } from './graphql-fragments'
import { ACategories } from './graph-Interfaces'

export const getAllCategoriesQuery = gql`
  query getAllCategories() {
    categories() {
      ...CategoryFragment
    }
  }
  ${CategoryFragment}
`

async function getAllCategories() {
  const { categories } = await graphcmsClient.request<ACategories>(getAllCategoriesQuery, {})
  return { categories }
}

export default getAllCategories
