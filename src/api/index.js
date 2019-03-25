import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.myjson.com/bins',
  // withCredentials: false,
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // },
})

export default {
  // ediya-menu 비동기 통신
  getEdiyaMenu: () => api.get('/htzry').then(({ data }) => data.data),
  // ediya-navigation 비동기 통신
  getEdiyaNavigation: () => api.get('/11jnm6').then(({ data }) => data.data),
}
