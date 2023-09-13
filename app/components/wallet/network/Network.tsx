import { ChevronDownIcon } from '@heroicons/react/24/solid'
import NetworkThumbnail from './Thumbnail'

export const WalletNetwork = () => {
  return (
    <div className='flex cursor-pointer space-x-2'>
      <ChevronDownIcon
        width={16}
        className='hidden text-white lg:inline-flex'
      />
      <NetworkThumbnail />
    </div>
  )
}

export default WalletNetwork
