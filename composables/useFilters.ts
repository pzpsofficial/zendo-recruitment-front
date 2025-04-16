export function useFilters() {
  const route = useRoute();
  const router = useRouter();

  const search = computed({
    get: () => (route.query.search as string) || '',
    set: (value: string) => {
      router.replace({
        query: {
          ...route.query,
          search: value || undefined,
        },
      });
    },
  });

  return {
    search,
  };
}
