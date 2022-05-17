import graphcmsClient, { gql } from './graphcms-client'
import { EventFragment } from './graphql-fragments'

export const getAllEventsQuery = gql`
  query getAllEvents() {
    events() {
      ...EventFragment
    }
  }
  ${EventFragment}
`

async function getAllEvents() {
  const { events } = await graphcmsClient.request(getAllEventsQuery, {})
  return { events }
}

export default getAllEvents
