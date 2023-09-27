import Image from 'next/image'

export const HeaderShadow = () => (
  <Image
    className='select-none opacity-40 dark:opacity-100'
    src='/assets/images/header/shadow.png'
    alt='header shadow'
    priority
    fill
  />
)

export default HeaderShadow
