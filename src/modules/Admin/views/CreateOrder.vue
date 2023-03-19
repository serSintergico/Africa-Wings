<template>
  <div class="overflow-y-hidden">
    <div class="flex">
      <div class="bg-indigo-700 px-3 w-6" style="margin-left: 9rem;">
        <div class="grid">
          <div class="col-4" v-for="(option, index) in categories" :key="`option-${index}`">
            <card style="border-radius: 20px;" class="w-5rem m-2 h-5rem">
              <template #content>
                <div class="flex justify-content-center align-items-center">
                  <router-link :to="{ name: option.to }" >
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: auto; width:100%" />
                  </router-link>
                </div>
              </template>
            </card>
          </div>
        </div><br>
      </div>
      <div class="bg-blue-100 w-12">
        <card class="h-14rem mt-1 mx-3">
          <template #content>
            <!-- contenedor de elementos  -->
            <div class="">
              <div class="h-9rem overflow-y-scroll">
                <p v-for="(item, index) in created" :key="`item-${index}`">{{item}}</p>
              </div>
              <div class="bg-indigo-100">
                <p>Aqui va el costo</p>
              </div>
            </div>
          </template>
        </card>
      </div>
    </div>
    <router-view ></router-view>
  </div>
</template>
<script>
import { ref } from 'vue'
import card from 'primevue/card';
import useCreate from '../composables/useCreate';
// import button from ''
export default {
  components:{
    card
  },
  setup(){
    const categories = ref([
      { categorie: 'Wings', to: 'wings', image: ''},
      { categorie: 'Hamburguesa', to: 'burguers', image: ''},
      { categorie: 'Hot-dogs', to: 'hot-dogs', image: ''},
      { categorie: 'Postres', to: 'desserts', image: ''},
      { categorie: 'Bebidas', to: 'drinks', image: ''},
    ])
    const { created } = useCreate()
    return{
      categories,
      created
    }
  }
}
</script>
<style scoped>
</style>