import { type HTMLProps } from 'react'
import { SettingsSelector } from './Selector'
import { SettingsContainer } from './Container'
import { OverlayToggle } from '@/app/components/toggle/OverlayToggle'

export const Settings = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <OverlayToggle
      {...props}
      selector={<SettingsSelector />}
      container={<SettingsContainer />}
    />
  )
}

export default Settings
