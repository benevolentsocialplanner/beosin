import type { UseFetchOptions } from '#app'

export const http = async function (
  requestURL: string,
  { method = 'GET', ...options }: UseFetchOptions<any>
) {
  const config = useRuntimeConfig()
  return await useFetch(requestURL, {
    method: method,
    baseURL: config.public.baseUrl,
    cache: 'no-cache',
    onRequest({ request, options }) {
      options.headers = options.headers || {}
      options.headers['Content-Type'] = 'application/json'
    },
    onResponse({ response }) {
      if (response._data.code !== 200) {
        console.error(response._data)
        return Promise.reject(response._data)
      }
      return response._data
    },
    onResponseError({ request, response, options }) {
      ElMessage.error('request error')
    },
    onRequestError({ request, options, error }) {
      ElMessage.error('request error')
    },
    ...options
  })
}
