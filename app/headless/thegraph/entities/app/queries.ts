import { gql } from '@apollo/client'

export const HUB_APP_ADDED_QUERY = gql`
  query HubAppAdded($id: String!) {
    hubAppAdded(id: $id) {
      id
      appId_
      appAddress_
      name_
      description_
    }
  }
`

export const HUB_APP_ADDEDS_QUERY = gql`
  query HubAppAddeds {
    hubAppAddeds {
      id
      appId_
      appAddress_
      name_
      description_
    }
  }
`
