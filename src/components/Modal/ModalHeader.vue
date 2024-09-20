<script setup lang="ts">
import { computed } from "vue";
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface ModalHeaderProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<ModalHeaderProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div v-bind="restProps" :class="cn('flex flex-col gap-1', props.class)">
    <slot></slot>
  </div>
</template>
