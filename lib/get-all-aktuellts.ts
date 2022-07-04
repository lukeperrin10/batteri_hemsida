import graphcmsClient, { gql } from './graphcms-client'

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

interface TData {
  aktuellts: {
    title: string
    description: string
    show: boolean
    id: string
  }
}

async function getAllAktuellts() {
  const { aktuellts } = await graphcmsClient.request<TData>(getAllAktuelltsQuery, {})
  return { aktuellts }
}

export default getAllAktuellts
