<template>
  <nav class="fixed top-0 ltr:left-0 rtl:right-0 h-full w-[260px] shadow-sm">
    <router-link to="/" class="flex items-center py-4 px-4 bg-white dark:bg-gray-800">
      <img class="h-10" src="@/assets/images/hb.svg" alt="logo" />
      <div class="logo-text">
        <h3 class="text-[1.3rem] text-primary font-extrabold -mb-[1.55rem] -ml-[0.4rem]">BSOFT</h3>
      </div>
    </router-link>
    <div class="dark:bg-gray-800 dark:border-gray-700">
      <nav
        class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul class="space-y-1.5">
          <template v-for="(menu, index) in menus" :key="index">
            <li v-if="menu.subMenus.length === 0">
              <router-link :to="menu.link"
                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <img :src="handleImage(menu.icon)" :alt="menu.icon" />
                {{ menu.title }}
              </router-link>
            </li>
            <li v-else class="hs-accordion" :id="menu.id" :key="'menu_' + index">
              <button
                type="button"
                class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <img :src="handleImage(menu.icon)" :alt="menu.icon" />
                {{ menu.title }}
                <ArrowDownIcon />
                <ArrowUpIcon />
              </button>

              <div
                :id="menu.id"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul class="pt-2 ps-2">
                  <li v-for="(subMenu, subIndex) in menu.subMenus" :key="subIndex">
                    <router-link :to="subMenu.link"
                      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      {{ subMenu.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import sidebarMenuData from '@/data/SidebarMenu.json'
import type { IMenu } from '@/types'

import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue'
import ArrowUpIcon from '@/components/icons/ArrowUpIcon.vue'

const menus = ref<IMenu[]>(sidebarMenuData)

const handleImage = (icon: string | undefined) => {
  switch (icon) {
    case 'book':
      return new URL(`@/assets/icons/sidebar/book.svg`, import.meta.url).href

    case 'users':
      return new URL(`@/assets/icons/sidebar/users.svg`, import.meta.url).href

    case 'dashboard':
      return new URL(`@/assets/icons/sidebar/dashboard.svg`, import.meta.url).href
  }
}
</script>
