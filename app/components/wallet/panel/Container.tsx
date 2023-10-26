'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { useWallet, useBalance } from '@/app/lib/wallet/hooks'
import addressUtils from '@/app/lib/utils/address'
import useNetwork from '@/app/lib/wallet/hooks/useNetwork'
import balanceUtils from '@/app/lib/utils/balance'
import { Square2StackIcon } from '@heroicons/react/24/outline'
import { useCopyToClipboard } from 'usehooks-ts'
import { Typography } from '@/app/components'
import { Network } from '../network/Network'
import { ButtonDisconnect } from '../button'
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
        <div className='flex flex-col space-y-1'>
          <Typography.Heading as='h4'>{t(Locales.WALLET)}</Typography.Heading>
          <div className='flex justify-between space-x-4'>
            <Typography.Text as='span'>
              {addressUtils.toEllipsis(address!, 8, 6)}
            </Typography.Text>
            <Square2StackIcon
              onClick={() => copy(address!)}
              width={18}
              className='cursor-pointer  active:text-secondary active:dark:text-lime-400'
            />
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <Typography.Heading as='h4'>{t(Locales.NETWORK)}</Typography.Heading>
          <Network chain={chain!} chains={chains} />
        </div>
        <div className='flex flex-col space-y-1'>
          <Typography.Heading as='h4'>{t(Locales.BALANCE)}</Typography.Heading>
          <div className='flex space-x-2'>
            <Typography.Text>
              {balanceUtils.cropDecimals(balance?.formatted)}
            </Typography.Text>
            <Typography.Text as='span'>{balance?.symbol}</Typography.Text>
          </div>
        </div>
      </div>
      <div>
        <ButtonDisconnect />
      </div>
    </section>
  )
}

export default PanelContainer
