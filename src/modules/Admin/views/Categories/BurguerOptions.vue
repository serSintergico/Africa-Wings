<template >
    <div class="burguers">
      <div class="burguer" v-for="(burguer, index) in burguers" :key="`burguer-${index}`">
        <div class="text-center ">
          <h3>{{burguer.name}}</h3>
          <img src="@/assets/Images/Hotpot.png" alt=""  class="w-18rem mr-6" style="transform: scale(1.5);">
        </div>
        <div class=" w-30rem h-full ">
          <p class="text-center">Ingrediente Extra</p>
          <div class="grid w-full m-auto flex justify-content-center">
            <div v-for="(extra, index) in extras" :key="`extra-${index}`" class="col-5 flex justify-content-start">
              <Checkbox  :input-id="`extra-${index}`" v-model="selected" :value="extra" class="mr-2"/>
              <label :for="`extra-${index}`">{{extra}}</label>
            </div>
          </div>
          <br>
          <div class="flex justify-content-center text-center p-3 ">
            <Selectbutton v-model="size" :options="['Sencilla', 'Doble']" aria-labelledby="single" />
          </div>
        </div>
        
      </div>
    </div>

  </template>
  <script>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Selectbutton from 'primevue/selectbutton'
  export default {
    components:{
      Checkbox,
      Selectbutton
    },
    setup(){
      const burguers = ref([
        { name: 'sencilla', price: 65, double: 80},
        { name: '3 Quesos', price: 70, double: 85},
        { name: 'Hawaiana', price: 75, double: 85},
        { name: 'Texana', price: 70, double: 85},
        { name: 'Pollo', price: 70, double: 85}
      ])
      const extras =  ref([ 'Queso Amarillo', 'Queso Oaxaca', 'Queso Manchego', 'Jamon', 'BBQ', 'Tocino' ])
      const ingredients = ref([ 'Mayonesa', 'Catsup', 'Mostaza', 'Lechuga', 'Jitomate', 'Cebolla', 'Chile' ])
      const selected = ref([])
      const size = ref()
      return{
        burguers,
        extras,
        ingredients,
        selected,
        size
      }
    }
  }
  </script>
  <style scoped>
  .burguer{
    min-width: 40rem;
    height: 25rem;
    margin: 1rem;
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  .burguers{
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;

  }
  </style>