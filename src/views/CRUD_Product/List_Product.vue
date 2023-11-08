<template>
<div class="w-full h-[900px] flex flex-col justify-center items-center">
  <div class="w-[60%] h-[10%] flex justify-start items-center">
    <input type="text" class="w-[300px] pl-2 h-[50px] border-[1px] rounded-md border-[#776B5D]" v-model="name" >
    <button class="w-[100px] h-[50px] ml-4 rounded-md bg-[#60A5FA] text-white" @click="SearchValue">Search</button>
  </div>
<table class="w-[60%] min-h-[50%] border-[1px] border-[#A9A9A9]">
  <thead>
    <tr class="border-[1px] border-[#A9A9A9] h-[60px]">
      <th class="flex-1">Name</th>
      <th class="flex-1">Stock</th>
      <th class="flex-1">Price</th>
      <th class="flex-1">Desc</th>
      <th class="flex-1">Action</th>
    </tr>
  </thead>
  <tbody>
    <item v-for="(item , index) in store.ListAllData" :key="item.id" :index="index" @index="handGetIndex" :item="item"  @idItem="handleEventId" />
  </tbody>
</table>
<Model v-if="store.StateModel"  :id="idData" @update="handUpdate" />
</div>
</template>
<script setup>
import {ref } from "vue";
import item from '../../components/item.vue'
import Model from '../../components/Model.vue'
import { StoreData } from "../../stores";

const store = StoreData();
const idData = ref(0);
const name = ref('')
const index = ref(0);

const handGetIndex = (value) => {
  index.value = value
}

const handleEventId  = (value) => {
  idData.value = value;
}
const handUpdate = (value) => {
  store.handUpdate(index.value, value)
}
const SearchValue = () => {
  store.handSearchData(name.value);
}
</script>
