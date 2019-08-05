import React, { createContext } from 'react'
import { createLRU } from './LRU'

const PENDING = 0
const RESOLVED = 1
const REJECTED = 2

const ReactCurrentDispatcher =
  React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher

function readContext(Context, observedBits) {
  const dispatcher = ReactCurrentDispatcher.current
  if (dispatcher === null) {
    throw new Error(
      'react-cache: read and preload may only be called from within a ' +
        "component's render. They are not supported in event handlers or " +
        'lifecycle methods.'
    )
  }
  return dispatcher.readContext(Context, observedBits)
}

function identityHashFn(input) {
  return input
}

const CACHE_LIMIT = 500
const lru = createLRU(CACHE_LIMIT)

const entries = new Map()

const CacheContext = createContext(null)

function deleteEntry(resource, key) {
  const entriesForResource = entries.get(resource)
  if (entriesForResource !== undefined) {
    entriesForResource.delete(key)
    if (entriesForResource.size === 0) {
      entries.delete(resource)
    }
  }
}

function accessResult(resource, fetch, input, key) {
  let entriesForResource = entries.get(resource)
  if (entriesForResource === undefined) {
    entriesForResource = new Map()
    entries.set(resource, entriesForResource)
  }
  let entry = entriesForResource.get(key)
  if (entry === undefined) {
    const thenable = fetch(input)
    thenable.then(
      value => {
        if (newResult.status === PENDING) {
          const resolvedResult = newResult
          resolvedResult.status = RESOLVED
          resolvedResult.value = value
        }
      },
      error => {
        if (newResult.status === PENDING) {
          const rejectedResult = newResult
          rejectedResult.status = REJECTED
          rejectedResult.value = error
        }
      }
    )
    const newResult = {
      status: PENDING,
      value: thenable
    }
    const newEntry = lru.add(newResult, deleteEntry.bind(null, resource, key))
    entriesForResource.set(key, newEntry)
    return newResult
  } else {
    return lru.access(entry)
  }
}

export function createResource(fetch, maybeHashInput) {
  const hashInput = maybeHashInput !== undefined ? maybeHashInput : identityHashFn

  const resource = {
    read(input) {
      // react-cache currently doesn't rely on context, but it may in the
      // future, so we read anyway to prevent access outside of render.
      readContext(CacheContext)
      const key = hashInput(input)
      const result = accessResult(resource, fetch, input, key)
      switch (result.status) {
        case PENDING: {
          const suspender = result.value
          throw suspender
        }
        case RESOLVED: {
          const value = result.value
          return value
        }
        case REJECTED: {
          const error = result.value
          throw error
        }
        default:
          // Should be unreachable
          return undefined
      }
    },

    preload(input) {
      // react-cache currently doesn't rely on context, but it may in the
      // future, so we read anyway to prevent access outside of render.
      readContext(CacheContext)
      const key = hashInput(input)
      accessResult(resource, fetch, input, key)
    }
  }
  return resource
}

export function setGlobalCacheLimit(limit) {
  lru.setLimit(limit)
}
