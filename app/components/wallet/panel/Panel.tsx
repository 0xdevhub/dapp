import { type HTMLProps } from 'react'
import { PanelContainer } from './Container'
import { PanelSelector } from './Selector'
import { OverlayToggle } from '@/app/components/toggle/OverlayToggle'

export const Panel = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <OverlayToggle
      {...props}
      selector={<PanelSelector />}
      container={<PanelContainer />}
    />
  )
}
export default Panel
