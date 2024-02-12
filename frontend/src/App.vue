<script setup lang="ts">
import { watchEffect } from 'vue'
import { RouterView } from 'vue-router'

import { useStore } from '@/store/store'

import FadeTransition from '@/components/transitions/FadeTransition.vue'

const store = useStore()

watchEffect(() => {})
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
