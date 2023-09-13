import classNames from 'classnames'
import { type HTMLProps } from 'react'
import Jazzicon from 'react-jazzicon'

type AvatarThumbnailProps = HTMLProps<HTMLDivElement> & {
  src?: string
}

export const AvatarThumbnail = ({
  src,
  className,
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
      {src ? <img src={src} alt='avatar' /> : <Jazzicon diameter={36} />}
    </div>
  )
}

export default AvatarThumbnail
