'use client'

import { Heading, Text } from '@/app/components/typography'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid'
import { Selector } from '.'
import { AddressField } from './AddressField'
import { Chain } from '@/app/config/types'
import { BridgeButton } from './BridgeButton'
import { useFormContext } from 'react-hook-form'
import { useI18n } from '@/locales/client'
import { TokenIdField } from './TokenIdField'
import { useBridge } from '../lib/hooks/useBridge'

export type FormData = {
  erc721Address: string
  erc721TokenId: string
  bridgeFees: string
}

export type FormProps = {
  sourceChain: Chain
  destinationChain: Chain
  onSwitch: () => void
}

export const Form = ({
  sourceChain,
  destinationChain,
  onSwitch
}: FormProps) => {
  const t = useI18n()

  const { watch, handleSubmit } = useFormContext()

  const { bridge, isLoading, status } = useBridge({
    destinationChain,
    ERC721Address: watch('erc721Address'),
    ERC721TokenId: watch('erc721TokenId'),
    fee: watch('bridgeFees')
  })

  return (
    <form
      onSubmit={handleSubmit(bridge)}
      noValidate
      className='flex flex-col space-y-4'
    >
      <div className='flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
        <AddressField />
        <TokenIdField />
      </div>
      <div className='flex flex-col space-y-2'>
        <Heading as='h4'>{t('NETWORK.TITLE')}</Heading>
        <Selector
          chain={sourceChain}
          label={t('PAGES.APPS.CROSSCHAIN_NFT_BRIDGE.FROM')}
        />
        <div className='flex justify-center'>
          <button
            aria-label='Switch'
            type='button'
            onClick={onSwitch}
            className='text-third-300 dark:text-lime-400'
          >
            <ArrowPathRoundedSquareIcon
              width={24}
              height={24}
              fill='currentColor'
            />
          </button>
        </div>
        <Selector
          chain={destinationChain}
          label={t('PAGES.APPS.CROSSCHAIN_NFT_BRIDGE.TO')}
          displayBlockExplorer
        />
      </div>
      <BridgeButton
        loading={isLoading}
        sourceChain={sourceChain}
        destinationChain={destinationChain}
      />
      {!isLoading && status === 'success' && (
        <p className='text-green-500'>
          <Text>
            {t('PAGES.APPS.CROSSCHAIN_NFT_BRIDGE.FEEDBACK.SUCCESS_TO')}
          </Text>
          <Text>{destinationChain.name}!</Text>
        </p>
      )}

      {!isLoading && status === 'error' && (
        <p className='text-red-500'>
          {t('PAGES.APPS.CROSSCHAIN_NFT_BRIDGE.FEEDBACK.ERROR_TO')}
        </p>
      )}
    </form>
  )
}

export default Form
