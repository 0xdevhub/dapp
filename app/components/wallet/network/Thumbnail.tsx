import { type HTMLProps } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

type NetworkThumbnailProps = HTMLProps<HTMLDivElement> & {
  src?: string
}

export const NetworkThumbnail = ({
  src,
  className,
  ...props
}: NetworkThumbnailProps) => {
  return (
    <div
      {...props}
      className={classNames(
        className,
        'flex h-6 w-6 items-center justify-center rounded-full bg-white'
      )}
    >
      {src ? (
        <Image src={src} alt='network' width={24} height={24} />
      ) : (
        <div className='font-bold text-black/75'>?</div>
      )}
    </div>
  )
}

export default NetworkThumbnail
