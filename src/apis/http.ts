import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL
    })

    this.instance.interceptors.request.use((config) => {
      return config
    })

    this.instance.interceptors.response.use((response) => {
      return response
    })
  }
}

const http = new Http().instance

export default http
