<template>
  <div>
    <div
    class="w-full rounded-lg shadow-sm hover:shadow-md transition duration-200"
    :class="[props.bg, props.padding]"
  >
    <slot />
  </div>
  </div>
</template>

<script setup lang="ts">
interface InputProps {
  padding?: string
  bg?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  padding: 'p-7',
  bg: 'bg-white'
})

</script>
