import { ref } from "vue";

const alerts= ref([]); // 상태관리 모듈을 배우지 않았기에 함수 밖에서 호출 그렇지 않으면 컴포넌트 별로 생성되기 때문에 값 전달이 어렵다.

export function useAlert() {
  // const alerts= ref([]); 상태 관리를 아직 하지 않기 떄문에 위로빼서 모듈 범위로 빼고 사용하겠음
  const vAlert = (message, type = 'error') => {
    alerts.value.push({message, type});
    setTimeout(()=> {
      alerts.value.shift();
    }, 2000)
  };
  const vSuccess = (message) => vAlert(message, 'success');

  return {
    alerts,
    vAlert,
    vSuccess,
  }
}