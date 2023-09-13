import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const LanguageSelector = () => {
  return (
    <div className='flex cursor-pointer items-center justify-center space-x-px'>
      <ChevronDownIcon width={22} />
      <span className='font-bold'>pt</span>
    </div>
  )
}

export default LanguageSelector
