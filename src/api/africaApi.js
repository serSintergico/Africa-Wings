import axios from 'axios';

const africaAPI = axios.create({
    baseURL: 'https://africa-wings-default-rtdb.firebaseio.com',
})

// africaAPI.interceptors.request.use((config) => {
//     config.params = {
//         auth: localStorage.getItem('idToken')
//     }
//     return config
//   });
  

// Las solicitudes a la api se hacen desde store en actions 

// DESCOMENTAR POSTERIORMENTE PARA INICIO DE SESION

// el intercepto cacha las solicitudes
// journalAPI.interceptors.request.use( (config) => {
//     // Aqui se pueden cambiar todos los elementos del config
//     config.params = {
//         auth: localStorage.getItem('idToken')
//     }
//     return config
// })

export default africaAPI