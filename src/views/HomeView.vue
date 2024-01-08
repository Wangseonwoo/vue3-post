<template>
  <div>
    <h2>Home View</h2>
    <h2>{{ $person.name }}</h2>
    <button class="btn btn-primary" @click="person.say">click me</button>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  }
}
</script>
<script setup>
import { inject } from 'vue';


const person = inject('person');
console.log('person.name: ', person.name);
</script>

<style lang="scss" scoped>

</style>