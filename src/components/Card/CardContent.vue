<script lang="ts" setup>
import { ref } from "vue";
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

export interface CardContentProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<CardContentProps>();

const cardContentRef = ref<HTMLDivElement>();
</script>
<template>
  <div v-bind="$attrs" ref="cardContentRef" :class="cn('p-6', props.class)">
    <slot />
  </div>
</template>
