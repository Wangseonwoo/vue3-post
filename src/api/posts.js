import { posts } from '.'

// const posts = [
//   {id: 1, title: '제목1', content: '내용1', createdAt: '2020-01-01'},
//   {id: 2, title: '제목2', content: '내용2', createdAt: '2020-02-02'},
//   {id: 3, title: '제목3', content: '내용3', createdAt: '2020-03-03'},
//   {id: 4, title: '제목4', content: '내용4', createdAt: '2020-04-04'},
//   {id: 5, title: '제목5', content: '내용5', createdAt: '2020-05-05'},
// ]

export function getPosts(params) {
  return posts.get('/', { params });
}

export function getPostById(id) {
  // const numberId = parseInt(id) route.index에서 parseInt를 해줬기 때문에 따로 안함
  // return posts.find(item => item.id === id);
  return posts.get(id);
}

export function createPost(data) {
  return posts.post('', data);
}

// export function updatePost(id,data) {
//   return posts.put(id, data);
// } put은 전체를 수정할때 사용

export function updatePost(id,data) {
  return posts.patch(id, data); // 일부분만 수정 가능
}

export function deletePost(id) {
  return posts.delete(id);
}