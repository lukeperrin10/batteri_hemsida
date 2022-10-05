import { TCategory } from './graph-interfaces'
import graphcmsClient, { gql } from './graphcms-client'
import { CategoryFragment, ProductCardFragment } from './graphql-fragments'

export const getCategorySlugQuery = gql`
  query CategorySlugQuery($slug: String) {
    categories(where: { slug: $slug }) {
      ...CategoryFragment
      products {
        ...ProductCardFragment
      }
    }
  }

  ${[CategoryFragment, ProductCardFragment]}
`

async function getCategoryBySlug({ slug }) {
  const {
    category: category,
  } = await graphcmsClient.request<TCategory>(getCategorySlugQuery, {
    slug,
  })

  return {
    category,
  }
}

export default getCategoryBySlug
