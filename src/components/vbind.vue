
<script setup>
import {ref} from 'vue';

    const empid = ref(10)
    const textcolor = ref('textstyle')
    const content = ref('<h2>LTIMindtree</h2>')
    const status = ref(true)
    const attr1 = ref('id')
    const attr2 = ref('class')
    const user = ref(0)
    const cart = ref(['Item','Item'])
    const persons = ref([{id:1,name:"Piyush",city:"Bhore"},{id:2,name:"Pratyush", city:"Gopalganj"}])
    const product = ref()
    const item = ref()
    const countries = ref([]) 


    function addItem(){
        cart.value.push(item.value)
    }
    function removeItem(){
        cart.value.pop()
    }

</script>

<template>

    <!-- variable way of adding -->
    <div :[attr1]="empid" :[attr2]="textcolor" v-html="content" v-show="status"></div>
    <!-- <div :id="empid" :class="textcolor" v-html="content" v-show="status"></div> -->
     
    
    <!-- adding removing user -->
    <button v-on:click="user++" v-show="user<10">Add</button>
    <button v-on:click="user--" v-show="user">Remove</button> 
    <h4 v-if="user==0">No users</h4>
    <h4 v-else-if="user==1">{{ user }} user</h4>
    <h4 v-else>{{ user }} users</h4>


    <!-- adding item to cart using v-for looping -->
    <ol>
        <li v-for="(item,index) in cart">{{ item }} {{ index +1}}</li>
    </ol>
        <button @click="addItem()">Add Item</button>
        <button @click="removeItem()">Remove Item</button>


    <!-- taking data from object type  -->
    <ul>
        <li v-for="(person,count) in persons">{{count+1}}:> {{ person.name }} is from {{ person.city }}</li>
    </ul>


    <!-- taking input from input tag and putting in second line -->
    <input type="checkbox" v-model="product"/><br>
    <div v-if="product">v-if Content</div>

    <!-- selecting countries from lists -->
    <select v-model="countries" multiple>
        <option value="IN">India</option>
        <option value="US">USA</option>
        <option value="UK">UK</option>
    </select>{{ countries }}<br>
</template>

<style>
    .textstyle{
        color: red;
    }
</style>