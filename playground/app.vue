<template>
  <div>
    <header class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-16">
        <VNavigation />
        <VLocalSwitcher />
      </div>
    </header>
    <main class="min-h-[calc(100vh - 4rem)]">
      <UContainer>
        <div class="flex flex-col lg:gap-8 py-8">
          <NuxtPage />
        </div>
      </UContainer>
    </main>
  </div>
</template>
