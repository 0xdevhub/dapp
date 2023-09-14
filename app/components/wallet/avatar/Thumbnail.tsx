import { type HTMLProps } from 'react'
import classNames from 'classnames'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import Image from 'next/image'

export type AvatarThumbnailProps = HTMLProps<HTMLDivElement> & {
  src?: string
  address: string
}

export const AvatarThumbnail = ({
  src,
  className,
  address,
  ...props
}: AvatarThumbnailProps) => {
  return (
    <div
      {...props}
      className={classNames(
        className,
        'flex h-10 w-10 items-center justify-center rounded-full bg-lime-400'
      )}
    >
      {src ? (
        <Image src={src} alt='avatar' />
      ) : (
        <Jazzicon diameter={36} seed={jsNumberForAddress(address)} />
      )}
    </div>
  )
}

export default AvatarThumbnail
