<template>
    <div class="flex overflow-x-scroll">
      <Card style="width: 30rem" class="col-6 m-4">
        <template #header>
            <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
        </template>
        <template #title>
            Nachos
        </template>
        <template #content>
            <SelectButton  v-model="hotdog" :options="['Sencillo', 'Especial']"/>
        </template>
      </Card>
      <Card style="width: 30rem" class="col-6 m-4" v-for="(creppe, index) in creppes" :key="`creppe-${index}`">
        <template #header>
            <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
        </template>
        <template #title>
            {{ creppe }} 
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
  export default {
    components: {
      Card
    },  
    setup(){
      const creppes = ref(['Nutella', 'Philadelphia', 'Mermelada de zarzamora', 'Mermelada de fresa', 'Lechera', 'Nuez', 'Cajeta', 'Crema de cacahuate'])
      const fruit = ref(['Fresa', 'Platano', 'Durazno'])
      const icecream = ref(['Galleta', 'Vainilla c/ Fresa'])
      return{
        creppes, fruit, icecream
      }
    }
  }
  </script>
  <style lang="">
      
  </style>