import type { ISettings } from '@/types'

const defaultSettings: ISettings = {
  lang: 'en',
  darkMode: false
}

export default {
  defaultSettings
} as const
