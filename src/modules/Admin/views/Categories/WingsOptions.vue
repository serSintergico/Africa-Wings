<template>
    <div class="flex h-4rem w-full align-items-center- justify-content-end mt-3" v-if="order.length > 0">
      <Button label="Confirmar Orden" class="m-0" @click="addItem(order); order=[]"/>
    </div>
    <div class="flex overflow-y-scroll h-30rem mt-4 pl-4 flex-wrap" style="margin-left:10rem;">
      <div class="col-4" v-for="(item, index) in wings" :key="`item-${index}`">
        <card style="border-radius: 20px;" class="w-full h-20rem" v-show="item.kind === 'wing' || !item.kind">
          <template #header>
            <div class="flex justify-content-center align-items-center pt-4"  >
              <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 4.5rem; width: 8.5rem" />
            </div>
          </template>
          <template #content>
            <div class="flex justify-content-center align-items-center h-3rem"  >
              {{item.name}}
            </div>
            <div class="h-7rem flex justify-content-center align-items-center"  >
              <div class="grid" v-if=" item.kind === 'wing' ">
                <div class="col-6" @click="normal(item)">4 x $50</div>
                <div class="col-6" @click="big(item)">6 x $75</div>
              </div>
              <div class="grid w-15rem h-8rem overflow-y-scroll" v-else-if="!item.kind">
                <div class="col flex justify-content-center"  v-for="(sauce, index) in wings" :key="`item-${index}`" >
                  <Button :label="sauce.name" v-if="sauce.kind" class="col" @click="combo(sauce, item)"/>
                </div>
              </div>
            </div>
          </template>
        </card>
      </div>
    </div>
</template>
<script>
import card from 'primevue/card';
import Button from 'primevue/button';
// import MultiSelect from 'primevue/multiselect';
import { ref } from 'vue';
import useCreate from '../../composables/useCreate';
export default {
    components:{
      card,
      Button,
      // MultiSelect
    },
    setup(){
      const { getMenu, wings, addItem, creating } = useCreate()
      getMenu()
      const order = ref([])
      //Agregar item de tamanio normal
      const normal = (item) => {
        const toAdd = {
          portion: item.normalPortion,
          price: item.normalPrice,
          sauce: item.name
        }
        order.value.push(toAdd)
        // aqui se usa creating
        creating(toAdd)
      }
      // Agregar item de tamanio grande
      const big = (item) => {
        const toAdd = {
          portion: item.bigPortion,
          price: item.bigPrice,
          sauce: item.name
        }
        order.value.push(toAdd)
        creating(toAdd)
      }
      // Agregar Combo
      const combo = (sauce, item) => {
        const toAdd = {
          portion: item.portion,
          price: item.price,
          size: item.name,
          sauce: sauce.name
        }
        order.value.push(toAdd)
        creating(toAdd)
      }
      return{
        wings,
        addItem,
        normal,
        big,
        combo,
        order
      }
    }
}
</script>
<style scoped>
</style>