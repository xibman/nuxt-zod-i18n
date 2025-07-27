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
      <USeparator />
      <UFormField
        :label="t('dictionary.name')"
        name="name"
        size="xl"
      >
        <UInput
          v-model="state.birthDate"
          placeholder="Your birthDate"
          class="w-full"
        />
      </UFormField>
      <UFormField
        :label="t('dictionary.email')"
        name="email"
        size="xl"
      >
        <UInput
          v-model="state.email"
          placeholder="Your email"
          class="w-full"
        />
      </UFormField>
      <UFormField
        :label="t('dictionary.firstName')"
        name="firstName"
        size="xl"
      >
        <UInput
          v-model="state.firstName"
          placeholder="Your firstName"
          class="w-full"
        />
      </UFormField>
      <UFormField
        :label="t('dictionary.lastName')"
        name="lastName"
        size="xl"
      >
        <UInput
          v-model="state.lastName"
          placeholder="Your last name"
          class="w-full"
        />
      </UFormField>
      <UFormField
        :label="t('pages.complex.preferredColor')"
        name="preferredColor"
        size="xl"
      >
        <UInput
          v-model="state.preferredColor"
          placeholder="Your preferred color"
          class="w-full"
        />
      </UFormField>
      <UButton
        type="submit"
        class="w-fit"
        size="lg"
      >
        {{ t('dictionary.save') }}
      </UButton>
    </UForm>
  </div>
</template>
