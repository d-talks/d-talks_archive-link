import axios from 'axios'
// require('dotenv').config()

// axios.interceptors.request.use(request => {
// })
//
// axios.interceptors.response.use(response => response, error => {
// })

export default auth => {
  const instance = axios.create({
    baseURL: process.env.BACKEND_API_URL,
    headers: {
      common: {
        // 'Content-type': 'application/json',
        // 'CAREDOC-API-KEY': process.env.API_CLIENT_KEY,
        Accept: 'application/json'
      }
    }
  })

  // if (auth && auth.token) {
  //   instance.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`
  // }

  return instance
}
