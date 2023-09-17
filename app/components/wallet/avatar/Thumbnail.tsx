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
        'flex items-center justify-center rounded-full bg-lime-400'
      )}
    >
      {src ? (
        <Image
          src={src}
          alt='avatar'
          width={26}
          height={26}
          objectFit='cover'
          objectPosition='center'
        />
      ) : (
        <Jazzicon diameter={26} seed={jsNumberForAddress(address)} />
      )}
    </div>
  )
}

export default AvatarThumbnail
