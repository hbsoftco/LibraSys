import type { ISettings } from '@/types'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

import defaults from './defaults'

export const useStore = defineStore('libraSys', () => {
  // local storage
  const storage = JSON.parse(localStorage.getItem('libraSys') || '{}')

  const settings: Ref<ISettings> = ref(storage.settings || defaults.defaultSettings)

  return {
    settings
  }
})
