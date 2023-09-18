import { type HTMLProps } from 'react'
import { ToggleContent } from '@/app/components/toggle/ToggleContent'
import { ChainConfig } from '@/app/lib/wallet/hooks/useNetwork'
import { NetworkList } from './List'
import { NetworkSelector } from './Selector'
import classNames from 'classnames'

type NetworkProps = HTMLProps<HTMLUListElement> & {
  chain: ChainConfig
  chains: ChainConfig[]
}

export const Network = ({ chain, chains, ...props }: NetworkProps) => {
  return (
    <ToggleContent
      key='network-toggle'
      {...props}
      className={classNames(props.className, 'flex flex-col space-y-2')}
      element={({ onClick, isOpen }) => (
        <NetworkSelector onClick={onClick} chain={chain} isOpen={isOpen} />
      )}
    >
      <NetworkList chain={chain} chains={chains} />
    </ToggleContent>
  )
}

export default Network
