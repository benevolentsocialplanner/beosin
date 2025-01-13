export const copy = (content: string) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        ElMessage.success('Copied to pasteboard')
      })
      .catch(() => {
        // 如果剪贴板API失败,回退到旧方法
        return
      })
    return
  }
}

// 邮箱校验
export const validateEmail = (email: string) => {
  const re = /^([a-zA-Z0-9_\.\-])+\@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9]+)+$/
  return re.test(email)
}

export const openUrl = (url: string, { target }: any) => {
  const aEl = document.createElement('a')
  aEl.href = url
  aEl.target = target
  aEl.click()
}

// 文章详情（包括pdf预览）跳转逻辑统一封装
export const goPreviewPage = (item: any) => {
  if ((item.type === 1 && item.url) || item.type === 7) {
    window.open('/' + item.url)
  } else {
    // const host = item.enUrl
    //   ? '/resources/' + item.enUrl
    //   : '/resources/' + item.title + '?id=' + item.id
    const host = '/resources/' + item.enUrl
    openUrl(host, { target: '_blank' })
  }
}
