<template>
  <div class="mx-6 pb-6 mb-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-12">
        <BreadCrumb :show="true" :items="breadcrumb" :title="$t('usersList')" />
      </div>
      <div class="col-span-12 xl:col-span-12">
        <CardWrapper>
          <div class="py-3">
            <div class="relative max-w-xs">
              <label for="hs-table-search" class="sr-only">Search</label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                class="py-2 px-3 outline-none ps-9 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Search for items"
              />
              <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                <svg
                  class="size-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" class="th">
                          {{ $t('user') }}
                        </th>
                        <th scope="col" class="th">
                          {{ $t('mobile') }}
                        </th>
                        <th scope="col" class="th">
                          {{ $t('role') }}
                        </th>
                        <th scope="col" class="th">
                          {{ $t('email') }}
                        </th>
                        <th scope="col" class="th text-center">
                          {{ $t('action') }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="tr">
                        <td class="td">
                          <div class="flex items-center">
                            <img
                              class="w-11 h-11 mr-4 rounded-full shadow-md"
                              src="@/assets/images/avatars/user.png"
                              alt="hossein"
                            />
                            <div>
                              <p
                                class="font-headingFontFamily text-primary-900 text-sm font-semibold"
                              >
                                Hossein Bajan
                              </p>
                              <p class="text-gray-400 text-xs text-left">@hbsoft</p>
                            </div>
                          </div>
                        </td>
                        <td class="td">
                          <div>09330000000</div>
                        </td>
                        <td class="td">
                          <div>Admin</div>
                        </td>
                        <td class="td">
                          <div>hossein.bajan@gmail.com</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                          <button
                            type="button"
                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-primary hover:text-primaryHover disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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
  { name: 'List', link: '' }
])
</script>
