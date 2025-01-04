<script setup lang="ts">
import type { userDto } from '~/schema'
import type { FormSubmitEvent } from '#ui/types'

import { userSchema } from '~/schema'

const { t } = useI18n()
const state = reactive({
  birthDate: new Date().toISOString(),
  email: 'test@test.com',
  firstName: 'test',
  lastName: 'test',
  preferredColor: 'blue',
})

function onSubmit(event: FormSubmitEvent<userDto>) {
  console.log(event.data)
}
</script>

<template>
  <div class="mx-auto w-full max-w-4xl">
    <UAlert
      icon="i-heroicons-command-line"
      color="primary"
      variant="solid"
      :title="t('pages.complex.alert.title')"
      :description="t('pages.complex.alert.description')"
    />

    <UForm
      :schema="userSchema"
      :state="state"
      class="flex flex-col gap-6 pt-6"
      @submit="onSubmit"
    >
      <h1 class="text-2xl font-bold">
        {{ t('pages.index.title') }}
      </h1>
      <UDivider />
      <UFormGroup
        :label="t('dictionary.name')"
        name="name"
      >
        <UInput
          v-model="state.birthDate"
          placeholder="Your birthDate"
        />
      </UFormGroup>
      <UFormGroup
        :label="t('dictionary.email')"
        name="email"
      >
        <UInput
          v-model="state.email"
          placeholder="Your email"
        />
      </UFormGroup>
      <UFormGroup
        :label="t('dictionary.firstName')"
        name="firstName"
      >
        <UInput
          v-model="state.firstName"
          placeholder="Your firstName"
        />
      </UFormGroup>
      <UFormGroup
        :label="t('dictionary.lastName')"
        name="lastName"
      >
        <UInput
          v-model="state.lastName"
          placeholder="Your last name"
        />
      </UFormGroup>
      <UFormGroup
        :label="t('pages.complex.preferredColor')"
        name="preferredColor"
      >
        <UInput
          v-model="state.preferredColor"
          placeholder="Your preferred color"
        />
      </UFormGroup>
      <UButton
        type="submit"
        class="w-fit"
      >
        {{ t('dictionary.save') }}
      </UButton>
    </UForm>
  </div>
</template>
