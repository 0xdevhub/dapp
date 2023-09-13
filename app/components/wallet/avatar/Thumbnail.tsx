import { type HTMLProps } from 'react'
import classNames from 'classnames'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import Image from 'next/image'

type AvatarThumbnailProps = HTMLProps<HTMLDivElement> & {
  src?: string
  address?: string
}

const GENERIC_32 = new Uint32Array(10)

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
        <Jazzicon
          diameter={36}
          seed={jsNumberForAddress(
            address || crypto.getRandomValues(GENERIC_32).join('')
          )}
        />
      )}
    </div>
  )
}

export default AvatarThumbnail
