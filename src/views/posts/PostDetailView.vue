<template>
  <div>
    <h2>{{post.title}}</h2>
    <p>{{post.content}}</p>
    <p class="text-muted">{{$dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss')}}</p>
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
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {  useRouter } from 'vue-router';
  import { getPostById, deletePost } from '@/api/posts';
  import { ref } from 'vue';

  const props = defineProps({
    // id: String route.index에서 props를 true로 설정 했을떄
    id: String, // parseInt를 활용해서 props를 전송할 때
  })
  const router =  useRouter();
  const post = ref({});
  
  //  ref 
  //  장) 객체 할당 가능, 일관성
  //  단) .value
  //
  //  reactive
  //  장) .value 안씀
  //  단) 객체 할당 불가능
  
  const fetchPost = async () => {
    try {
      const response = await getPostById(props.id)
      setPost(response.data);
    } catch(error) {
      console.error(error);
    }
  }
  const setPost = ({title, content, createdAt}) => {
    post.value.title = title;
    post.value.content = content;
    post.value.createdAt = createdAt;
  }
  fetchPost();

  const remove = async () => {
    try {
      if (confirm('삭제 하겠습니까?') === false) {
        return
      }
      await deletePost(props.id)
      router.push({name:'PostList'});
    } catch(error) {
      console.error(error);
    }
  }

  const goListPage = () => {
    router.push({name:'PostList'});
  }
  const goEditPage = () => {
    router.push({name:'PostEdit', params:{ id:props.id } });
  }
</script>

<style lang="scss" scoped>

</style>