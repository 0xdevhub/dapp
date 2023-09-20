'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { useWallet, useBalance } from '@/app/lib/wallet/hooks'
import addressUtils from '@/app/lib/utils/address'
import { Heading } from '@/app/components/Heading'
import balanceUtils from '@/app/lib/utils/balance'
import { Square2StackIcon } from '@heroicons/react/24/outline'
import { useCopyToClipboard } from 'usehooks-ts'
import { Network } from '../network'
import useNetwork from '@/app/lib/wallet/hooks/useNetwork'
import { DisconnectButton } from '../button/Disconnect'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'

export const PanelContainer = ({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  const t = useI18n()
  const { balance } = useBalance()
  const { chain, chains } = useNetwork()
  const { address } = useWallet()
  const [, copy] = useCopyToClipboard()

  return (
    <section
      {...props}
      className={classNames(
        className,
        'flex flex-col justify-between space-y-4 p-6 lg:p-4'
      )}
    >
      <div className='flex flex-col space-y-4'>
        <Heading
          variant='h4'
          className='border-b border-zinc-200 pb-2 dark:border-gray-800'
        >
          {t(Locales.PANEL_WALLET_TITLE)}
        </Heading>
        <div className='flex flex-col space-y-1'>
          <Heading variant='h5'>ID</Heading>
          <div className='flex justify-between space-x-4'>
            <p>{addressUtils.toEllipsis(address!, 8, 6)}</p>
            <Square2StackIcon
              onClick={() => copy(address!)}
              width={18}
              className='cursor-pointer  active:text-lime-400'
            />
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <Heading variant='h5'>
            {t(Locales.PANEL_WALLET_NETWORK_LABEL)}
          </Heading>
          <Network chain={chain!} chains={chains} />
        </div>
        <div className='flex flex-col space-y-1'>
          <Heading variant='h5'>
            {t(Locales.PANEL_WALLET_BALANCE_LABEL)}
          </Heading>
          <div className='flex space-x-2'>
            <span>{balanceUtils.cropDecimals(balance?.formatted)}</span>
            <span>{balance?.symbol}</span>
          </div>
        </div>
      </div>
      <div>
        <DisconnectButton />
      </div>
    </section>
  )
}

export default PanelContainer
