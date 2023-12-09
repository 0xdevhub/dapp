import { Heading, Text } from '@/app/components/typography'

import Link from 'next/link'

export const Requirements = () => {
  return (
    <ul className='text-gray-500'>
      <li>
        <Link href='https://faucets.chain.link/' target='_blank'>
          <Text as='span'>Link Faucet</Text>
        </Link>
      </li>
    </ul>
  )
}

export default Requirements
