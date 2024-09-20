<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Alert - Keep Vue",
  description:
    "The Alert component in the Keep React allows you to display important messages, notifications, or warnings to users. With customizable options for style, close icon, border, and state, you can create visually appealing and informative alerts that align with your design requirements.",
});

useHead({ ...metadata });

const route = useRoute();
const { data } = await useAsyncData(`pages${route.path}`, () =>
  queryContent(route.path).findOne(),
);
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <ContentRenderer class="col-span-12 lg:col-span-9" :value="data as any" />
  </DocsContentLayout>
</template>
