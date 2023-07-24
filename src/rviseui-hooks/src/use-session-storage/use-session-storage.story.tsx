import React from 'react'
import { useSessionStorage } from './use-session-storage'

export default {
  title: 'Hooks/use-session-storage',
}

export function Usage() {
  const [value, setValue] = useSessionStorage<string>({
    key: '@rviseui/sessionStorage/val',
    defaultValue: 'Value persists through reloads.',
  })

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export function SerializeJson() {
  const [value, setValue] = useSessionStorage<{ rvise: string }>({
    key: '@rviseui/sessionStorage/val',
    defaultValue: { rvise: 'is awesome' },
  })

  const [value2, setValue2] = useSessionStorage<{ rvise: string }>({
    key: '@rviseui/sessionStorage/val',
    defaultValue: { rvise: 'is awesome' },
  })

  const [value3, setValue3] = useSessionStorage<{ rvise: string }>({
    key: '@rviseui/sessionStorage/another-value',
    defaultValue: { rvise: 'is awesome' },
  })

  return (
    <div style={{ padding: 20 }}>
      <input value={value.rvise} onChange={(event) => setValue({ rvise: event.target.value })} />
      <input value={value2.rvise} onChange={(event) => setValue2({ rvise: event.target.value })} />
      <input value={value3.rvise} onChange={(event) => setValue3({ rvise: event.target.value })} />
    </div>
  )
}

export function SerializeBoolean() {
  const [value, setValue] = useSessionStorage<boolean>({
    key: '@rviseui/sessionStorage/val',
    defaultValue: true,
  })

  return (
    <div style={{ padding: 20 }}>
      <input
        type="checkbox"
        checked={value}
        onChange={(event) => {
          setValue(event.currentTarget.checked)
        }}
      />
    </div>
  )
}

export function MultipleHooks() {
  const [value, setValue] = useSessionStorage<string>({
    key: 'some-value',
    defaultValue: '',
  })

  const [value2] = useSessionStorage<string>({
    key: 'some-value',
    defaultValue: '',
  })

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <input value={value2} readOnly />
    </div>
  )
}
