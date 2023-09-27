const cropDecimals = (value?: string, maxDecimals = 5) => {
  return value ? value.slice(0, value.indexOf('.') + maxDecimals) : '0'
}

export const balanceUtils = {
  cropDecimals
}

export default balanceUtils
