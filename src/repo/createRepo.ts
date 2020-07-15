import { DependencyList, useEffect, useState } from 'react'

function createId() {
  return `callback-${Math.random()}`
}

interface Params {
  save?: boolean
}

export default function <State>(
  initialState: State,
  options?: {
    onSetState?: (val: State, params: Params, prevState: State) => void
  }
) {
  type Callback = (val: State, params?: Params) => void
  const callbacks: Record<string, Callback> = {}

  const subscribe = (callback: Callback) => {
    const id = createId()
    callbacks[id] = callback
    return id
  }

  const unsubscribe = (id: string) => {
    delete callbacks[id]
  }

  return {
    getState: () => initialState,
    useState: () => {
      const [state, setState] = useState<State>(initialState)

      useEffect(() => {
        const id = subscribe(setState)
        return () => unsubscribe(id)
      }, [setState])

      return state
    },
    setState: (val: State, params: Params = { save: true }) => {
      if (options?.onSetState) {
        options.onSetState(val, params, initialState)
      }
      initialState = val

      Object.keys(callbacks).forEach((key) => {
        callbacks[key](val)
      })
    },
    subscribe,
    unsubscribe,
    useEffect: (callback: Callback, deps?: DependencyList) => {
      useEffect(() => {
        const id = subscribe(callback)
        return () => unsubscribe(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [callback].concat(deps || []))
    }
  }
}
