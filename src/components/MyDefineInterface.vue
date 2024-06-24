<script lang="ts">
const PropsDefaultOptions = {
  log: 10,
  msg: 'I am Default!'
}
</script>

<script setup lang="ts">
interface PropsInterface {
  log: number
  msg: string
}

const props = withDefaults(defineProps<PropsInterface>(), PropsDefaultOptions)
</script>

<template>
  <p>Aloha, <pre> {{ props }}</pre></p> 
  <h1>Aloha, {{ msg }}</h1>
</template>

