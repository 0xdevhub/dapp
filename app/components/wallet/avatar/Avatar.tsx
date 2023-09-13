import { type HTMLProps } from 'react'
import { AvatarThumbnail } from './Thumbnail'
import { ZeroAddress } from 'ethers'

type WalletAvatarProps = HTMLProps<HTMLDivElement> & {
  src?: string
  address?: string
}

const WalletAvatar = ({ src, address, ...props }: WalletAvatarProps) => {
  return (
    <div {...props}>
      <AvatarThumbnail
        src={src}
        address={address || ZeroAddress}
        className='cursor-pointer'
      />
    </div>
  )
}

export default WalletAvatar
