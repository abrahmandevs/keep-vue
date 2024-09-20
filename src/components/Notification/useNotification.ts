const NotificationStoreKey = "notification-store";
import { createInjectionState } from "@vueuse/core";
import type { ComputedRef } from "vue";

const [useProvideNotification, useInjectNotification] = createInjectionState(
  (position: ComputedRef) => {
    return { position };
  },
  {
    injectionKey: NotificationStoreKey,
  },
);

function useNotification() {
  const notificationState = useInjectNotification();

  if (!notificationState)
    throw new Error(
      "useNotification must be used within a <Notification /> Component",
    );

  return notificationState;
}

export { useNotification, useProvideNotification };
