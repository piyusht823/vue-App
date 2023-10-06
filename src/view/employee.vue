<script setup>
import {ref} from 'vue'

const employees = ref([
    {id:1, firstName: 'Piyush', lastName:'Tiwari'},
    {id:2, firstName: 'Pranav', lastName:'Singh'},
    {id:3, firstName: 'Gaurav', lastName:'Kumar'},
    {id:4, firstName: 'Rohan', lastName:'Verma'}
])
</script>

<template>
    <h2>Employees</h2>

    <p v-for="employee in employees" :key="employee.id">
        <!-- {{ employee.id }}. {{ employee.firstName }} {{ employee.lastName }} -->
        <router-link :to="{name:'employeedetails', params:{id:employee.id, firstName:employee.firstName}}" >{{ employee.id }}. {{ employee.firstName }}</router-link>
    </p>

</template>