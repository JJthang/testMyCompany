import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const StoreData = defineStore("listData", () => {
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

  const ListAllData = computed(() => listData.value);
  const StateModel = computed(() => model.value);
  function handAddElement(formdata) {
    listData.value.push(formdata);
  }
  function handChangeStateModel() {
    model.value = !model.value;
  }
  function handDeleteElement(id) {
    listData.value = listData.value.filter((item) => item.id != id);
  }
  function handUpdate(index, dataItem) {
    this.listData[index] = dataItem;
    model.value = false;
  }
  function handSearchData(value) {
    listData.value = listData.value.filter((item) =>
      item.name.trim().toLowerCase().includes(value.trim().toLowerCase())
    );
  }
  return {
    model,
    listData,
    ListAllData,
    StateModel,
    handSearchData,
    handUpdate,
    handDeleteElement,
    handChangeStateModel,
    handAddElement,
  };
});
