import { DEFAULT_EVM_DECIMALS } from '@/app/config/constants'

export const formatBalance = (
  value?: string | number,
  maximumFractionDigits = 5,
  minimumFractionDigits = 2
) => {
  return Number(value || 0).toLocaleString('en-US', {
    maximumFractionDigits,
    minimumFractionDigits
  })
}

export const slicedDecimals = (
  value: string | number,
  tokenDecimals?: number
) => {
  const [integer, valueDecimals] = String(value).split('.')
  if (!valueDecimals) return integer
  return `${integer}.${valueDecimals.slice(0, tokenDecimals)}`
}

export const formatBigInt = (
  value: string | number | bigint = 0,
  decimalPlaces = DEFAULT_EVM_DECIMALS
) => {
  if (typeof value === 'bigint') {
    return BigInt(`${value.toString()}${'0'.padEnd(decimalPlaces, '0')}`)
  }

  if (!value || Number.isNaN(value)) {
    return BigInt(0)
  }

  const valueAsString = value.toString()
  if (!valueAsString.includes('.')) {
    return BigInt(`${valueAsString}${'0'.padEnd(decimalPlaces, '0')}`)
  }

  const [integer = '0', valueDecimals = '0'] = valueAsString.split('.')
  return BigInt(`${integer}${valueDecimals.padStart(decimalPlaces, '0')}`)
}

export const balanceUtils = {
  formatBalance,
  formatBigInt,
  slicedDecimals
}

export default balanceUtils
