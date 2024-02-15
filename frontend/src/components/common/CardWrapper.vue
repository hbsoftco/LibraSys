<template>
  <div>
    <div
      class="w-full rounded-lg shadow-sm hover:shadow-md transition duration-200"
      :class="[props.bg, props.padding]"
    >
      <h3 v-if="props.title" class="font-headingFontFamily pb-4 border-b border-gray-50 mb-4">{{ $t(props.title) }}</h3>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface InputProps {
  padding?: string
  bg?: string
  title?: string | null
}

const props = withDefaults(defineProps<InputProps>(), {
  padding: 'p-7',
  bg: 'bg-white',
  title: null
})
</script>
