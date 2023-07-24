import React from 'react'
import { renderHook } from '@testing-library/react'
import { RviseProvider } from '@rviseui/core'
import { useNotifications } from './use-notifications'
import { NotificationsProvider } from '../NotificationsProvider/NotificationsProvider'

describe('@rviseui/notifications/use-notifications', () => {
  it('returns context value of NotificationsProvider', () => {
    const wrapper = ({ children }) => (
      <RviseProvider>
        <NotificationsProvider>{children}</NotificationsProvider>
      </RviseProvider>
    )

    const hook = renderHook(() => useNotifications(), { wrapper })
    expect(hook.result.current.notifications).toBeDefined()
    expect(hook.result.current.queue).toBeDefined()
  })
})
