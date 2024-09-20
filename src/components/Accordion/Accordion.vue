<script lang="ts" setup>
import { useProvideAccordionStore } from "./useAccordionStore"
import {
  AccordionRoot,
  useForwardPropsEmits,
  type AccordionRootEmits,
  type AccordionRootProps,
} from "radix-vue"

export interface AccordionProps {
  flush?: boolean
}

const props = defineProps<AccordionRootProps & AccordionProps>()
const emits = defineEmits<AccordionRootEmits>()

const forwardProps = useForwardPropsEmits(props, emits)
useProvideAccordionStore(props.flush)
</script>

<template>
  <AccordionRoot v-bind="forwardProps">
    <slot />
  </AccordionRoot>
</template>
