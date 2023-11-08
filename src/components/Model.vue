<template>
    <div class="w-full h-full fixed top-0 left-0 backdrop-blur-sm flex justify-center items-center">
        <div class="w-[25%] h-[70%]">
            <Form action="" @submit="onSubmit" :validation-schema="validate" v-slot="{errors}" class="w-full h-full shadow-2xl rounded-xl px-3">
                <div class="w-[100%] h-[15%] flex justify-center items-center relative">
                    <h1 class="text-2xl font-sans text">Update Data</h1>
                    <span class="absolute right-0 top-0 p-3 cursor-pointer" @click="handEmit" >X</span>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">Name :</label>
                        <Field type="text" name="name" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{errors.name}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">In Stock :</label>
                        <Field type="number" name="stock" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{errors.stock}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">Price :</label>
                        <Field type="number" name="price" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{errors.price}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <div class="w-full h-[70%]">
                        <label for="">Description :</label>
                        <Field type="text" name="desc" class="w-full h-[40%] mt-2 rounded-full border-[1px] border-[#A9A9A9] pl-2" />
                    </div>
                    <div class="w-full h-[30%]">
                        <p class="pl-2 text-red-600">{{errors.desc}}</p>
                    </div>
                </div>
                <div class="w-[100%] h-[17%]">
                    <button type="submit" class="w-[25%] h-[45%] bg-[#60A5FA] rounded-[10px] text-white hover:opacity-[0.9]">Submit</button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import { StoreData } from '../stores';
import { Field, Form } from "vee-validate";
import * as yup from "yup";
const {id} = defineProps(["id"]);
const emit = defineEmits();
const store = StoreData();
const validate = yup.object().shape({
    name : yup.string().required(),
    stock : yup.number().required(),
    price : yup.number().required(),
    desc : yup.string().required(),
})
const onSubmit = (value , {resetForm}) => {
    const newData = {...value}
    resetForm();
    emit('update', newData);
}
const handEmit = () => {
    store.handChangeStateModel();
}
</script>