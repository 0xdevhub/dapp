import { type HTMLProps } from 'react'
import classNames from 'classnames'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

export type AvatarThumbnailProps = HTMLProps<HTMLDivElement> & {
  address: string
}

export const AvatarThumbnail = ({
  className,
  address,
  ...props
}: AvatarThumbnailProps) => {
  const SIZE = 52

  return (
    <div
      {...props}
      className={classNames(
        className,
        'flex h-6 w-6 items-center justify-center overflow-hidden rounded-md bg-lime-400'
      )}
    >
      <Jazzicon diameter={SIZE} seed={jsNumberForAddress(address)} />
    </div>
  )
}

export default AvatarThumbnail
