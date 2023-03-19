import { useStore } from "vuex"
import { computed } from "vue"
const useCreate = () => {
  const store = useStore()
  const getMenu = async () => {
    if(!store.menu) await store.dispatch('admin/getMenu')
  }
  const addItem =  ( item ) => {
    store.dispatch('admin/addItem', item)
  }
  const moveToActual = () => {
    store.dispatch('admin/moveTicket')
  }
  const creating = (item) => {
    store.dispatch('admin/creating', item)
  }
  return {
    getMenu,
    addItem,
    moveToActual,
    creating,
    menu: computed( () => store.getters['admin/menu'] ),
    wings: computed( () => store.getters['admin/wings'] ),
    created: computed( () => store.getters['admin/creating'])
  }
}
export default useCreate