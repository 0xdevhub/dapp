import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { SocialMedia } from '@/app/components/social/SocialMedia'

export const Footer = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <footer
      {...props}
      className={classNames(className, 'flex items-start container')}
    >
      <SocialMedia className='text-black/60' />
    </footer>
  )
}

export default Footer
