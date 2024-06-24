<script setup lang="ts">
defineProps<{
  arrPhotos: Array<any>
  msg: string
}>()

// console.log(111, msg); // x wrong syntax, use {{xxx}} in tmpl instead

</script>

<template>
  <div class="col" v-for="card in arrPhotos" :key="card.id">
    <div class="card h-100">
      <img :src="card.download_url" class="card-img-top" :alt="card.url">
      <div class="card-body">
        <h5 class="card-title">{{ card.author }}</h5>
        <p class="card-text">Width: {{ card.width }}</p>
        <p class="card-text">Height: {{ card.height }}</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">{{ card.url }}</small>
      </div>
    </div>
  </div>
</template>
<!-- 
try {
  const response = await fetch("https://api.collectapi.com/book/newBook", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
	  "authorization": "apikey 5KXR9OGN8qjbcxZskC8fSq:3qwZ2ZpCSZJQ3jqdZ2EYm5"
    },
  });
  const json = await response.json();
  console.log("Успех:", JSON.stringify(json));
} catch (error) {
  console.error("Ошибка:", error);
}
-->