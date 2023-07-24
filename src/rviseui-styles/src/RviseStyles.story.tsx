import React from 'react'
import { storiesOf } from '@storybook/react'
import { createStyles } from './tss/create-styles'
import { RviseProvider } from './theme'

const useRefStyles = createStyles((_, __, getRef) => ({
  parent: {
    [`& .${getRef('child')}`]: {
      color: 'red',
    },
  },

  child: {
    ref: getRef('child'),
    color: 'blue',
  },
}))

function UseRefStyles() {
  const { classes } = useRefStyles()
  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.child}>Red child</div>
      </div>
      <div className={classes.child}>Blue child</div>
    </div>
  )
}

const useConsumerStyles = createStyles((_, { color }: { color: string }) => ({
  element: { color },
}))

function RviseProviderConsumer({ color }: { color: string }) {
  const { classes } = useConsumerStyles({ color }, { name: 'Consumer' })
  return <div className={classes.element}>element</div>
}

storiesOf('Styles', module)
  .add('Refs', () => <UseRefStyles />)
  .add('RviseProvider styles', () => (
    <RviseProvider
      theme={{
        components: {
          Consumer: {
            styles: (_, params: { color: string }) => ({
              element: {
                background: params.color === 'red' ? 'black' : 'orange',
              },
            }),
          },
        },
      }}>
      <RviseProviderConsumer color="red" />
      <RviseProviderConsumer color="silver" />
    </RviseProvider>
  ))
