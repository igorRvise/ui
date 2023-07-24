import { defaultRviseEmotionCache } from './default-emotion-cache'
import { useRviseEmotionCache } from '../theme/RviseProvider'

export function useEmotionCache() {
  const cache = useRviseEmotionCache()
  return cache || defaultRviseEmotionCache
}
