import { Children, type HTMLProps, type SVGProps } from 'react'
import { Discord, X, Github } from './icons'
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
          <Link
            href={href}
            title={label}
            target='_blank'
            className='hover:opacity-60'
          >
            {
              {
                discord: <Discord {...iconProps} />,
                x: <X {...iconProps} />,
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
