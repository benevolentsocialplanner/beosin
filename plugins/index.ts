type IEl = HTMLElement & { clickOutside: (e: MouseEvent) => void }

const ClickOutside = () => {
  return {
    mounted(el: IEl, binding: { value: (v: EventTarget | null) => void }) {
      el.clickOutside = (e) => {
        if (el.contains(e.target)) return false

        if (binding.value && typeof binding.value === 'function') {
          binding.value?.(e.target)
        }
      }
      el.ownerDocument.addEventListener('click', el.clickOutside)
    },

    unmounted(el: IEl) {
      el.ownerDocument.removeEventListener('click', el.clickOutside)
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', ClickOutside())
})
