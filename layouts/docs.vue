<script lang="ts" setup>
import DocSidebar from "~/components/DocSidebar.vue";
import TableOfContent from "~/components/TableOfContent.vue";
import ToastWrapper from "~/src/components/Toast/ToastWrapper.vue";
</script>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <ToastWrapper
    :toast-options="{
      classes: {
        toast:
          'dark:!bg-metal-900 border dark:!border-metal-800 !border-white !bg-white',
        title: 'text-metal-900 dark:!text-white',
        description: 'dark:!text-metal-300 text-metal-600',
        actionButton: 'dark:!bg-metal-800 !bg-metal-900 !text-white',
        cancelButton: 'dark:!bg-metal-800 !bg-metal-900 !text-white',
        closeButton: 'dark:!bg-metal-800 !bg-metal-900 !text-white',
        error: '!text-error-500',
        success: '!text-success-500',
        warning: '!text-warning-500',
        info: '!text-primary-500',
      },
    }" />

  <Navbar />
  <main class="relative pt-20">
    <!-- upper area -> docs layout  -->
    <div
      class="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20 dark:bg-[#0d1015]"></div>
    <div class="docs-page"></div>
    <!-- docs layout container  -->
    <div
      class="container relative z-20 grid grid-cols-12 gap-5 pt-10 2xl:pt-16">
      <!-- left side bar  -> docs layout  -->
      <DocSidebar />
      <!-- main section of the layout  -->
      <div class="col-span-12 py-6 lg:col-span-9 xl:col-span-8 2xl:py-4">
        <!-- for showing dynamic content  -->
        <div id="linkPage" class="overflow-y-auto">
          <slot />
        </div>
      </div>
      <!-- table of content  -->
      <TableOfContent />
    </div>
  </main>
</template>
