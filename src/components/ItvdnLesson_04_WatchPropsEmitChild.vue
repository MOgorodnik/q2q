<script setup lang="ts">
interface CounterInterface {
  counter: number
}
defineProps<CounterInterface>()
</script>

<template>
  <div>
    <h3>child component {{ counter }}</h3>
  </div>
</template>