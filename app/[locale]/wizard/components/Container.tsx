'use client'
import { Heading } from '@/app/components/Heading'
import { Locales } from '@/locales/locales'
import { useI18n } from '@/locales/client'
import { CommandLineIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid'

export const WizardContainer = () => {
  const t = useI18n()

  return (
    <section className='mt-2 flex flex-col space-y-12 lg:mt-6'>
      <Heading variant='h2'>{t(Locales.HEADING_WIZARD_TITLE)}</Heading>
      <div className='flex w-full rounded-lg bg-white/75 backdrop-blur dark:bg-black/75'>
        <aside>
          <ul className='flex flex-col'>
            <li className='flex cursor-pointer flex-col items-center space-y-2 p-6 text-secondary'>
              <span>
                <PuzzlePieceIcon width={20} />
              </span>
              <span className='font-bold'>App</span>
            </li>
            <li className='flex cursor-not-allowed flex-col items-center space-y-2 p-6 opacity-30'>
              <span>
                <CommandLineIcon width={20} />
              </span>
              <span>Modulo</span>
            </li>
          </ul>
        </aside>
        <div className='flex-1 rounded-lg border-l-2 border-secondary p-6 dark:border-lime-400'>
          content
        </div>
      </div>
    </section>
  )
}

export default WizardContainer
