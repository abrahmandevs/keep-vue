<script lang="ts" setup>
interface TocProps {
  tocData: any;
}

const { tocData } = defineProps<TocProps>();

console.log(tocData.value);
</script>

<template>
  <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
    <aside id="linkPage" class="sticky top-28 h-[80vh] 2xl:top-60">
      <div class="2xl:pl-5">
        <div class="flex flex-col justify-between overflow-y-auto">
          <h4
            class="mb-2 text-body-4 font-semibold uppercase text-black/100 dark:text-white">
            On this page
          </h4>
          <nav id="visible-table-of-contents"></nav>
        </div>
      </div>
    </aside>
  </div>
</template>
