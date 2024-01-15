<template>
  <div>
    <h2>About View</h2>
    <hr>
    <h2>store</h2>
    <p>counter: {{ store.counter }}</p>
    <p>doubleCount: {{ store.doubleCount }}</p>
    <p>counter: {{ counter }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <button @click="store.increment()">Click!!</button>
    <button @click="increment()">Click!!</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';

const store = useCounterStore();
// const { counter } = store; 반응성을 잃어버림
const { counter, doubleCount } = storeToRefs(store); // 반응성을 유지한체 구조분해 할당 가능
const { increment } = store // 함수이기 떄문에 그냥 구조분해 할당으로 가져올수 있음
// counter.value = 100 가능 vuex에서는 못하지만 피니아에서는 가능
</script>

<style lang="scss" scoped>

</style>