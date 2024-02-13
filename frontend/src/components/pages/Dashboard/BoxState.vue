<template>
  <CardWrapper>
    <div class="group">
      <div class="flex justify-between items-center">
        <div>
          <h5 class="font-fontFamily font-bold text-3xl text-primary-900 mb-2">
            {{ props.price }}
          </h5>
          <p class="text-[15px]">Total Sales</p>
        </div>
        <div
          class="flex items-center justify-center bg-primary-50 duration-200 transition-all group-hover:bg-primary-500 w-14 h-14 rounded-md"
        >
          <img
            class="w-9 h-9"
            :src="'/assets/icons/' + icon + '-' + hoveredIcon + '.svg'"
            :alt="props.icon"
          />
        </div>
      </div>
      <div class="flex items-center mt-6">
        <img
          :src="props.state ? '/assets/icons/trend-up.svg' : '/assets/icons/trend-down.svg'"
          class="w-5 h-5"
          alt="trend"
        />
        <div>
          <span
            class="font-fontFamily font-bold text-[15px] mx-1.5"
            :class="[props.state ? 'text-green' : 'text-red']"
            >{{ props.percentage }}</span
          >
        </div>
        <p class="text-primary-900 text-[15px] font-medium">Up from past week</p>
      </div>
    </div>
</CardWrapper>
</template>

<script setup lang="ts">
import CardWrapper from '@/components/common/CardWrapper.vue'
import { ref } from 'vue'

interface InputProps {
  price?: string
  value?: string
  percentage?: string
  icon?: string
  state?: boolean
}

const props = withDefaults(defineProps<InputProps>(), {
  price: '',
  value: '',
  percentage: '',
  icon: '',
  state: true
})

const hoveredIcon = ref('s')

const changeIcon = (iconType: string): void => {
  hoveredIcon.value = iconType
}
</script>
