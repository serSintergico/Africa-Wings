<template>
  <Sidebar v-model:visible="visibleLeft" position="left" :visible="true" :dismissable="false" :show-close-icon="false" :block-scroll="false" :modal="false"
    style="width:10rem;">
    <!-- Header de Sidebar -->
    <template #header>
      <div class="p-0">
        <h1>Africa Wings</h1>
      </div>
    </template>
    <!-- Contenido de Sidebar -->
    <div class="menu">
      <div class="card">
        <router-link :to="{ name: 'crear-cuenta' }">Crear Orden</router-link>
      </div>
      <div class="card">
        <router-link :to="{ name: 'cuenta-abierta' }">Ordenes Abiertas</router-link>
      </div>
      <div class="card">
        <router-link :to="{ name: 'cuentas-cerradas' }">Ordenes Cerradas</router-link>
      </div>
    </div>
  </Sidebar>  
</template>
<script>
import { ref } from 'vue'
import Sidebar from 'primevue/sidebar'
// 14357
// 1400
export default {
  components: {
    Sidebar,
  },
  setup() {
    const visibleLeft = ref(true)

    return{
      visibleLeft
    }
  }
}
</script>
<style scoped>
.card{
  border: 1px solid #000;
  width:100%;
  height: 10rem;
  margin: 1rem 0;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>