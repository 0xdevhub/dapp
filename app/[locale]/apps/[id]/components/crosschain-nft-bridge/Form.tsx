'use client'

import { Heading } from '@/app/components/typography'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid'
import { Selector } from '.'
import AddressField from './AddressField'
import { Chain } from '@/app/config/types'
import { BridgeButton } from './BridgeButton'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useI18n } from '@/locales/client'
import { ethers } from 'ethers'
import TokenIdField from './TokenIdField'
export type FormProps = {
  sourceChain: Chain
  destionationChain: Chain
  onSwitch: () => void
}

export const Form = ({
  sourceChain,
  destionationChain,
  onSwitch
}: FormProps) => {
  const t = useI18n()
  const methods = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(
      z.object({
        erc721Address: z.string().refine((v) => ethers.isAddress(v)),
        erc721TokenId: z.string().refine((v) => v.length > 0)
      })
    )
  })

  const handleSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
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
              className='text-lime-400'
            >
              <ArrowPathRoundedSquareIcon
                width={24}
                height={24}
                fill='currentColor'
              />
            </button>
          </div>
          <Selector
            chain={destionationChain}
            label={t('PAGES.APPS.CROSSCHAIN_NFT_BRIDGE.TO')}
            displayBlockExplorer
          />
        </div>
        <BridgeButton
          sourceChain={sourceChain}
          destinationChain={destionationChain}
        />
      </form>
    </FormProvider>
  )
}

export default Form
