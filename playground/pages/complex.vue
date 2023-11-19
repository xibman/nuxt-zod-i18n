<script setup lang="ts">
import type { userDto } from '~/schema'
import type { FormSubmitEvent } from '#ui/types'

import { userSchema } from '~/schema'

const state = reactive({
  birthDate: new Date(),
  email: 'test@test.com',
  firstName: 'test',
  lastName: 'test',
  preferredColor: 'blue'
})

function onSubmit (event: FormSubmitEvent<userDto>) {
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
      description="This example show translated zod error with a complex schema and interpolated value in error"
    />

    <UForm :schema="userSchema" :state="state" class="flex flex-col gap-6 pt-6" @submit="onSubmit">
      <h1 class="text-2xl font-bold">
        Account
      </h1>
      <UDivider />
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.birthDate" placeholder="Your birthDate" />
      </UFormGroup>
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" placeholder="Your email" />
      </UFormGroup>
      <UFormGroup label="First name" name="firstName">
        <UInput v-model="state.firstName" placeholder="Your firstName" />
      </UFormGroup>
      <UFormGroup label="Last name" name="lastName">
        <UInput v-model="state.lastName" placeholder="Your last name" />
      </UFormGroup>
      <UFormGroup label="Preferred color" name="preferredColor">
        <UInput v-model="state.preferredColor" placeholder="Your preferred color" />
      </UFormGroup>
      <UButton type="submit" class="w-fit">
        Save
      </UButton>
    </UForm>
  </div>
</template>
