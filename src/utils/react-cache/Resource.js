export const Resource = {
  /**
   * This method can be useful for aggregating the results of multiple resources. It is currently
   * the only way to `read()` from two or more resources concurrently; this is due to the underlying
   * implementation of the `read()` method.
   * @param {Resource[]} resources - an array of resources
   */
  all(resources) {
    const aggregateResource = {
      read(inputs = []) {
        const results = resources.map((resource, i) => {
          const input = inputs[i]
          try {
            return resource.read(input)
          } catch (thenableOrError) {
            return thenableOrError
          }
        })
        const error = results.find(result => result instanceof Error)
        if (error) throw error
        const thenables = results.filter(result => result instanceof Promise)
        if (thenables.length) throw Promise.all(thenables)
        return results
      },
      preload(inputs = []) {
        resources.forEach((resource, i) => {
          const input = inputs[i]
          resource.preload(input)
        })
      }
    }
    return aggregateResource
  }
}
