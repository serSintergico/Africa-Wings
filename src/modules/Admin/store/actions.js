// Lo que importa de una accion es desestructurarlo y tomar el commit
// Pueden ser acciones asincronas que pueden mandar a llamar una mutacion

// Aqui se haran las solicitudes a la api 

// export const myAction = async({ commit }) => {

// }

import africaApi from "@/api/africaApi.js"

export const getMenu = async({ commit }) => {
  try{
    const { data } = await africaApi.get('/menu.json')
    commit('menu', data)
  }catch(error){
    console.log(error)
  }
}
export const addItem = async ({commit}, item) => {
  console.log(item)
  try{
    await africaApi.post('/tickets.json', item)
  }catch(error){
    console.log(error)
  }
  commit('addItem', item)
  commit('deleteCreating')
  item = null
}
export const creating = ({commit}, item) => {
  commit('creating',item)
}