const mimeMap = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip'
}

interface INavigator {
  msSaveBlob?: (blob: any, defaultName?: string) => boolean
}

export function downLoadZip(str: string, filename: string) {
  return $fetch(str, {
    method: 'GET',
    responseType: 'blob'
  }).then((res: any) => {
    resolveBlob(res, mimeMap.zip, filename)
    return res
  })
  // const url = import.meta.env.VITE_BASE_URL + str
  // // @ts-ignore
  // const axiosConfig: AxiosRequestConfig = {
  //   method: 'get',
  //   url: url,
  //   responseType: 'blob',
  //   headers: {
  //     Authorization: (!getStore('token') ? '' : 'Bearer ' + getStore('token')) as string
  //   }
  // }
  // return new Promise((resolve) => {
  //   axios(axiosConfig).then((res) => {
  //     resolveBlob(res, mimeMap.zip, filename)
  //     resolve(res)
  //   })
  // })
}

export function resolveBlob(res: any, mimeType: string, fileN: string) {
  const aLink = document.createElement('a')

  const blob = new Blob([res.data], { type: mimeType })

  // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;

  const patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')

  const contentDisposition = decodeURI(res.headers['Content-disposition'])

  const result = patt.exec(contentDisposition)

  let fileName = result ? result[1] : fileN

  fileName = fileName.replace(/"/g, '')

  aLink.href = URL.createObjectURL(blob)

  aLink.setAttribute('download', fileName) // 设置下载文件名称

  document.body.appendChild(aLink)

  aLink.click()

  document.body.removeChild(aLink)
}

export const combineLink = (uri: string) => {
  return '/' + uri.replace(/^\//, '')
}

const getFileName = (url: string) => {
  const as = url.split('/')
  const name = as[as.length - 1]
  return name
}

export const downloadFile = (url: string) => {
  const aLink = document.createElement('a')
  aLink.href = url
  aLink.setAttribute('download', getFileName(url)) // 设置下载文件名称
  document.body.appendChild(aLink)
  aLink.click()
  document.body.removeChild(aLink)
}
