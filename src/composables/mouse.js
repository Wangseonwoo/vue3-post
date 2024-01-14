import { onMounted, onUnmounted, ref } from "vue";

export function useMouse() {
  const e = ref(0);
  const z = ref(0);

  function update(event) {
    e.value = event.pageX
    z.value = event.pageY
  };

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update));

  return {
    e,
    z,
  }
}