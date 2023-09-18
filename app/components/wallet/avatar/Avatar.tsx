import { type HTMLProps } from 'react'
import { AvatarThumbnail } from './Thumbnail'
import { ZeroAddress } from 'ethers'
import classNames from 'classnames'

export type AvatarProps = HTMLProps<HTMLDivElement> & {
  address?: string
}

export const Avatar = ({ src, address, ...props }: AvatarProps) => {
  return (
    <div {...props}>
      <AvatarThumbnail
        address={address || ZeroAddress}
        className={classNames(props.className, 'cursor-pointer')}
      />
    </div>
  )
}

export default Avatar
