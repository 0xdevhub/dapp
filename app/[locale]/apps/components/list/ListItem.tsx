import { Card } from '@/app/components'
import { Heading, Text } from '@/app/components/typography'
import Link from 'next/link'

export const ListItem = () => {
  return (
    <Link href='1'>
      <Card
        className='flex cursor-pointer flex-col space-y-4 rounded-md p-4'
        as='section'
      >
        <Heading as='h3'>CCIP crosschain NFT</Heading>
        <Text>Lock-and-Mint or Burn-and-unlock</Text>
      </Card>
    </Link>
  )
}

export default ListItem
