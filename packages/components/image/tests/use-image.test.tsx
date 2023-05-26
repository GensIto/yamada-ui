import { FallbackStrategy, shouldShowFallbackImage } from '../src'

type Status = 'loading' | 'failed' | 'pending' | 'loaded'

describe('useImage', () => {
  it.each<{ status: Status; strategy: FallbackStrategy; result: boolean }>([
    { status: 'loading', strategy: 'beforeLoadOrError', result: true },
    { status: 'loaded', strategy: 'beforeLoadOrError', result: false },
    { status: 'failed', strategy: 'beforeLoadOrError', result: true },
    { status: 'pending', strategy: 'beforeLoadOrError', result: true },
    { status: 'loading', strategy: 'onError', result: false },
    { status: 'loaded', strategy: 'onError', result: false },
    { status: 'failed', strategy: 'onError', result: true },
    { status: 'pending', strategy: 'onError', result: false },
  ])(
    'shouldShowFallbackImage with status: $status strategy:$strategy returns $result',
    ({ status, result, strategy }) => {
      expect(shouldShowFallbackImage(status, strategy)).toBe(result)
    },
  )
})
