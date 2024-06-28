<script setup lang="ts">
import CardBodyComponent from "@/components/asslot/CardBodyComponent.vue";
import CardFooterComponent from "./CardFooterComponent.vue";
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="https://picsum.photos/id/89/4608/2592" class="card-img-top" alt="...">
        <card-body-component>
          <template v-slot:title>New Title from parent  <br> &lt;template v-slot:title&gt; </template>
          <template v-slot:text>New Text from parent</template>
        </card-body-component>
        <hr>
        <card-body-component>
          <template v-slot:title></template>
          <template v-slot:text></template>
        </card-body-component>

        <card-footer-component>
          <template v-slot:footer>New Footer from parent v-slot:footer</template>
        </card-footer-component>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://picsum.photos/id/189/4608/2592" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>

  </div>
</template>
