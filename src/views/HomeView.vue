<template>
  <div>
    <h2>Home View</h2>
    <!-- <h2>{{ $person.name }}</h2> -->
    <!-- <button class="btn btn-primary" @click="person.say">click me</button> -->
    <h2>{{ position }}</h2>
    <h2>x: {{ x }} y: {{ y }}</h2>
    <hr>
    <div>
      Mouse position is at: {{ e }}, {{ z }}
    </div>
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
// import { onUnmounted } from 'vue';
// import { onMounted } from 'vue';
// import { ref } from 'vue';
import { toRefs } from 'vue';
// import { toRef } from 'vue';
// import { ref } from 'vue';
import { reactive } from 'vue';
// import { inject } from 'vue';
import { useMouse } from '@/composables/mouse'


// const e = ref(0);
// const z = ref(0);

// function update(event) {
//   e.value = event.pageX
//   z.value = event.pageY
// }

// onMounted(() => window.addEventListener('mousemove', update));
// onUnmounted(() => window.removeEventListener('mousemove', update));

const {e, z} = useMouse();
// const person = inject('person');
// console.log('person.name: ', person.name);

const position = reactive({
  x: 100,
  y: 1000,
});

// const x = position.x;
// console.log(typeof x);
// const {x, y} = position;
// console.log(typeof x);
// console.log(typeof y); 위으 경우는 반응 성을 잃어버림
// 아래의 경우는 반응성은 가지나  동기화 된것이 아님
// const x = ref(position.x);
// const y = ref(position.y);
// console.log(typeof x.value);
// console.log(typeof y.value);

// const x = toRef(position, 'x'); // 동기화 하여 반응형 객체를 가져욤
// const y = toRef(position, 'y'); // 동기화 하여 반응형 객체를 가져욤
const { x, y} =toRefs(position); // 구조 분해 할당을하여 동기화된 반응형 객체 만들기
</script>

<style lang="scss" scoped>

</style>