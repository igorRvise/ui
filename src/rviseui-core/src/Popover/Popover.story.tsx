import React, { useState } from 'react'
import { Popover } from './Popover'
import { Button } from '../Button'
import { MultiSelect } from '../MultiSelect'
import { Tooltip } from '../Tooltip'
import { Group } from '../Group'
import { Text } from '../Text'

export default { title: 'Popover' }

export function Uncontrolled() {
  return (
    <div style={{ padding: 40 }}>
      <Popover>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  )
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <Popover disabled>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  )
}

export function WithArrow() {
  return (
    <div style={{ padding: 40 }}>
      <Popover withArrow width={400}>
        <Popover.Target>
          <Button>arrow popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown with arrow</Popover.Dropdown>
      </Popover>
    </div>
  )
}

export function WithArrowRadius() {
  return (
    <div style={{ padding: 40 }}>
      <Popover withArrow width={400} arrowRadius={4}>
        <Popover.Target>
          <Button>arrow popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown with arrow radius</Popover.Dropdown>
      </Popover>
    </div>
  )
}

export function Controlled() {
  const [opened, setState] = useState(false)

  return (
    <div style={{ padding: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Popover
        opened={opened}
        onChange={setState}
        middlewares={{ shift: false, flip: false }}
        position="bottom"
        withArrow
        trapFocus
        radius="md"
        returnFocus>
        <Popover.Target>
          <Button onClick={() => setState((c) => !c)}>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>
          <Button onClick={() => setState(false)}>Close</Button>
        </Popover.Dropdown>
      </Popover>
    </div>
  )
}

export function SameWidth() {
  return (
    <div style={{ padding: 40 }}>
      <Popover width="target" trigger="click">
        <Popover.Target>
          <Button fullWidth>Toggle popover</Button>
        </Popover.Target>
        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  )
}

export function WithinGroup() {
  return (
    <Group grow>
      <Popover>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
      <Button>Regular button</Button>
    </Group>
  )
}

export function PopoverTargetWithTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <Popover>
        <Tooltip label="Tooltip first">
          <Popover.Target>
            <Button>Tooltip first</Button>
          </Popover.Target>
        </Tooltip>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>

      <Popover>
        <Popover.Target>
          <Tooltip label="Tooltip last">
            <Button ml="xl">Tooltip last</Button>
          </Tooltip>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  )
}

export function WithMultiSelect() {
  return (
    <div style={{ padding: 40 }}>
      <Popover width={400}>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>
          <MultiSelect data={['react', 'ng']} defaultValue={['ng']} withinPortal />
        </Popover.Dropdown>
      </Popover>
    </div>
  )
}

export function Inline() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted
      close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <span
            style={{
              background: 'yellow',
            }}>
            When visiting a junkyard
          </span>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven
      colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the
      bearers. This Pokémon is said to live at the foot of a rainbow.
    </Text>
  )
}
