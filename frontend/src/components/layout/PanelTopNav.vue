<template>
  <div class="relative">
    <header class="mx-6 bg-white z-50 rounded-b-lg p-4 mb-4 shadow-sm">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="mr-2">
            <button
              class="bg-gray-100 border-none rounded-full flex duration-200 transition-all hover:bg-gray-200 justify-center items-center w-10 h-10"
            >
              <img src="@/assets/icons/toggle-sidebar.svg" class="w-5" alt="dashboard" />
            </button>
          </div>
          <div class="relative min-w-72">
            <input
              type="text"
              class="py-2.5 w-full pl-10 text-sm outline-none font-normal bg-gray-100 border-none rounded-full"
              placeholder="Search here ..."
            />
            <button
              type="button"
              class="absolute w-9 h-9 inset-0 ltr:right-auto rtl:left-auto appearance-none peer-focus:text-primary flex justify-center items-center"
            >
              <img
                class="w-5 h-5 relative top-0.5 left-0.5"
                src="@/assets/icons/search-line.svg"
                alt="Search Icon"
              />
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="mx-3">
            <ToggleTheme />
            <!-- <app-change-lang></app-change-lang> -->
          </div>
          <div>
            <!-- <app-emails></app-emails> -->
          </div>
          <div class="mx-3">
            <!-- <app-notification></app-notification> -->
          </div>
          <div class="mr-10">
            <!-- <app-user-profile></app-user-profile> -->
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import ToggleTheme from '@/components/layout/ToggleTheme.vue'
</script>
