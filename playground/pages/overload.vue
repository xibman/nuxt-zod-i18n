<script setup lang="ts">
import type { WebsiteDto } from '~/schema'
import type { FormSubmitEvent } from '#ui/types'

import { websiteSchema } from '~/schema'

const { t } = useI18n()
const state = reactive({
  name: 'My website',
  url: 'Not an url'
})

function onSubmit(event: FormSubmitEvent<WebsiteDto>) {
  // eslint-disable-next-line no-console
  console.log(event.data)
}
</script>
<template>
  <div class="mx-auto w-full max-w-4xl">
    <UAlert
icon="i-heroicons-command-line" color="primary" variant="solid" :title="t('pages.overload.alert.title')"
      :description="t('pages.overload.alert.description')" />

    <UForm :schema="websiteSchema" :state="state" class="flex flex-col gap-6 pt-6" @submit="onSubmit">
      <h1 class="text-2xl font-bold">
        {{ t('pages.overload.title') }}
      </h1>
      <UDivider />
      <UFormGroup :label="t('dictionary.name')" name="name">
        <UInput v-model="state.name" placeholder="Website name" />
      </UFormGroup>
      <UFormGroup label="Url" name="url">
        <UInput v-model="state.url" placeholder="Website url" />
      </UFormGroup>
      <UButton type="submit" class="w-fit">
        Save
      </UButton>
    </UForm>
  </div>
</template>
