import { Children, type HTMLProps, type SVGProps } from 'react'
import { Discord, Twitter, Github } from './icons'
import classNames from 'classnames'
import { socialMedia } from '@/app.config'
import Link from 'next/link'

export type SocialMediaProps = HTMLProps<HTMLUListElement> & {
  iconProps?: SVGProps<SVGSVGElement>
}

export const SocialMedia = ({
  className,
  iconProps,
  ...props
}: SocialMediaProps) => (
  <ul
    {...props}
    className={classNames(className, 'flex justify-center space-x-2')}
  >
    {Children.toArray(
      socialMedia.map(({ href, label, icon }) => (
        <li>
          <Link href={href} title={label} target='_blank'>
            {
              {
                discord: <Discord {...iconProps} />,
                twitter: <Twitter {...iconProps} />,
                github: <Github {...iconProps} />
              }[icon]
            }
          </Link>
        </li>
      ))
    )}
  </ul>
)

export default SocialMedia
