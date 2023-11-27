import { gql } from '@apollo/client'

export const GET_APPS_ADDEDS_QUERY = gql`
  query HubAppAddeds {
    hubAppAddeds() {
        id
        appId_
        appAddress_
        name_
      }
  }
`
