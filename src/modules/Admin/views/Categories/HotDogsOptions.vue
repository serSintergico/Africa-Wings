<template>
  <div class="grid">
    <!-- hotdogs -->
    <Card style="width: 20rem" class=" m-4">
      <template #header>
          <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
      </template>
      <template #title>
          Hot-dogs
      </template>
      <template #content>
          <SelectButton  v-model="hotdog" :options="['Sencillo', 'Especial']"/>
      </template>
    </Card>
    <Card style="width: 20rem" class=" m-4">
      <template #header>
          <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
      </template>
      <template #title>
          Papas a la francesa
      </template>
      <template #content>
          <SelectButton  v-model="hotdog" :options="['Sencillo', 'Especial']"/>
      </template>
    </Card>
    <Card style="width: 20rem" class=" m-4">
      <template #header>
          <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
      </template>
      <template #title>
          Boneless
      </template>
      <template #content>
          <SelectButton  v-model="hotdog" :options="['Sencillo', 'Especial']"/>
      </template>
    </Card>
    <Card style="width: 20rem" class=" m-4">
      <template #header>
          <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
      </template>
      <template #title>
          Fajitas de pollo
      </template>
      <template #content>
          <SelectButton  v-model="hotdog" :options="['Sencillo', 'Especial']"/>
      </template>
    </Card>
  </div>
</template>
<script>
import { ref } from 'vue';
import Card from 'primevue/card'
import SelectButton from 'primevue/selectbutton';
export default {
    components: {
      Card,
      SelectButton
    },
    setup(){
      const hotdogs = ref([
        { name: 'Sencillo', price: 15},
        { name: 'Especial', price: 25}
      ])
      const others = ref([
        { name: 'Papas a la francesa', price: 35},
        { name: 'Boneless', price: 75 },
        { name: 'Fajitas de pollo', price: 70 }
      ])
      const hotdog = ref()
      return{
        hotdogs, others, hotdog
      }
    }
}
</script>
<style scoped>
    .hotdogs{
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% auto;
    }
</style>