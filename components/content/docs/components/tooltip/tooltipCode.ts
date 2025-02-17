const DefaultTooltipCode = {
  "TooltipComponent.vue": `
   <script setup>
import { Tooltip, TooltipAction, TooltipArrow, TooltipContent } from "keep-vue";
</script>

<template>
    <Tooltip>
      <TooltipAction as-child>
        <Button>Tooltip</Button>
      </TooltipAction>
      <TooltipContent>
        <p class="text-body-5 font-medium text-white">Tooltips - Title here</p>
        <TooltipArrow :height="8" :width="12" />
      </TooltipContent>
    </Tooltip>
</template>
    `,
};

const tooltipPlacementCode = {
  "TooltipComponent.vue": `
   <script setup>
import { Button, Tooltip, TooltipArrow, TooltipContent } from "keep-vue";


const positions = ["top", "bottom", "left", "right"];
</script>

<template>
  <Tooltip v-for="position in positions" :key="position" :delay-duration="0">

      <TooltipAction as-child>
        <Button class="first-letter:uppercase">{{ position }}</Button>
      </TooltipAction>

      <TooltipContent :side="position">
        <p class="text-body-5 font-medium text-white">Tooltips - Title here</p>

        <TooltipArrow :height="8" :width="12" />
        
      </TooltipContent>
    </Tooltip>
</template>

    `,
};

const tooltipWithLargeTextCode = {
  "TooltipComponent.vue": `
   <script setup>
import {
  Button,
  Tooltip,
  TooltipAction,
  TooltipArrow,
  TooltipContent,
} from "keep-vue";
</script>

<template>
    <Tooltip :delay-duration="0">
      <TooltipAction as-child>
        <Button>Tooltip</Button>
      </TooltipAction>

      <TooltipContent>
        <p className="text-body-4 font-medium text-white">
          Tooltips - Title here
        </p>
        <p className="text-body-5 font-normal text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <TooltipArrow :height="8" :width="12" />
        
      </TooltipContent>
    </Tooltip>
</template>
    `,
};

const tooltipWithColorVariantCode = {
  "TooltipComponent.vue": `
   <script setup>
import { Tooltip, TooltipAction, TooltipArrow, TooltipContent } from "keep-vue";

const tooltipColors = ["primary", "secondary", "success", "warning", "error"];
</script>

<template>
    <Tooltip v-for="color in tooltipColors" :key="color" :color="color as any">

      <TooltipAction as-child>
        <Button>Tooltip</Button>
      </TooltipAction>

      <TooltipContent>
        <p class="text-body-5 font-medium text-white first-letter:uppercase">
          {{ color }} tooltip
        </p>

        <TooltipArrow :height="8" :width="12" />

      </TooltipContent>
    </Tooltip>
</template>
    `,
};

export {
  DefaultTooltipCode,
  tooltipPlacementCode,
  tooltipWithColorVariantCode,
  tooltipWithLargeTextCode,
};
