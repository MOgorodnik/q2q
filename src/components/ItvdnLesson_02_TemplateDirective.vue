<script lang="ts">
import Cards from './Cards.vue'
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'App',
  components: {
    Cards
  },
  setup() {
    const name = "BOB"
    const flag = ref(true)
    const count = ref(10)
    const email = ref('')
    const toggleBtnHandler = () => {
      flag.value = !flag.value;
      count.value++;
    }
    return {
      name,
      flag,
      count,
      email,
      toggleBtnHandler
    }
  }
})
</script>

<template>
  <div>
    <p>{{ name }} {{ flag }}</p>
    <hr>
    <!-- <button type="button" class="btn btn-danger">Danger</button> -->
    <button type="button" class="btn btn-danger" @click="toggleBtnHandler">
      click me to {{ !flag ? 'show' : 'hide' }}
    </button>
    Switched hide-show text {{ count ? count : 0 }} times

    <p v-if="flag">Showing</p>
    <p v-else="flag">Hidding</p>
    <hr>
    <p>
      <input class="form-control form-control-sm"
        type="email"
        placeholder="123"
        v-model="email"
        >
      <small>{{ email || 'start type your email' }}</small>
    </p>
    <hr>
    <cards />
  </div>
</template>
