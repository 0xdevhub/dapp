import Image from 'next/image'

export const HeaderShadow = () => {
  return (
    <Image
      src='/assets/images/header/shadow.png'
      alt='header shadow'
      loading='lazy'
      fill
    />
  )
}

export default HeaderShadow
