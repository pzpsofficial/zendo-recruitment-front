import Pusher from 'pusher-js';

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  const pusher = new Pusher(runtimeConfig.public.pusherAppKey, {
    cluster: runtimeConfig.public.pusherAppCluster,
  });

  return {
    provide: {
      pusher,
    },
  };
});
