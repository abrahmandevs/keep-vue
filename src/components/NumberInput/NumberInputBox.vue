<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";
import { computed, defineModel, defineProps, ref } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface NumberInputBoxProps
  extends /* @vue-ignore*/ InputHTMLAttributes {
  min?: number;
  max?: number;
}

const props = defineProps<NumberInputBoxProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const numberInputRef = ref<HTMLInputElement>();

const proxyValue = defineModel<number>();
</script>

<template>
  <input
    ref="numberInputRef"
    v-bind="restProps"
    v-model="proxyValue"
    :min="props.min"
    :max="props.max"
    type="number"
    :class="
      cn(
        'flex-auto bg-transparent px-3 py-2.5 text-center text-body-3 font-medium text-metal-900 outline-none',
        props.class,
      )
    " />
</template>
