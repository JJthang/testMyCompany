<template>
  <div class="w-full h-[900px] flex">
    <div class="w-1/2 h-full">
      <Add_Product />
    </div>
    <div class="w-1/2 h-full">
      <List_Product />
    </div>
  </div>
</template>

<script setup>
import Add_Product from './views/CRUD_Product/Add_Product.vue';
import List_Product from './views/CRUD_Product/List_Product.vue';

</script>
