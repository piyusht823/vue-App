
<script setup>
import {ref} from 'vue';

    const empid = ref(10)
    const textcolor = ref('textstyle')
    const content = ref('<h2>LTIMindtree</h2>')
    const status = ref(true)
    const attr1 = ref('id')
    const attr2 = ref('class')
    const user = ref(0)
</script>

<template>

        
    <div :[attr1]="empid" :[attr2]="textcolor" v-html="content" v-show="status"></div>
    <!-- <div :id="empid" :class="textcolor" v-html="content" v-show="status"></div> -->
     
    <button v-on:click="user++" v-show="user<10">Add</button>
    <button v-on:click="user--" v-show="user">Remove</button> 
    <h4 v-if="user==0">No users</h4>
    <h4 v-else-if="user==1">{{ user }} user</h4>
    <h4 v-else>{{ user }} users</h4>




</template>

<style>
    .textstyle{
        color: red;
    }
</style>