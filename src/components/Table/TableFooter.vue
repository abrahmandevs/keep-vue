<script lang="ts" setup>
import { computed } from "vue";
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

export interface TableFooterProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<TableFooterProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <tfoot
    ref="HTMLTableSectionElement"
    v-bind="restProps"
    :class="
      cn(
        'border-t bg-metal-900 font-medium [&>tr]:last:border-b-0',
        props.class,
      )
    ">
    <slot></slot>
  </tfoot>
</template>
