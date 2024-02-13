<template>
  <div class="mx-6 pb-6 mb-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-12">
        <BreadCrumb :show="true" :items="breadcrumb" :title="$t('newUser')" />
      </div>
      <div class="col-span-12 xl:col-span-12">
        <CardWrapper>
          hossein
        </CardWrapper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardWrapper from '@/components/common/CardWrapper.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import { ref } from 'vue'

const breadcrumb = ref([
  { name: 'Dashboard', link: '/' },
  { name: 'Users', link: '/users' },
  { name: 'New User', link: '' }
])
</script>
