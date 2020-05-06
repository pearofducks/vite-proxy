<template>
  <h1>Hello Vite + Vue 3!</h1>
  <p>Edit ./App.vue to test hot module replacement (HMR).</p>
  <p>
    <span>Count is: {{ count }}</span>
    <button @click="count++">increment</button>
  </p>
  <pre><code>{{ data }}</code></pre>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const data = ref({})
    fetch('/api/people/1')
      .then(res => res.ok ? res.json() : { status: 'FAIL' })
      .then(json => data.value = json)
    return { count, data }
  }
}
</script>

<style scoped>
h1 {
  color: #4fc08d;
}

h1, p {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
