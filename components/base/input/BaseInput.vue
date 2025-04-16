<script setup lang="ts">
const props = defineProps<{
  name: string;
  type: 'text';
  modelValue: string;
  label?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const value = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal !== value.value) {
      value.value = newVal;
    }
  }
);

watch(value, (newVal) => {
  emit('update:modelValue', newVal);
});
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label v-if="label" :for="name" class="text-sm font-medium text-text-muted dark:text-text-dark">
      {{ label }}
    </label>

    <input
      :id="name"
      v-model="value"
      :name="name"
      :type="type"
      class="px-4 py-2 rounded-xl shadow-sm border text-sm text-text dark:text-text-dark bg-surface dark:bg-surface-dark border-border dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  </div>
</template>
