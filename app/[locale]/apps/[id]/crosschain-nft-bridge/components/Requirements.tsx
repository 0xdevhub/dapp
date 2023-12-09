import { Heading, Text } from '@/app/components/typography'

import Link from 'next/link'

export const Requirements = () => {
  return (
    <div>
      <Heading as='h5' variant='h6' className='text-gray-400'>
        Requirements <span className='text-red-400'>*</span>
      </Heading>
      <ul className='text-gray-500'>
        <li>
          <Link href='https://faucets.chain.link/' target='_blank'>
            <Text as='span'>Link Faucet</Text>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Requirements
