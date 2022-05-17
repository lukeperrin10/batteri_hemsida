import graphcmsClient, { gql } from './graphcms-client'
import { CategoryFragment, EventFragment } from './graphql-fragments'

export const getPageDataQuery = gql`
  query PageDataQuery() {
    footerCategories: categories(first: 4  ) {
      ...CategoryFragment
      type: __typename
    }
    footerEvents: events(first: 4 ) {
      ...EventFragment
      type: __typename
    }
    navigationCategory: categories(first: 1) {
      ...CategoryFragment
      type: __typename
    }
    navigationEvent: events(first: 1) {
      ...EventFragment
      type: __typename
    }
  }

  ${[CategoryFragment, EventFragment]}
`

async function getPageData() {
  const {
    footerCategories,
    footerEvents,
    navigationCategory,
    navigationEvent,
  } = await graphcmsClient.request(getPageDataQuery)

  return {
    footer: { categories: footerCategories, events: footerEvents },
    navigation: { pages: [...navigationCategory, ...navigationEvent] },
  }
}

export default getPageData
