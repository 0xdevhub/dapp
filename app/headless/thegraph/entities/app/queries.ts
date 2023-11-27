import { gql } from '@apollo/client'

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
