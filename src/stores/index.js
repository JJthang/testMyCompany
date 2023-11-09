import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const storeData = defineStore("listData", () => {
  const listData = ref([
    {
      name: "thangpham",
      stock: 2000,
      price: 2000,
      desc: "dep dep",
      id: 2,
    },
    {
      name: "thangpham",
      stock: 40,
      price: 2000,
      desc: "dep dep",
      id: 3,
    },
  ]);
  const model = ref(false);

  const handAddElement = (formdata) => {
    listData.value.push(formdata);
  };
  const handChangeStateModel = () => {
    model.value = !model.value;
  };
  const handDeleteElement = (id) => {
    listData.value = listData.value.filter((item) => item.id != id);
  };
  const handUpdate = (index, dataItem) => {
    listData.value[index] = dataItem;
    model.value = false;
  };
  const handUpdateName = (item, id) => {
    listData.value[id] = item;
  };
  const handSearchData = (value) => {
    console.log(value);
    listData.value = listData.value.filter((item) =>
      item.name.trim().toLowerCase().includes(value.trim().toLowerCase())
    );
  };
  return {
    model,
    listData,
    handSearchData,
    handUpdate,
    handUpdateName,
    handDeleteElement,
    handChangeStateModel,
    handAddElement,
  };
});
