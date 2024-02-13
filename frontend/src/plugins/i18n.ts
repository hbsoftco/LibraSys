import { createI18n } from 'vue-i18n'
import enUS from '@/locales/en-US.json'
import faIR from '@/locales/fa-IR.json'

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof enUS | typeof faIR
const i18n = createI18n<[MessageSchema], 'en-US' | 'fa-IR'>({
  locale: 'en-US',
  messages: {
    'en-US': enUS,
    'fa-IR': faIR,
  }
})

export default i18n;
