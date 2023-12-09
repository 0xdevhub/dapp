import { ethers } from 'ethers'

export const abiCoder = ethers.AbiCoder.defaultAbiCoder()

export const coderUtils = {
  abiCoder
}

export default coderUtils
