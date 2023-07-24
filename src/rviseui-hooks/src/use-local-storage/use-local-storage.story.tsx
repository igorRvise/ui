import React from 'react'
import { useLocalStorage } from './use-local-storage'

export default {
  title: 'Hooks/use-local-storage',
}

export function Usage() {
  const [value, setValue] = useLocalStorage<string>({
    key: '@rviseui/localStorage/val',
    defaultValue: 'Value persists through reloads and changes across multiple tabs',
  })

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export function SerializeJson() {
  const [value, setValue] = useLocalStorage<{ rvise: string }>({
    key: '@rviseui/localStorage/val',
    defaultValue: { rvise: 'is awesome' },
  })

  const [value2, setValue2] = useLocalStorage<{ rvise: string }>({
    key: '@rviseui/localStorage/val',
    defaultValue: { rvise: 'is awesome' },
  })

  const [value3, setValue3] = useLocalStorage<{ rvise: string }>({
    key: '@rviseui/localStorage/another-value',
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
  const [value, setValue] = useLocalStorage<boolean>({
    key: '@rviseui/localStorage/val',
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
  const [value, setValue] = useLocalStorage<string>({
    key: 'some-value',
    defaultValue: '',
  })

  const [value2] = useLocalStorage<string>({
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
