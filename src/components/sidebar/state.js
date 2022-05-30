import {ref, computed} from 'vue' //13.7k (gzipped: 5.5k)

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 250
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed(
    () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)