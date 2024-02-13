<template>
  <div class="">
    <PanelSidebar />
    <div class="bg-[#f5f5f5] dark:bg-gray-800 ltr:ml-[260px] rtl:mr-[260px]">
      <PanelTopNav />
      <div class="">
        <router-view></router-view>
      </div>
      <PanelFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import PanelFooter from '@/components/layout/PanelFooter.vue'
import PanelSidebar from '@/components/layout/PanelSidebar.vue'
import PanelTopNav from '@/components/layout/PanelTopNav.vue'
</script>
