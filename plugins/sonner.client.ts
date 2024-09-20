import { toast } from "vue-sonner";
import ToastWrapper from "~/src/components/Toast/ToastWrapper.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("ToastWrapper", ToastWrapper);

  return {
    provide: {
      toast,
    },
  };
});
