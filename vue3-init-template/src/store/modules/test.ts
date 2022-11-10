import { defineStore } from 'pinia'

const test = defineStore({
  id: 'test',
  state: () => {
    return {
      val: 0
    }
  },
  getters: {
    getVal(state) {
      return state.val
    }
  },
  actions: {
    changeTest(value: any) {
      this.val = value
    }
  }
})

export default test