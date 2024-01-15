import { defineStore } from 'pinia'; 

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 1,
  }),  // component의 상태 역할
  getters: {
    doubleCount: state => state.counter * 2,
  },  // component의 computed 역할
  actions: {
    increment() {
      this.counter++;
    }
  },  // component의 method 역할
})