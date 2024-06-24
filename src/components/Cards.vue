<script lang="ts">
import { defineComponent } from "vue";
import Card from './Card.vue'

export default defineComponent({
  name: 'Cards',
  components: {
    Card
  },
  setup() {
    const arrPhotos = [
      // https://picsum.photos/
      // {name: 'user1', age: 2, src: 'https://placekitten.com', alt: 'cat 1'}
      { "id": "89", "author": "Vectorbeast", "width": 4608, "height": 2592, "url": "https://unsplash.com/photos/rsJtMXn3p_c", "download_url": "https://picsum.photos/id/89/4608/2592" },
      { "id": "90", "author": "Rula Sibai", "width": 3000, "height": 1992, "url": "https://unsplash.com/photos/qVj3KuEikvg", "download_url": "https://picsum.photos/id/90/3000/1992" },
      { "id": "91", "author": "Jennifer Trovato", "width": 3504, "height": 2336, "url": "https://unsplash.com/photos/baRYCsjO6z4", "download_url": "https://picsum.photos/id/91/3504/2336" },
      { "id": "92", "author": "Rafael Souza", "width": 3568, "height": 2368, "url": "https://unsplash.com/photos/QxkBP3A9XmU", "download_url": "https://picsum.photos/id/92/3568/2368" },
      { "id": "93", "author": "Caroline Sada", "width": 2000, "height": 1334, "url": "https://unsplash.com/photos/r1XwWjI4PyE", "download_url": "https://picsum.photos/id/93/2000/1334" },
      { "id": "94", "author": "Jean Kleisz", "width": 2133, "height": 1200, "url": "https://unsplash.com/photos/4yzPVohNuVI", "download_url": "https://picsum.photos/id/94/2133/1200" },
      { "id": "95", "author": "Kundan Ramisetti", "width": 2048, "height": 2048, "url": "https://unsplash.com/photos/87TJNWkepvI", "download_url": "https://picsum.photos/id/95/2048/2048" },
      { "id": "96", "author": "Pawel Kadysz", "width": 4752, "height": 3168, "url": "https://unsplash.com/photos/CuFYW1c97w8", "download_url": "https://picsum.photos/id/96/4752/3168" }
    ]

    return {
      arrPhotos
    }
  },
});
</script>

<template>
  <div>
    <h2> Cards </h2>
    <div class="row row-cols-1 row-cols-md-5 g-4">
      <Card :arr-photos="arrPhotos" :msg="'44444444444444444'" />
    </div>
  </div>
</template>