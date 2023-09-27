'use client'

import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { Heading, HeadingProps } from '@/app/components/typography/Heading'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'

export const HeadingNavigation = ({
  className,
  children,
  ...props
}: HeadingProps) => {
  const router = useRouter()

  return (
    <Heading {...props} className={classNames(className, 'flex space-x-2 ')}>
      <ArrowLongLeftIcon
        width={24}
        className='cursor-pointer'
        onClick={router.back}
      />
      <span>{children}</span>
    </Heading>
  )
}
export default HeadingNavigation
