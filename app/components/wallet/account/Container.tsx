'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { useWallet, useBalance } from '@/app/lib/wallet/hooks'
import addressUtils from '@/app/lib/utils/address'
import useNetwork from '@/app/lib/wallet/hooks/useNetwork'
import balanceUtils from '@/app/lib/utils/balance'
import { useI18n } from '@/locales/client'
import { useCopyToClipboard } from 'usehooks-ts'
import { Square2StackIcon } from '@heroicons/react/24/outline'
import { Network } from '../network/Network'
import { AccountDisconnect } from './Disconnect'
import { Heading, Text } from '@/app/components/typography'

export const AccountContainer = ({
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
          <Heading as='h4'>{t('WALLET.TITLE')}</Heading>
          <div className='flex justify-between space-x-4'>
            <Text as='span'>{addressUtils.toEllipsis(address!, 8, 6)}</Text>
            <Square2StackIcon
              onClick={() => copy(address!)}
              width={18}
              className='cursor-pointer  active:text-secondary active:dark:text-lime-400'
            />
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <Heading as='h4'>{t('NETWORK.TITLE')}</Heading>
          <Network chain={chain!} chains={chains} />
        </div>
        <div className='flex flex-col space-y-1'>
          <Heading as='h4'>{t('WALLET.BALANCE')}</Heading>
          <div className='flex space-x-2'>
            <Text>{balanceUtils.formatBalance(balance?.formatted, 2, 2)}</Text>
            <Text as='span'>{balance?.symbol}</Text>
          </div>
        </div>
      </div>
      <div>
        <AccountDisconnect />
      </div>
    </section>
  )
}

export default AccountContainer
