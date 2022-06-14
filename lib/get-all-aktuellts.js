import graphcmsClient, { gql } from './graphcms-client'
// import { CategoryFragment } from './graphql-fragments'

export const getAllAktuelltsQuery = gql`
  query getAllAktuellts() {
    aktuellts {
      title
      description
      show
      id
    }
  }
`

async function getAllAktuellts() {
  const { aktuellts } = await graphcmsClient.request(getAllAktuelltsQuery, {})
  return { aktuellts }
}

export default getAllAktuellts