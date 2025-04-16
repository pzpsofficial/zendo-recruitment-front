export type SnakeToCamel<S> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamel<U>>}`
  : S;

export type TransformKeys<T> = {
  [K in keyof T as SnakeToCamel<K>]: T[K];
};

export interface ListResourceMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface ListResourceResponse<T> {
  data: Array<T>;
  meta: ListResourceMeta;
}
