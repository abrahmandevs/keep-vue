<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Skeleton,
  SkeletonLine,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from "~/src";
import { TabsFillCode } from "./tabsCode";
</script>

<template>
  <CodeHighlightWithPreview :code="TabsFillCode">
    <Tabs variant="fill" default-active="1" class="mx-auto max-w-xl">
      <TabList>
        <TabItem value="1">
          <PhosphorIconUser :size="16" />
          Profile
        </TabItem>
        <TabItem value="2">
          <PhosphorIconGear :size="16" />
          Settings
        </TabItem>
        <TabItem value="3">
          <PhosphorIconBuildings :size="16" />
          Company
        </TabItem>
        <TabItem value="4">
          <PhosphorIconShieldWarning :size="16" />
          Privacy
        </TabItem>
      </TabList>
      <TabContent value="1">
        <Skeleton class="max-w-full space-y-2.5">
          <SkeletonLine class="h-4 w-11/12" />
          <SkeletonLine class="h-4 w-9/12" />
          <SkeletonLine class="h-4 w-10/12" />
          <SkeletonLine class="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="2">
        <Skeleton class="max-w-full space-y-2.5">
          <SkeletonLine class="h-4 w-11/12" />
          <SkeletonLine class="h-4 w-9/12" />
          <SkeletonLine class="h-4 w-10/12" />
          <SkeletonLine class="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="3">
        <Skeleton class="max-w-full space-y-2.5">
          <SkeletonLine class="h-4 w-11/12" />
          <SkeletonLine class="h-4 w-9/12" />
          <SkeletonLine class="h-4 w-10/12" />
          <SkeletonLine class="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
      <TabContent value="4">
        <Skeleton class="max-w-full space-y-2.5">
          <SkeletonLine class="h-4 w-11/12" />
          <SkeletonLine class="h-4 w-9/12" />
          <SkeletonLine class="h-4 w-10/12" />
          <SkeletonLine class="h-4 w-7/12" />
        </Skeleton>
      </TabContent>
    </Tabs>
  </CodeHighlightWithPreview>
</template>
