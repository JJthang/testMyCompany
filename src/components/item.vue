<template>
     <tr class="border-b-[1px] border-[#F1EFEF] h-10 " >
      <td class="text-center">
        {{ item.name }}
        <br>
        <input class="border-[1px] h-[40px] rounded-lg border-[#A9A9A9] pl-2" v-model="input" type="text">
        <button @click="handChangeName" class="w-[140px] rounded-lg hover:opacity-[0.9] text-white ml-2 h-[40px] bg-green-500">Change Name</button>
      </td>
      <td class="text-center" :class="item.stock < 50 ? 'text-[#FF8080]' : 'text-[#A6CF98]'"  >{{ item.stock }}</td>
      <td class="text-center">{{ item.price }}</td>
      <td class="text-center">{{ item.desc }}</td>
      <td class="text-center">
        <button class="w-[60px] h-[40px] text-white rounded-lg bg-[#F87171] hover:opacity-[0.9] m-1" @click="handDelete(item.id)">Delete</button>
        <button class="w-[60px] h-[40px] text-white rounded-lg bg-[#60A5FA] hover:opacity-[0.9] m-1" @click="handEmitEvent(item.id)" >Edit</button>
    </td>
    </tr>
</template>

<script setup>
import {  defineEmits, ref } from "vue";
import { storeData } from "../stores";
const input = ref("");
const emit = defineEmits();
const store = storeData();
const {item, index} = defineProps(["item","index"]);
const handDelete = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      store.handDeleteElement(id)
    }
}
const handEmitEvent = (value) => {
  store.handChangeStateModel();
  emit('idItem', value)
  emit('index', index);
}
const handChangeName = () => {
  item.name = input.value; 
  store.handUpdateName(item, index);
}
</script>

<style lang="scss" scoped>

</style>