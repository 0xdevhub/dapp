'use client'

import { Locales } from '@/locales/locales'
import { useI18n } from '@/locales/client'
import { HeadingNavigation } from '@/app/components/typography'
import { Typography } from '@/app/components'

export const AppsContainer = () => {
  const t = useI18n()

  return (
    <div className='w-full p-6'>
      <div className='flex flex-col space-y-4'>
        <HeadingNavigation as='h2'>{t(Locales.APPS)}</HeadingNavigation>
        <Typography.Text className='max-w-lg' variant='span'>
          Enjoy thousand of the latest ethereum apps, games, music, movies, TV,
          books, magazines & more. Anytime, anywhere, across your devices.
        </Typography.Text>
      </div>
    </div>
  )
}

export default AppsContainer
