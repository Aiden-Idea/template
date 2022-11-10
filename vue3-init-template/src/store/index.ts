import test from './modules/test'

export default function useStore() {
  return {
    test: test(),
  }
}