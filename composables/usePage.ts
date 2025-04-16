export function usePage() {
  const route = useRoute();

  const page = computed(() => {
    let pageParam = '';

    if (route.query.page) {
      if (Array.isArray(route.query.page)) {
        pageParam = route.query.page[0] ? route.query.page[0] : '';
      } else {
        pageParam = route.query.page;
      }
    }

    return Math.floor(isNaN(parseInt(pageParam)) ? 1 : parseInt(pageParam));
  });

  function isActive(value: number) {
    return page.value === value;
  }

  return {
    page,
    isActive,
  };
}
