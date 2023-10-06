<script setup>
defineProps({
    id:String,
    firstName:String
})

</script>

<template>
    <h2>Employee</h2>
    <p>The Employee Id and First Name : {{ id }} {{ firstName }}</p>
</template>