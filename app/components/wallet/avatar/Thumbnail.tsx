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
  const SIZE = 26

  return (
    <div
      {...props}
      className={classNames(
        className,
        'flex items-center justify-center rounded-full bg-lime-400'
      )}
    >
      {src ? (
        <Image
          src={src}
          alt='avatar'
          width={SIZE}
          height={SIZE}
          objectFit='cover'
          objectPosition='center'
        />
      ) : (
        <Jazzicon diameter={SIZE} seed={jsNumberForAddress(address)} />
      )}
    </div>
  )
}

export default AvatarThumbnail
