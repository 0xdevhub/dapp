import { Card } from '@/app/components'
import { Heading, Text } from '@/app/components/typography'
import { IHubAppAddeds } from '@/app/headless/thegraph/entities/app/types'
import Link, { LinkProps } from 'next/link'

export type ListItemProps = Partial<LinkProps> & {
  app: IHubAppAddeds
}

export const ListItem = ({ app, ...props }: ListItemProps) => {
  return (
    <Link {...props} href={app.id}>
      <Card
        className='flex cursor-pointer flex-col space-y-4 rounded-md p-4'
        as='section'
      >
        <Heading as='h3'>{app.name_}</Heading>
        <Text>{app.description_}</Text>
      </Card>
    </Link>
  )
}

export default ListItem
