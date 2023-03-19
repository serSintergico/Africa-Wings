import { useStore } from "vuex"
import { computed } from "vue"

const useActuals = () => {
  const store = useStore()
  return {
    tickets: computed( () => { store.getters['admin/tickets'] })
  }
}

export default useActuals