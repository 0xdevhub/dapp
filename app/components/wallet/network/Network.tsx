import { type HTMLProps } from 'react'
import { ToggleContent } from '@/app/components/ToggleContent'
import { ChainConfig } from '@/app/lib/wallet/hooks/useNetwork'
import { NetworkList } from './List'
import { NetworkSelector } from './Selector'

type NetworkProps = HTMLProps<HTMLUListElement> & {
  chain: ChainConfig
  chains: ChainConfig[]
}

export const Network = ({ chain, chains, ...props }: NetworkProps) => {
  return (
    <ToggleContent
      key='network-toggle'
      className='flex flex-col space-y-2'
      element={({ onClick, isOpen }) => (
        <NetworkSelector onClick={onClick} chain={chain} isOpen={isOpen} />
      )}
    >
      <NetworkList {...props} chain={chain} chains={chains} />
    </ToggleContent>
  )
}

export default Network
