import { createStore } from "vuex"
import admin from '@/modules/Admin/store'
const store = createStore({
  modules: {
    admin
  }
})
export default store