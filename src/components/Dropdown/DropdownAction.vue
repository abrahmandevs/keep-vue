<script setup lang="ts">
import { computed } from "vue";
import {
  DropdownMenuTrigger,
  useForwardProps,
  type DropdownMenuTriggerProps,
} from "radix-vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DropdownMenuTriggerProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardProps = useForwardProps(restProps);
</script>

<template>
  <DropdownMenuTrigger :class="cn(props.class)" v-bind="forwardProps">
    <slot></slot>
  </DropdownMenuTrigger>
</template>
