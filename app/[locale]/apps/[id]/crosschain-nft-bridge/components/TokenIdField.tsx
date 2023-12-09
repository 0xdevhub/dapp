import { Card } from '@/app/components'
import { Heading } from '@/app/components/typography'
import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'

export const TokenIdField = () => {
  const { register, formState } = useFormContext()
  return (
    <>
      <style jsx>{``}</style>
      <label htmlFor='erc721TokenId'>
        <Heading as='h4'>Token ID</Heading>
        <Card
          className={classNames(
            'rounded-md',

            {
              'border border-red-500': formState.errors.erc721TokenId
            }
          )}
        >
          <input
            type='number'
            placeholder='0'
            className={classNames(
              'm-1 w-full appearance-none bg-transparent px-3 py-1 outline-none [&::-webkit-inner-spin-button]:appearance-none'
            )}
            {...register('erc721TokenId')}
          />
        </Card>
      </label>
    </>
  )
}

export default TokenIdField
