import { Children, HTMLProps, SVGProps } from 'react'
import DiscordIcon from './icons/Discord'
import TwitterIcon from './icons/Twitter'
import classNames from 'classnames'
import { socialMedia } from '@/app.config'
import Link from 'next/link'
import GithubIcon from './icons/Github'

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
                discord: <DiscordIcon {...iconProps} />,
                twitter: <TwitterIcon {...iconProps} />,
                github: <GithubIcon {...iconProps} />
              }[icon]
            }
          </Link>
        </li>
      ))
    )}
  </ul>
)

export default SocialMedia
