<template>
     <tr class="border-b-[1px] border-[#F1EFEF] h-10 " >
      <td class="text-center">{{ item.name }}</td>
      <td class="text-center" :class="item.stock < 50 ? 'text-[#FF8080]' : 'text-[#A6CF98]'"  >{{ item.stock }}</td>
      <td class="text-center">{{ item.price }}</td>
      <td class="text-center">{{ item.desc }}</td>
      <td class="text-center">
        <button class="w-[60px] h-[40px] text-white rounded-lg bg-[#F87171] hover:opacity-[0.9] m-1" @click="handDelete(item.id)">Delete</button>
        <button class="w-[60px] h-[40px] text-white rounded-lg bg-[#60A5FA] hover:opacity-[0.9] m-1" @click="emitEvent(item.id)" >Edit</button>
    </td>
    </tr>
</template>

<script setup>
import {  defineEmits } from "vue";
import { StoreData } from "../stores";
const emit = defineEmits();
const store = StoreData();
const {item, index} = defineProps(["item","index"]);
const handDelete = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      store.handDeleteElement(id)
    }
}
function emitEvent(value) {
  store.handChangeStateModel();
  emit('idItem', value)
  emit('index', index);
}
</script>

<style lang="scss" scoped>

</style>