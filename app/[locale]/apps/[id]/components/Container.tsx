'use client'

import { useI18n } from '@/locales/client'
import {
  CrosschainNFTBridge,
  CrosschainNFTBridgeAppIdMumbai,
  CrosschainNFTBridgeAppIdFuji
} from '../crosschain-nft-bridge/components/CrosschainNFTBridge'

export type AppLayoutProps = {
  params: { id: string }
}

export const PageContainer = ({ params }: AppLayoutProps) => {
  const { id } = params

  const Component = {
    [CrosschainNFTBridgeAppIdMumbai]: CrosschainNFTBridge,
    [CrosschainNFTBridgeAppIdFuji]: CrosschainNFTBridge
  }[id]

  if (Component) return <Component id={id} />

  const t = useI18n()

  return <div>{t('FEEDBACK.NO_WIDGET_AVAILABLE')}</div>
}

export default PageContainer
