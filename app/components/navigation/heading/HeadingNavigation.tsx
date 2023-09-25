'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Heading, HeadingProps } from '@/app/components/typograph/Heading'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'

type HeadingNavigationProps = HeadingProps & {
  label: string
}

export const HeadingNavigation = ({
  label,
  className,
  ...props
}: HeadingNavigationProps) => {
  const router = useRouter()

  return (
    <Heading {...props} className={classNames(className, 'flex space-x-2 ')}>
      <ArrowLeftIcon
        width={16}
        className='cursor-pointer'
        onClick={router.back}
      />
      <span>{label}</span>
    </Heading>
  )
}
export default HeadingNavigation
