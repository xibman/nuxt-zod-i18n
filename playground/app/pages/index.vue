<script setup lang="ts">
import type { LoginDto } from '~/schema'
import type { FormSubmitEvent } from '#ui/types'

import { loginSchema } from '~/schema'

const { t } = useI18n()
const state = reactive({
  name: undefined,
  email: undefined,
})

function onSubmit(event: FormSubmitEvent<LoginDto>) {
  console.log(event.data)
}
</script>

<template>
  <div class="mx-auto w-full max-w-4xl">
    <UAlert
      icon="i-heroicons-command-line"
      color="primary"
      variant="solid"
      :title="t('pages.index.alert.title')"
      :description="t('pages.index.alert.description')"
    />

    <UForm
      :schema="loginSchema"
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
          v-model="state.name"
          placeholder="Your name"
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
