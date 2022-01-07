
// @ts-ignore
export const imagesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 8000
})

// @ts-ignore
export const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 8000
})

// @ts-ignore
export const quotesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 8000
})

//@ts-ignore
export const todosApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/maddyyarnall/todos',
  timeout: 8000
})