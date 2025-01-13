export const showDemoForm = ref(false)
export const defaultType = ref<number>()

export const showDemo = (type?: number) => {
  defaultType.value = type
  showDemoForm.value = true
}

export const demoFormClose = () => {
  showDemoForm.value = false
  defaultType.value = undefined
}
