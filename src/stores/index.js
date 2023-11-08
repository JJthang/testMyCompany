import { defineStore } from "pinia";

export const StoreData = defineStore("listData", {
  state: () => {
    return {
      listData: [
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
      ],
      model: false,
    };
  },
  getters: {
    ListAllData: (state) => state.listData,
    StateModel: (state) => state.model,
  },
  actions: {
    handAddElement(formdata) {
      this.listData.push(formdata);
    },
    handChangeStateModel(formdata) {
      this.model = !this.model;
    },
    handDeleteElement(id) {
      this.listData = this.listData.filter((item) => item.id != id);
    },
    handUpdate(index, dataItem) {
      this.listData[index] = dataItem;
      this.model = false;
    },
    handSearchData(value) {
      this.listData = this.listData.filter((item) =>
        item.name.trim().toLowerCase().includes(value.trim().toLowerCase())
      );
    },
  },
});
