<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4">
    <PostFilter v-model:title="params.title_like" v-model:limit="params._limit"/>
    <hr class="my-4">
    <AppGrid :items="posts">
      <template v-slot="{item}">
        <PostItemVuew :title="item.title" :content="item.content" :createdAt="item.createdAt" @click="goPage(item.id)" @modal="openModal(item)" />
      </template>
    </AppGrid>
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="co1-4">
      </div>
    </div>
    <AppPagination :current-page="params._page" :page-count="pageCount" @page="page => (params._page = page)"/>

    <Teleport to="#modal">
      <PostModal v-model="show" :title="modalTilte" :content="modalContent" :createdAt="modalCreatedAt"/>
    </Teleport>
    
    <hr class="my-5">
    <AppCard>
      <PostDetailView :id='1'></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
  import PostItemVuew from '@/components/posts/PostItem.vue';
  import PostDetailView from './PostDetailView.vue';
  import AppCard from '@/components/AppCard.vue';
  import AppPagination from '@/components/AppPagination.vue';
  import AppGrid from '@/components/AppGrid.vue';
  import PostFilter from '@/components/posts/PostFilter.vue';
  import PostModal from '@/components/posts/PostModal.vue';
  import {getPosts} from '@/api/posts'
  import { computed, ref, watchEffect } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const posts = ref([]);
  const params = ref({
    _sort: 'createdAt',
    _order: 'desc',
    _page: 1,
    _limit: 3, // 한페이지에 보일 갯수
    title_like: '',
  })

  // pagination
  const totalCount = ref(0);
  const pageCount = computed(()=> Math.ceil(totalCount.value / params.value._limit),);

  const fetchPosts = async () => {
    try {
      const {data, headers} = await getPosts(params.value);
      posts.value = data;
      totalCount.value = headers['x-total-count'];
    } catch (error) {
      console.error(error);
    }
  }
  watchEffect(fetchPosts);

  const goPage = (id) => {
    // router.push(`/posts/${id}`);
    router.push({name:'PostDetail', params: {id,}})
  }

  // modal
  const show = ref(false);
  const modalTilte = ref('');
  const modalContent = ref('');
  const modalCreatedAt = ref('');
  const openModal = ({title, content, createdAt}) => {
    show.value = true;
    modalTilte.value = title;
    modalContent.value = content;
    modalCreatedAt.value = createdAt;
  };
  
</script>

<style lang="scss" scoped>

</style>