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
        'flex h-6 w-6 items-center justify-center overflow-hidden rounded-md',
        // 'dark:from-yellow-300 dark:via-sky-300 dark:to-lime-300',
        // 'from-yellow-500 via-sky-500 to-lime-500',
        'dark:bg-black/55 bg-black/20',
        'border-2 border-transparent'
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
