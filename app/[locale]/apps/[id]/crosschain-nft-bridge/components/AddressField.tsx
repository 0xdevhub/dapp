'use client'

import { Card } from '@/app/components'
import { Heading } from '@/app/components/typography'
import { useI18n } from '@/locales/client'
import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'

export const AddressField = () => {
  const t = useI18n()
  const { register, formState } = useFormContext()
  return (
    <label htmlFor='erc721Address'>
      <Heading as='h4'>
        {t('PAGES.APPS.CROSSCHAIN_NFT_BRIDGE.ERC721_ADDRESS')}
      </Heading>
      <Card
        className={classNames(
          'rounded-md',

          {
            'border border-red-500': formState.errors.erc721Address
          }
        )}
      >
        <input
          type='text'
          placeholder='0x'
          className={classNames(
            'm-1 w-full bg-transparent px-3 py-1 outline-none'
          )}
          {...register('erc721Address')}
        />
      </Card>
    </label>
  )
}

export default AddressField
