<template>
  <div class="mx-6 flex justify-between items-center">
    <h2 class="font-headingFontFamily font-semibold text-lg">{{ props.title }}</h2>
    <ol class="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
      <template v-for="(item, index) in props.items" :key="index">
        <li v-if="index < props.items.length - 1" class="inline-flex items-center">
          <router-link
            :to="item.link"
            class="flex items-center font-headingFontFamily text-sm text-gray-500 hover:text-primary focus:outline-none focus:text-primary dark:focus:text-primary"
          >
            {{ item.name }}
            <ArrowRightIcon />
          </router-link>
        </li>
        <li
          v-else
          class="inline-flex items-center font-headingFontFamily text-sm font-medium text-gray-800 truncate dark:text-gray-200"
          aria-current="page"
        >
          {{ item.name }}
        </li>
      </template>
    </ol>
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'

interface InputProps {
  items: breadItem[]
  show: boolean
  title: string
}

interface breadItem {
  name: string
  link: string
}

const props = withDefaults(defineProps<InputProps>(), {
  show: false,
  title: ''
})
</script>
