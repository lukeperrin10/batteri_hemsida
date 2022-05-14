import graphcmsClient, { gql } from './graphcms-client'
import { EventFragment } from './graphql-fragments'

export const getEventSlugQuery = gql`
  query EventSlugQuery($slug: String!) {
    events(where: { slug: $slug }) {
      ...EventFragment
    }
  }

  ${EventFragment}
`

async function getEventBySlug({ slug }) {
  const {
    events: [event],
  } = await graphcmsClient.request(getEventSlugQuery, {
    slug,
  })

  return {
    event,
  }
}

export default getEventBySlug
