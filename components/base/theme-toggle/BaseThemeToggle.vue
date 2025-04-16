<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);

handleDarkMode();

function handleDarkMode() {
  document.documentElement.classList.toggle('dark', isDark.value);
}

watch(isDark, () => {
  handleDarkMode();
});
</script>

<template>
  <button
    class="fixed top-4 right-4 z-50 px-4 py-2 rounded-xl shadow-md border border-border dark:border-border-dark bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
    @click="() => toggleDark()"
  >
    {{ isDark ? '☀️ Light' : '🌙 Dark' }}
  </button>
</template>
