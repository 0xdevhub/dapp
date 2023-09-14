const cropDecimals = (value?: string) => {
  return value ? value.slice(0, value.indexOf('.') + 5) : '0'
}

export const balanceUtils = {
  cropDecimals
}

export default balanceUtils
