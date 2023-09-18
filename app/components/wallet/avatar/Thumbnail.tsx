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
  const SIZE = 26

  return (
    <div
      {...props}
      className={classNames(
        className,
        'flex items-center justify-center rounded-full bg-lime-400'
      )}
    >
      <Jazzicon diameter={SIZE} seed={jsNumberForAddress(address)} />
    </div>
  )
}

export default AvatarThumbnail
