import Card from '@/app/components/card/Card'
import { CommandLineIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid'

export const AsideNavigation = () => {
  return (
    <Card className='flex rounded-lg'>
      <aside>
        <ul className='flex flex-col'>
          <li className='flex cursor-pointer flex-col items-center space-y-2 p-6 text-secondary dark:text-lime-400'>
            <span>
              <PuzzlePieceIcon width={20} />
            </span>
            <span className='font-bold'>App</span>
          </li>
          <li className='flex cursor-not-allowed flex-col items-center space-y-2 p-6 opacity-70 dark:opacity-30'>
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
    </Card>
  )
}

export default AsideNavigation
