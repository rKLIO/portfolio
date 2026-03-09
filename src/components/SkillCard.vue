<script setup>
defineProps(['title', 'text']);
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>