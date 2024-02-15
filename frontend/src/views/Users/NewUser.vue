<template>
  <div class="mx-6 pb-6 mb-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-12">
        <BreadCrumb :show="true" :items="breadcrumb" :title="$t('newUser')" />
      </div>
      <div class="col-span-12 xl:col-span-12">
        <CardWrapper title="addNewUser">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 xl:col-span-12">
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
            </div>
            <div class="col-span-12 xl:col-span-6">
              <div :class="{ error: v$.username.$errors.length }">
                <label
                  for="username"
                  class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                  >{{ $t('username') }}</label
                >
                <input
                  autocomplete="off"
                  v-model="state.username"
                  name="username"
                  id="username"
                  class="py-3 px-4 block w-full border outline-none border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                <div class="input-errors" v-for="error of v$.username.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- USERNAME -->
            <div class="col-span-12 xl:col-span-6">
              <div :class="{ error: v$.name.$errors.length }">
                <label
                  for="name"
                  class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                  >{{ $t('name') }}</label
                >
                <input
                  autocomplete="off"
                  v-model="state.name"
                  name="name"
                  id="name"
                  class="py-3 px-4 block w-full border outline-none border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- NAME -->
            <div class="col-span-12 xl:col-span-6">
              <div :class="{ error: v$.family.$errors.length }">
                <label
                  for="family"
                  class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                  >{{ $t('family') }}</label
                >
                <input
                  autocomplete="off"
                  v-model="state.family"
                  name="family"
                  id="family"
                  class="py-3 px-4 block w-full border outline-none border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                <div class="input-errors" v-for="error of v$.family.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- FAMILY -->
            <div class="col-span-12 xl:col-span-6">
              <div :class="{ error: v$.email.$errors.length }">
                <label
                  for="email"
                  class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                  >{{ $t('email') }}</label
                >
                <input
                  autocomplete="off"
                  v-model="state.email"
                  name="email"
                  id="email"
                  class="py-3 px-4 block w-full border outline-none border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- EMAIL -->
            <div class="col-span-12 xl:col-span-6">
              <div :class="{ error: v$.access.$errors.length }">
                <label
                  for="access"
                  class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                  >{{ $t('access') }}</label
                >
                <select
                  id="access"
                  v-model="state.access"
                  class="py-3 px-4 block w-full border outline-none bg-white border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                >
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                </select>
                <div class="input-errors" v-for="error of v$.access.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- ACCESS -->
            <div class="col-span-12 xl:col-span-6">
              <div :class="{ error: v$.mobile.$errors.length }">
                <label
                  for="mobile"
                  class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                  >{{ $t('mobile') }}</label
                >
                <input
                  autocomplete="off"
                  v-model="state.mobile"
                  name="mobile"
                  id="mobile"
                  class="py-3 px-4 block w-full border outline-none border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                <div class="input-errors" v-for="error of v$.mobile.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- MOBILE -->
            <div class="col-span-12 xl:col-span-6">
              <div :class="{ error: v$.password.$errors.length }">
                <label
                  for="password"
                  class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                  >{{ $t('password') }}</label
                >
                <div class="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    v-model="state.password"
                    class="py-3 px-4 block w-full border outline-none border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                  <button
                    type="button"
                    data-hs-toggle-password='{"target": "#password"}'
                    class="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <EyePasswordIcon />
                  </button>
                </div>
                <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- PASSWORD -->
            <div class="col-span-12 xl:col-span-6">
              <label
                for="password"
                class="block text-sm font-medium mb-1 text-gray-700 dark:text-white"
                >{{ $t('sex') }}</label
              >
              <div class="flex gap-x-6">
                <div class="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-group-1"
                    checked
                    @change="updateSex(false)"
                  />
                  <label
                    for="hs-radio-group-1"
                    class="text-sm text-gray-500 ms-2 dark:text-gray-400"
                    >{{ $t('female') }}</label
                  >
                </div>
                <div class="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-group-2"
                    @change="updateSex(true)"
                  />
                  <label
                    for="hs-radio-group-2"
                    class="text-sm text-gray-500 ms-2 dark:text-gray-400"
                    >{{ $t('male') }}</label
                  >
                </div>
              </div>
            </div>
            <!-- SEX -->
            <div class="col-span-12 xl:col-span-12">
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
            </div>
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
import CameraIcon from '@/components/icons/CameraIcon.vue'
import EyePasswordIcon from '@/components/icons/EyePasswordIcon.vue'

import CardWrapper from '@/components/common/CardWrapper.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import { reactive, ref, computed } from 'vue'

import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'

export default {
  components: {
    EyePasswordIcon,
    CameraIcon,
    CardWrapper,
    BreadCrumb
  },
  setup() {
    const breadcrumb = ref([
      { name: 'Dashboard', link: '/' },
      { name: 'Users', link: '/users' },
      { name: 'New User', link: '' }
    ])

    const fileInput = ref<HTMLInputElement | null>(null)

    const state = reactive({
      loading: false,
      btnLoading: false,
      url: '',

      photo: '',
      sex: false,
      name: '',
      family: '',
      access: '',
      email: '',
      mobile: '',
      phone: '',
      username: '',
      address: '',
      password: ''
    })

    const updateSex = (sex: boolean) => {
      state.sex = sex
    }

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

      console.log(state.sex);
      console.log(v$.value.$errors)

      // console.log(i18n.locale)

      if (v$.value.$error) {
        // Error
        return
      }

      const form = {
        
      }

      // Success
    }

    // Complex text custom validation
    const complexText = (value: string) => {
      const containsUppercase = /[A-Z]/.test(value)
      const containsLowercase = /[a-z]/.test(value)
      const containsNumber = /[0-9]/.test(value)
      const containsSpecial = /[#?!@$%^&*-]/.test(value)
      return containsUppercase && containsLowercase && containsNumber && containsSpecial
    }

    const rules = computed(() => {
      return {
        sex: { required },
        name: { required },
        family: { required },
        access: { required },
        email: { required, email },
        mobile: {
          required,
          numeric,
          minLength: minLength(11),
          maxLength: maxLength(11)
        },
        phone: { required },
        address: { required },
        username: { required },
        password: {
          required,
          complexText: helpers.withMessage(
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
            complexText
          )
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
      updateSex,
      breadcrumb,
      fileInput,
      state,
      v$
    }
  }
}
</script>
