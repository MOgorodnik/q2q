<script setup lang="ts">
import { computed, ref } from "vue";

interface UserData {
  userName: string;
  userEmail: string;
}

const userName = ref('');
const userEmail = ref('');
const usersData = ref<UserData[]>([
  {
    userName: 'user 1',
    userEmail: 'w@cc.co'
  },{
    userName: 'user 2',
    userEmail: 'wow@cc.co'
  },
]);

const onFormSubmit = (e: Event) => {
  const formData = new FormData(e.target as HTMLFormElement);
  
  const nm = formData.get('userName') as string;
  const em = formData.get('userEmail') as string;
  // && in one line 
  // const { userName: nm, userEmail: em } = Object.fromEntries(formData) as { userName: string, userEmail: string };

  usersData.value.push({ userName: nm, userEmail: em });

  // Clear the reactive values of form fields
  userName.value = '';
  userEmail.value = '';

  // Reset the form fields
  (e.target as HTMLFormElement).reset();
}

const delUser = (i: number) => {
  usersData.value.splice(i, 1)
}

const msg = computed(() => {
  const count = usersData.value.length;
  if (!count) {
    return 'No users in DB!'
  } else if (count === 1) {
    return 'Only 1 user in DB!'
  } else {
    return `In DB ${ count } users!`
  }
})

// computed example
const price = ref(1000)
const discount = ref(10)

const finalPrice = computed(() => price.value - price.value / 100 * discount.value)
</script>

<template>
  <div>
    <h1>ComputedAndMethod.vue</h1>
    <hr>
    <form @submit.prevent="onFormSubmit($event)">
      <p><label for="userName">User name: <input v-model="userName" type="text" id="userName" name="userName" required /></label></p>
      <p><label for="userEmail">User email: <input v-model="userEmail" type="email" id="userEmail" name="userEmail" required /></label></p>
      <button type="submit">Submit</button>
    </form>
    <p class="mt-4 bg-warning">{{ msg }}</p>

    <ul>
      <li v-for="({userName, userEmail}, ind) in usersData" :key="ind">
        Name: {{ userName }} <br>
        Email: {{ userEmail }}
        <button @click="delUser(ind)">Delete user</button>
      </li>
    </ul>

    <hr>
    <p>Original price: {{ price }}</p>
    <!-- <input v-model.number="discount" type="number" step="5" min="0" max="30" /> -->
    <div><input v-model="discount" type="radio" value="10" name="discount" /> - 10%</div>
    <div><input v-model="discount" type="radio" value="20" name="discount" /> - 20 %</div>
    <div><input v-model="discount" type="radio" value="30" name="discount" /> - 30 %</div>
    <p>Discount: {{ discount }}</p>
    <p>Price with discount: {{ finalPrice }}</p>
  </div>
</template>