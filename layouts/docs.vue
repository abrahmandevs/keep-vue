<script lang="ts" setup>
import DocSidebar from "~/components/DocSidebar.vue";
import ToastWrapper from "~/src/components/Toast/ToastWrapper.vue";

const route = useRoute();
const { data } = await useAsyncData(`pages${route.path}`, () =>
  queryContent(route.path).findOne(),
);
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
    <section
      class="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20"></section>
    <section class="docs-page"></section>
    <section
      class="container relative z-20 grid grid-cols-12 gap-5 pt-10 2xl:pt-16">
      <DocSidebar />
      <div class="col-span-12 py-6 lg:col-span-9 xl:col-span-8 2xl:py-4">
        <div id="linkPage" class="overflow-y-auto">
          <ContentRenderer :value="data as any" id="mainContent" />
        </div>
      </div>
      <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
        <aside id="linkPage" class="sticky top-28 h-[80vh] 2xl:top-60">
          <div class="2xl:pl-5">
            <div class="flex flex-col justify-between overflow-y-auto">
              <h4
                class="mb-2 text-body-4 font-semibold uppercase text-black/100 dark:text-white">
                On this page
              </h4>
              <nav id="visible-table-of-contents">
                <ul class="border-l border-l-metal-100 dark:border-l-metal-800">
                  <li
                    v-for="(item, index) in data?.body?.toc?.links"
                    :key="item.id">
                    <NuxtLink :href="`#${item.id}`">{{ item.text }}</NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>
