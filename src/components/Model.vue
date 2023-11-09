<template>
    <div class="w-full h-full fixed top-0 left-0 backdrop-blur-sm flex justify-center items-center">
        <div class="w-[25%] h-[70%]">
            <form action="" @submit="onSubmit" class="w-full h-full shadow-2xl rounded-xl px-3">
                <div class="w-[100%] h-[15%] flex justify-center items-center relative">
                    <h1 class="text-2xl font-sans text">Update Data</h1>
                    <span class="absolute right-0 top-0 p-3 cursor-pointer" @click="handEmit" >X</span>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">Name :</label>
                        <input  type="text" v-model="name.value.value" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{name.errorMessage}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">In Stock :</label>
                        <input  type="number" v-model="stock.value.value"  class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{stock.errorMessage}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">Price :</label>
                        <input  type="number" v-model="price.value.value" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{price.errorMessage}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">Description :</label>
                        <input  type="text" v-model="desc.value.value" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{errors.errorMessage}}</p>
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
import {defineProps} from 'vue'
import { storeData } from '../stores';
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
const {id} = defineProps(["id"]);
const emit = defineEmits();
const store = storeData();
const validationSchema = yup.object().shape({
    name : yup.string().required(),
    stock : yup.number().required(),
    price : yup.number().required(),
    desc : yup.string().required(),
})
const { errors, handleSubmit, values } = useForm({
    validationSchema
})

const onSubmit = handleSubmit((value , {resetForm}) => {
    console.log(value);
    const newData = {...value}
    resetForm();
    emit('update', newData);
})
const name = useField('name', values);
const stock = useField('stock', values);
const price = useField('price', values);
const desc = useField('desc', values);
const handEmit = () => {
    store.handChangeStateModel();
}
</script>