<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4">
    <PostForm v-model:title ="form.title" v-model:content="form.content" @submit.prevent="edit">
      <template #actions>
          <button type="button" class="btn btn-outline-danger" @click="goDetailPage">취소</button>
          <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
    <!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType"/> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert'

const { vAlert, vSuccess} = useAlert();

  const route = useRoute();
  const router = useRouter();
  const id = route.params.id;

  const form = ref({
    title: null,
    content: null,

  });
  const fetchPost = async () => {
    try {
      const response = await getPostById(id)
      setForm(response.data);
    } catch(error) {
      console.error(error);
      vAlert(error.message);
    }
  }
  const setForm = ({title, content, createdAt}) => {
    form.value.title = title;
    form.value.content = content;
    form.value.createdAt = createdAt;
  }
  fetchPost();

  const goDetailPage = () => {
    router.push({name:'PostDetail', params: {id}});
  }

  const edit = async () => {
    try {
      await updatePost(id,{ ...form.value });
      router.push({name: 'PostDetail', params: {id}})
      vSuccess('수정이 완료되었습니다!!!');
    } catch(error) {
      console.error(error);
      vAlert(error.message);
    }
  }

  // // alert composables로 재사용하기 편하게 만들었기 때문에 주석 처리
  // // const showAlert = ref(false);
  // // const alertMessage = ref('');
  // // const alertType = ref('error');
  // const alerts= ref([]);
  // const vAlert = (message, type = 'error') => {
  //   alerts.value.push({message, type});
  //   // showAlert.value = true;
  //   // alertMessage.value = message;
  //   // alertType.value = type;
  //   setTimeout(()=> {
  //     // showAlert.value = false
  //     alerts.value.shift();
  //   }, 2000)
  // }
  // const vSuccess = (message) => vAlert(message, 'success');
</script>

<style lang="scss" scoped>

</style>