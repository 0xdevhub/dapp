export const getChainRPCById = (network: number) => {
  const HTTP_RPC = `NEXT_PUBLIC_NETWORK_${network}_HTTP_RPC`
  const WS_RPC = `NEXT_PUBLIC_NETWORK_${network}_WS_RPC`

  const config = {
    http: [process.env[HTTP_RPC]!],
    webSocket: ['']
  }

  if (process.env[WS_RPC]) {
    config.webSocket = [process.env[WS_RPC]!]
  }

  return config
}
