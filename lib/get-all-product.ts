import graphcmsClient, { gql } from './graphcms-client'
import { ProductCardFragment } from './graphql-fragments'
import { ProductCardData } from './graph-Interfaces'

export const getAllProductsQuery = gql`
  query AllProductsQuery() {
    products() {
      ...ProductCardFragment
    }
  }

  ${ProductCardFragment}
`

async function getAllProducts() {
  const { products } = await graphcmsClient.request<ProductCardData>(getAllProductsQuery, {})

  return {
    products,
  }
}

export default getAllProducts
