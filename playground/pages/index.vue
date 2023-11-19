<script setup lang="ts">
import type { LoginDto } from '~/schema'
import type { FormSubmitEvent } from '#ui/types'

import { loginSchema } from '~/schema'

const state = reactive({
  name: undefined,
  email: undefined
})

function onSubmit (event: FormSubmitEvent<LoginDto>) {
  // eslint-disable-next-line no-console
  console.log(event.data)
}

</script>
<template>
  <div class="mx-auto w-full max-w-4xl">
    <UAlert
      icon="i-heroicons-command-line"
      color="primary"
      variant="solid"
      title="Heads up!"
      description="This example show translated zod error with a simple schema"
    />

    <UForm :schema="loginSchema" :state="state" class="flex flex-col gap-6 pt-6" @submit="onSubmit">
      <h1 class="text-2xl font-bold">
        Account
      </h1>
      <UDivider />
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.name" placeholder="Your name" />
      </UFormGroup>
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" placeholder="Your email" />
      </UFormGroup>
      <UButton type="submit" class="w-fit">
        Save
      </UButton>
    </UForm>
  </div>
</template>
