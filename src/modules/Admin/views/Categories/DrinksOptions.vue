<template lang="">
  <div class="grid h-full">
    <div class="bg-indigo-100 col-6">
      <div class="sodas">
        <div class="soda bg-yellow-200" v-for="(soda, index) in sodas" :key="`soda-${index}`">
          {{ soda }}
        </div>
      </div>
      <div class="hots">
        <div class="hot bg-green-100" v-for="(hot, index) in hots" :key="`hot-${index}`">
          {{ hot }}
        </div>
      </div>
    </div>
    <div class="bg-blue-200 col-6">
      <div class="frapuccinos">
        <div class="frapuccino bg-red-100" v-for="(frapuccino, index) in frapuccinos" :key="`frapuccino-${index}`">
          {{ frapuccino }}
        </div>
      </div>
      <div class="smoothies">
        <div class="smoothie bg-cyan-50" v-for="(smoothie, index) in smoothies" :key="`smoothie-${index}`">
        {{ smoothie }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup(){
    const categories = ref(['Refrescos', 'Bebidas Calientes', 'Bebidas frias'])
    const sodas = ref([
      { name: 'Coca-Cola', price: 20},
      { name: 'Jarrito', price: 20},
      { name: 'Boing', price: 15}
    ])
    const hots = ref(['Americano', 'Capuchino', 'Moka', 'Latte Machiato', 'Caramel', 'Te Doble Menta', 'Te Chai Latte'])
    const frapuccinos = ref([
      { name: 'Original', price: 45},
      { name: 'Vainilla', price: 45 },
      { name: 'Moka', price: 45},
      { name: 'Oreo', price: 50 },
      { name: 'Fresa', price: 50 },
      { name: 'Caramelo', price: 55 },
    ])
    const smoothies = ref(['Arandano', 'Frutos Rojos', 'Piña', 'Mango'])
    return{
      categories, sodas, hots, frapuccinos, smoothies
    }
  }
}
</script>
<style scoped>
    .sodas, .hots, .frapuccinos, .smoothies{
      margin: 1rem;
    }
</style>