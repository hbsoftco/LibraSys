<template>
  <div class="mx-6 pb-6 mb-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-12">
        <BreadCrumb :show="true" :items="breadcrumb" :title="$t('newBook')" />
      </div>
      <div class="col-span-12 xl:col-span-12">
        <CardWrapper title="addNewBook">
          <div class="grid grid-cols-12 gap-4">
            <!-- <div class="col-span-12 xl:col-span-12">
              <div class="relative inline-block">
                <img
                  v-if="!state.url && state.sex === true"
                  :src="userAvatar"
                  class="w-24 h-24 rounded-md"
                />
                <img
                  v-if="!state.url && state.sex === false"
                  :src="femaleAvatar"
                  class="w-24 h-24 rounded-md"
                />
                <img v-if="state.url" :src="state.url" class="w-24 h-24 rounded-md" />
                <input
                  ref="fileInput"
                  style="display: none"
                  type="file"
                  accept="image/*"
                  @change="handleFileChange"
                />
                <button
                  :disabled="state.btnLoading"
                  @click="openFileDialog"
                  class="bg-primary rounded-full shadow-md p-1.5 absolute bottom-1 right-2"
                >
                  <CameraIcon color="#fcfcfc" :width="20" :height="20" />
                </button>
              </div>
            </div> -->
            <div class="col-span-12 xl:col-span-6">
              <div :class="{ error: v$.form.bookTitle.$errors.length }">
                <label
                  for="bookTitle"
                  class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                  >{{ $t('bookTitle') }}</label
                >
                <input
                  autocomplete="off"
                  v-model="state.form.bookTitle"
                  name="bookTitle"
                  id="bookTitle"
                  class="py-3 px-4 block w-full border outline-none border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                <div class="input-errors" v-for="error of v$.form.bookTitle.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- BOOK TITLE -->
            
            <!-- BOOK TITLE -->
            <!-- <div class="col-span-12 xl:col-span-12">
              <div :class="{ error: v$.address.$errors.length }">
                <label
                  for="address"
                  class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                  >{{ $t('address') }}</label
                >
                <textarea
                  class="py-3 px-4 block w-full border outline-none border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  rows="3"
                  autocomplete="off"
                  v-model="state.address"
                  name="address"
                  id="address"
                ></textarea>
                <div class="input-errors" v-for="error of v$.address.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div> -->
            <!-- ADDRESS -->
            <div class="col-span-12 xl:col-span-12">
              <button
                @click="submitForm"
                type="button"
                class="py-3 font-headingFontFamily px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primaryHover disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <template v-if="state.loading">
                  <span
                    class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                    role="status"
                    aria-label="loading"
                  ></span>
                  {{ $t('loading') }}
                </template>
                <span v-else>{{ $t('addNewUser') }}</span>
              </button>
            </div>
          </div>
        </CardWrapper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import userAvatar from '@/assets/images/avatars/user.png'
import femaleAvatar from '@/assets/images/avatars/female-user.png'
// import CameraIcon from '@/components/icons/CameraIcon.vue'

import CardWrapper from '@/components/common/CardWrapper.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import { reactive, ref, computed } from 'vue'

import { useVuelidate } from '@vuelidate/core'
import { required, numeric, minLength, maxLength } from '@vuelidate/validators'

export default {
  components: {
    // CameraIcon,
    CardWrapper,
    BreadCrumb
  },
  setup() {
    const breadcrumb = ref([
      { name: 'Dashboard', link: '/' },
      { name: 'Books', link: '/books' },
      { name: 'New Book', link: '' }
    ])

    const fileInput = ref<HTMLInputElement | null>(null)

    const state = reactive({
      loading: false,
      btnLoading: false,
      url: '',

      form: {
        bookTitle: '',
        authors: [
          { name: '', family: '' },
          { name: '', family: '' },
          { name: '', family: '' }
        ],
        ISBN: '',
        publisher: '',
        publicationYear: '',
        subject: '',
        numberOfCopies: '',
        bookCoverImage: '',
        additionalDescription: '',
        keywords: []
      },
    })

    const openFileDialog = () => {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }

    const handleFileChange = (event: any) => {
      const file = event.target.files[0]
      if (file) {
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
          return
        }
        // Do something with the selected file
        const reader = new FileReader()
        reader.onload = () => {
          state.url = String(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }

    const submitForm = () => {
      v$.value.$touch()

      // console.log(v$.value.$errors)
      console.log(v$.value)

      // console.log(i18n.locale)

      if (v$.value.$error) {
        // Error
        return
      }

      // Success
    }

    const rules = computed(() => {
      return {
        form: {
          bookTitle: { required },
          authors: {
            required,
            minLength: minLength(1),
            maxLength: maxLength(3),
            $each: {
              name: { required },
              family: { required }
            }
          },
          ISBN: { required },
          publisher: { required },
          publicationYear: { required, numeric, minLength: minLength(4), maxLength: maxLength(4) },
          subject: { required },
          numberOfCopies: { required, numeric },
          bookCoverImage: { required },
          additionalDescription: { required },
          keywords: { required, minLength: minLength(1) }
        }
      }
    })

    const v$ = useVuelidate(rules, state)

    return {
      userAvatar,
      femaleAvatar,
      handleFileChange,
      openFileDialog,
      submitForm,
      breadcrumb,
      fileInput,
      state,
      v$
    }
  }
}
</script>
