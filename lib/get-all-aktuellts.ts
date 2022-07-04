import graphcmsClient, { gql } from './graphcms-client'
import { AAktuellt } from './graph-Interfaces'

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
  const { aktuellts } = await graphcmsClient.request<AAktuellt>(
    getAllAktuelltsQuery,
    {}
  )
  return { aktuellts }
}

export default getAllAktuellts
