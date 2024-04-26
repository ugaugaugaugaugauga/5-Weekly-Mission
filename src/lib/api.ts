import axios, { AxiosResponse, Method } from 'axios'

// const baseURL = import.meta.env.VITE_BASE_URL
// 이부분은 연습용이니 따로 env에서 값을 가져오는게 아닌 그냥 리터럴 값을 넣어 주었습니다.
const baseURL = 'https://bootcamp-api.codeit.kr/api'

const instance = axios.create({
  baseURL: baseURL,
})

const api = <T>(
  method: Method,
  url: string,
  params?: any,
  data?: any,
): Promise<AxiosResponse<T>> =>
  instance.request<T>({
    method,
    url,
    params,
    data,
  })

export default api
