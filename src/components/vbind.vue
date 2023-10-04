
<script setup>
import {ref} from 'vue';

    const empid = ref(10)
    const textcolor = ref('textstyle')
    const content = ref('<b>Mindtree</b>')
    const status = ref(true)
    const attr1 = ref('id')
    const attr2 = ref('class')
</script>

<template>
    <!-- <div :id="empid" :class="textcolor" v-html="content" v-show="status"> -->
    <div :[attr1]="empid" :[attr2]="textcolor" v-html="content" v-show="status">

    </div>
</template>

<style>
    .textstyle{
        color: red;
    }
</style>