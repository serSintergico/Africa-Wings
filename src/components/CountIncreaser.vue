<template>
  <div class="align-items-center flex justify-content-evenly w-full bg-indigo-200">
    <div class="col-6 flex justify-content-center flex-column">
      <Button @click="count++" >hola</Button>
      <p class="text-center">{{ count }}</p>
      <Button @click="count > 0 ? count-- : null">hola</Button>
    </div>
    <div class="col-6 flex justify-content-center">
      ${{ count * 14 }}
    </div>
  </div>

</template>
<script>
import { ref } from 'vue'
import Button from 'primevue/button'
export default {
  components: {
    Button
  },
  setup(){
    const count = ref(0)
    return {
      count
    }
  }
}
</script>
<style lang="">
  
</style>