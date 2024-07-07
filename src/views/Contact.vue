<template>
  <h1>Contact Us</h1>
  <p>Leave your question and we will answer it as soon as possible! Thank you very much.</p>
  <div ref="el"></div>
  <div v-if="loading">
    <mark>Loading contact information ...</mark>
  </div>
  <div v-else-if="contactInfoErr" class="text-white bg-danger bg-gradient p-2">
    <p class="mb-0">{{ contactInfoErr }}</p>
  </div>
  <div v-else-if="!isContactInfoEmpty">
    <dl>
      <dt>Email:</dt>
      <dd>{{ contactInfo?.email }}</dd>
      <dt>Phone:</dt>
      <dd>{{ contactInfo?.phone }}</dd>
      <dt>City:</dt>
      <dd>{{ contactInfo?.address?.city }}</dd>
      <dt>Street:</dt>
      <dd>{{ contactInfo?.address?.street }}{{ contactInfo?.address?.suite }}</dd>
      <dt>ZIP:</dt>
      <dd>{{ contactInfo?.address?.zipcode }}</dd>
    </dl>
  </div>
  <div v-else>
    <p>No contact information available.</p>
  </div>
</template>

<script setup lang="ts">
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface ContactInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

import { ref, computed, onMounted } from "vue";
const el = ref<HTMLDivElement | null>(null);
const loading = ref(false)
const contactInfo = ref<ContactInfo | null>(null);
const contactInfoErr = ref<string | null>(null);

function isObjectEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

const isContactInfoEmpty = computed(() => {
  return !contactInfo.value || isObjectEmpty(contactInfo.value);
});

onMounted(async () => {
  el.value // <div>
  try {
    loading.value = true;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    contactInfo.value = await res.json() as ContactInfo;
  } catch (error: unknown) {
    contactInfoErr.value = 'Error! Could not reach the API. ' + (error instanceof Error ? error.message : String(error));
  } finally {
    loading.value = false
  }
})
</script>