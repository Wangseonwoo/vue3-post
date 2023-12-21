<template>
  <div>
    <h2>{{form.title}}</h2>
    <p>{{form.content}}</p>
    <p class="text-muted">{{form.createdAt}}</p>
    <hr class="my-4">
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto">
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {  useRouter } from 'vue-router';
  import { getPostById } from '@/api/posts';
  import { ref } from 'vue';

  const props = defineProps({
    // id: String route.index에서 props를 true로 설정 했을떄
    id: Number, // parseInt를 활용해서 props를 전송할 때
  })
  const router =  useRouter();
  const form = ref({});
  
  //  ref 
  //  장) 객체 할당 가능, 일관성
  //  단) .value
  //
  //  reactive
  //  장) .value 안씀
  //  단) 객체 할당 불가능

  const goListPage = () => {
    router.push({name:'PostList'});
  }
  const goEditPage = () => {
    router.push({name:'PostEdit', params:{ id:props.id } });
  }
  const fetchPost = () => {
    const data = getPostById(props.id)
    form.value = {...data};
  }
  fetchPost();
</script>

<style lang="scss" scoped>

</style>