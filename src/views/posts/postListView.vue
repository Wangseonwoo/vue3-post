<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4">
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="co1-4">
        <PostItemVuew :title="post.title" :content="post.content" :createdAt="post.createdAt" @click="goPage(post.id)"></PostItemVuew>
      </div>
    </div>
    <hr class="my-4">
    <AppCard>
      <PostDetailView :id='1'></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
  import PostItemVuew from '@/components/posts/PostItem.vue';
  import PostDetailView from './PostDetailView.vue';
  import AppCard from '@/components/AppCard.vue';
  import {getPosts} from '@/api/posts'
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const posts = ref([]);
  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      posts.value = response.data;
    } catch (error) {
      console.error(error);
    }
  }
  onMounted(fetchPosts);

  const goPage = (id) => {
    // router.push(`/posts/${id}`);
    router.push({name:'PostDetail', params: {id,}})
  }
</script>

<style lang="scss" scoped>

</style>