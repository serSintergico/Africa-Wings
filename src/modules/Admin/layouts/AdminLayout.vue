<template>
  <SideBar />
  <router-view />
</template>
<script>
import SideBar from '@/components/SideBar.vue';
export default {
    components:{
      SideBar
    },
    setup() {
      
      return{

      }
    }
}
</script>
<style scoped>
  body, html{
    width: 100%;
    height: 100%;
    padding: 0%;
    margin: 0%;
  }
</style>