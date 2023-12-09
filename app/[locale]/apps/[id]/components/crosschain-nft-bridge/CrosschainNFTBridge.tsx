'use client'

import { Card } from '@/app/components'
import { allowedChainsConfig } from '@/app/config/config'
import { useMemo, useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'
import { useNetwork } from 'wagmi'
import { Requirements } from './Requirements'
import { Form } from './Form'

export const CrosschainNFTBridgeAppIdMumbai =
  '0x3581ded89c04be046f61dbf380aff24bbb4d1866010c64302ad872e61a44c06023000000'

export const CrosschainNFTBridgeAppIdFuji =
  '0xd53a723850e67d08016c7d6f115d60d59bc9c6bd6a8c75875bb6f15719ee8d6a00000000'

const bridgeChains = [allowedChainsConfig[80001], allowedChainsConfig[43113]]

export const CrosschainNFTBridge = () => {
  const [chains, setChains] = useState(bridgeChains)
  const { chain } = useNetwork()

  const sourceChain = useMemo(() => chains[0], [chains])
  const destionationChain = useMemo(() => chains[1], [chains])

  const handleSwitch = () => {
    setChains((currentChains) => [currentChains[1], currentChains[0]])
  }

  useEffectOnce(() => {
    const [mumbai, fuji] = [bridgeChains[0].id, bridgeChains[1].id]

    const sourceChainId = chain?.id === mumbai ? mumbai : fuji
    const destinationChainId = sourceChainId === mumbai ? fuji : mumbai

    setChains(() => [
      allowedChainsConfig[sourceChainId],
      allowedChainsConfig[destinationChainId]
    ])
  })

  return (
    <div className='flex  justify-center'>
      <Card className='flex w-full flex-col space-y-4 rounded-md p-4 lg:w-auto lg:min-w-[26rem]'>
        <Form
          onSwitch={handleSwitch}
          sourceChain={sourceChain}
          destionationChain={destionationChain}
        />
        <Requirements />
      </Card>
    </div>
  )
}

export default CrosschainNFTBridge
