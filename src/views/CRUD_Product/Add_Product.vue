<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-[50%] h-[70%]">
            <form  action="" @submit="onSubmit"  class="w-full h-full shadow-2xl rounded-xl px-3">
                <div class="w-[100%] h-[15%] flex justify-center items-center">
                    <h1 class="text-2xl font-sans text">Add Data</h1>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">Name :</label>
                        <input  type="text" v-bind="name" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{errors.name}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">In Stock :</label>
                        <input  type="number" v-bind="stock"  class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{errors.stock}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">Price :</label>
                        <input  type="number" v-bind="price" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{errors.price}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">Description :</label>
                        <input  type="text" v-bind="desc" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{errors.desc}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <button type="submit" class="w-[25%] h-[45%] bg-[#60A5FA] rounded-[10px] text-white hover:opacity-[0.9]">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { storeData } from '../../stores';
import { useForm } from "vee-validate";
import * as yup from "yup";
const store = storeData();
const validationSchema = yup.object().shape({
    name : yup.string().required(),
    stock : yup.number().required(),
    price : yup.number().required(),
    desc : yup.string().required(),
})
const {errors, handleSubmit, defineInputBinds} = useForm({
    validationSchema
})
const onSubmit =  handleSubmit((value, {resetForm}) => {
    const newData = {...value}
    store.handAddElement(newData);
    resetForm();
})
const stock = defineInputBinds('stock');
const name = defineInputBinds('name');
const price = defineInputBinds('price');
const desc = defineInputBinds('desc');
</script>

<style lang="scss" scoped>

</style>