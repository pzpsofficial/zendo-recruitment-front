export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiUrl,
    onRequest({ options }) {
      if (config.public.apiSecret) {
        options.headers.set('Authorization', `Bearer ${config.public.apiSecret}`);
      }
    },
    async onResponseError({ error }) {
      console.error(error);
    },
  });

  return {
    provide: {
      api,
    },
  };
});
