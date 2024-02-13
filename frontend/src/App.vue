<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { type IStaticMethods } from 'preline/preline'
import { useStore } from '@/store/store'
import FadeTransition from '@/components/transitions/FadeTransition.vue'

const store = useStore()

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit()
  }, 100)
})
</script>

<template>
  <div :class="{ dark: store.settings.darkMode }">
    <div class="bg-white dark:bg-gray-800 transition-colors duration-500">
      <router-view v-slot="{ Component }">
        <FadeTransition>
          <component :is="Component" />
        </FadeTransition>
      </router-view>
    </div>
  </div>
</template>
