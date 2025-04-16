// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function apiDto<T extends Record<string, any>, K>(obj: T): K {
  const result: Record<string, unknown> = {};

  for (const key in obj) {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    result[camelKey] = obj[key];
  }

  return result as K;
}
