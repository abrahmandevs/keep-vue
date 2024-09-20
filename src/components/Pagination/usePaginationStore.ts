// custom injectionKey
const PaginationStoreKey = "pagination-store";
import { createInjectionState } from "@vueuse/core";
import type { ComputedRef, Ref } from "vue";
import { ref } from "vue";

const [useProvidePagination, usePaginationStore] = createInjectionState(
  (initialValue: ComputedRef<string> | Ref<string>) => {
    //state
    const shape = ref(initialValue);
    return { shape };
  },

  {
    injectionKey: PaginationStoreKey,
  },
);

function usePagination() {
  const paginationStore = usePaginationStore();

  if (paginationStore == null) {
    throw new Error(
      "Please call `useProvidePagination` on the <Pagination/> component",
    );
  }
  return paginationStore;
}

export { usePagination, useProvidePagination };
