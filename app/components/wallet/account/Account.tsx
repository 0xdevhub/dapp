import { type HTMLProps } from 'react'
import { AccountContainer } from './Container'
import { AccountSelector } from './Selector'
import { OverlayToggle } from '@/app/components/toggle/OverlayToggle'

export const Account = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <OverlayToggle
      {...props}
      selector={<AccountSelector />}
      container={<AccountContainer />}
    />
  )
}
export default Account
