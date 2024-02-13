<template>
  <div class="mx-6 pb-6 mb-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-8">
        <div class="grid grid-cols-12 gap-6 mb-4">
          <div v-for="(item, i) in data.boxData" :key="i" class="col-span-12 xl:col-span-4">
            <BoxState
              :price="item.price"
              :state="item.state"
              :percentage="item.percentage"
              :icon="item.icon"
            ></BoxState>
          </div>
          <!-- <div class="col-span-12 xl:col-span-4" *ngFor="let item of data; let i = index">
            <app-e-state-box
              [price]="item.price"
              [state]="item.state"
              [percentage]="item.percentage"
              [icon]="item.icon"
            ></app-e-state-box>
          </div> -->
        </div>
        <div class="grid grid-cols-12 gap-6 mb-4">
          <div class="col-span-12 xl:col-span-12">
            <!-- <app-audience-overview></app-audience-overview> -->
          </div>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 xl:col-span-8 mb-4">
            <!-- <app-e-visit-by-day></app-e-visit-by-day> -->
          </div>
          <div class="col-span-12 xl:col-span-4 mb-4">
            <div class="mb-4">
              <!-- <app-impressions></app-impressions> -->
            </div>
            <div>
              <!-- <app-activity-timeline></app-activity-timeline> -->
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 xl:col-span-12 mb-4">
            <!-- <app-revenue-status></app-revenue-status> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BoxState from '@/components/pages/Dashboard/BoxState.vue'
import { reactive } from 'vue'

const data = reactive({
  boxData: [
    {
      price: '$25,890',
      icon: 'donut-chart',
      state: true,
      percentage: '1.3%'
    },
    {
      price: '$100.5M',
      icon: 'goal',
      state: true,
      percentage: '0.5%'
    },
    {
      price: '50.5M',
      icon: 'award',
      state: false,
      percentage: '1%'
    }
  ]
})
</script>
