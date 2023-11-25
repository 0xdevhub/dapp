import { type HTMLProps } from 'react'
import { ZeroAddress } from 'ethers'
import classNames from 'classnames'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

export type AccountAvatarProps = HTMLProps<HTMLDivElement> & {
  address?: string
}

const SIZE = 52

export const AccountAvatar = ({
  src,
  address,
  className,
  ...props
}: AccountAvatarProps) => {
  return (
    <div
      {...props}
      className={classNames(
        className,
        'flex h-5 w-5 items-center justify-center overflow-hidden rounded-md'
      )}
    >
      <Jazzicon
        diameter={SIZE}
        seed={jsNumberForAddress(address || ZeroAddress)}
      />
    </div>
  )
}

export default AccountAvatar
