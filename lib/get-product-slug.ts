import graphcmsClient, { gql } from './graphcms-client'
import { ProductFragment } from './graphql-fragments'
import { TProduct } from './graph-interfaces'

export const getProductsSlugQuery = gql`
  query CollectionSlugQuery($slug: String!) {
    products(where: { slug: $slug }) {
      ...ProductFragment
      localizations(includeCurrent: true) {
        locale
        name
        slug
      }
    }
  }

  ${ProductFragment}
`

async function getProductBySlug({ slug }) {
  const {
    products: product,
  } = await graphcmsClient.request<TProduct>(getProductsSlugQuery, {
    slug,
  })

  return { product }
}

export default getProductBySlug
