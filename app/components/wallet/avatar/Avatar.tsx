import { type HTMLProps } from 'react'
import { AvatarThumbnail } from './Thumbnail'
import { ZeroAddress } from 'ethers'

export type AvatarProps = HTMLProps<HTMLDivElement> & {
  src?: string
  address?: string
}

export const Avatar = ({ src, address, tabIndex, ...props }: AvatarProps) => {
  return (
    <div {...props}>
      <AvatarThumbnail
        tabIndex={tabIndex}
        src={src}
        address={address || ZeroAddress}
        className='cursor-pointer'
      />
    </div>
  )
}

export default Avatar
