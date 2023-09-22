import SocialMedia from '@/app/components/social/SocialMedia'
import classNames from 'classnames'
import { HTMLProps } from 'react'

export const Footer = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <footer
      {...props}
      className={classNames(className, 'flex items-start container')}
    >
      <SocialMedia />
    </footer>
  )
}

export default Footer
