export default defineNuxtPlugin(() => {
  const api = $fetch.create({
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
