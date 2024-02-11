<script setup lang="ts"></script>

<template>
  <main class="container m-auto">
    <h1>Hi. my name is hossein bajan</h1>
    <div>
      <h3 class="h-4 bg-gray-200 rounded-full dark:bg-gray-700" style="width: 40%"></h3>

      <ul class="mt-5 space-y-3">
        <li class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        <li class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        <li class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        <li class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
      </ul>
    </div>

    <div>
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
            id="tabs-with-underline-item-1"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
          >
            Tab 1
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-2"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
            role="tab"
          >
            Tab 2
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="tabs-with-underline-item-3"
            data-hs-tab="#tabs-with-underline-3"
            aria-controls="tabs-with-underline-3"
            role="tab"
          >
            Tab 3
          </button>
        </nav>
      </div>

      <div class="mt-3">
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
          <p class="text-gray-500 dark:text-gray-400">
            This is the <em class="font-semibold text-gray-800 dark:text-gray-200">first</em> item's
            tab body.
          </p>
        </div>
        <div
          id="tabs-with-underline-2"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
        >
          <p class="text-gray-500 dark:text-gray-400">
            This is the
            <em class="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
          </p>
        </div>
        <div
          id="tabs-with-underline-3"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          <p class="text-gray-500 dark:text-gray-400">
            This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's
            tab body.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
