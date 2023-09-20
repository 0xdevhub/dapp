import { type HTMLProps } from 'react'
import { ZeroAddress } from 'ethers'
import classNames from 'classnames'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

export type AvatarProps = HTMLProps<HTMLDivElement> & {
  address?: string
}

const SIZE = 52

export const Avatar = ({ src, address, className, ...props }: AvatarProps) => {
  return (
    <div
      {...props}
      className={classNames(
        className,
        'flex h-6 w-6 items-center justify-center overflow-hidden rounded-md'
      )}
    >
      <Jazzicon
        diameter={SIZE}
        seed={jsNumberForAddress(address || ZeroAddress)}
      />
    </div>
  )
}

export default Avatar
