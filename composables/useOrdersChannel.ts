export function useOrdersChannel<T>(
  handlers: Record<string, ((data: T) => void) | ((data: T) => Promise<void>)>
) {
  const { $pusher } = useNuxtApp();

  const channel = ref<Pusher.Channel>();

  function subscribeToChannel() {
    channel.value = $pusher.subscribe('orders');
  }

  function destroy() {
    if (!channel.value) {
      return;
    }

    channel.value.unbind();
  }

  function bindEvents() {
    Object.entries(handlers).forEach(([event, handler]) => {
      channel.value?.bind(event, handler);
    });
  }

  function init() {
    if (!import.meta.client) {
      return;
    }

    subscribeToChannel();
    bindEvents();
  }

  return {
    init,
    destroy,
  };
}
