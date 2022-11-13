export default function createMockApi<T>(data: T, timeout?: number) {
  return async (args?: any) => {
    await new Promise(res => setTimeout(() => res(null), timeout))
    return {
      json: async () => {
        return data
      }
    }
  }
}
