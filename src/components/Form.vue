
<script setup>
import { ref } from 'vue';
    const age = ref([])
    const married =ref()
    const details = ref({name:'Piyush',email:'piyusht823@gmail.com',address:'Bhore Bihar - 841426'})
</script>


<template>
    <div>
    <h2>Form</h2>
    <form>
        Name:<input type="text" v-model.lazy="details.name"/><br>{{details.name}}<br><br>
        Email:<input type="email" v-model.lazy="details.email"/><br>{{ details.email }}<br> <br>
        Address:<input type="text" v-model.lazy="details.address"/><br>{{ details.address }}<br> <br>

        <select v-model="age">
            <option value="Below 9">Age(below 9)</option>
            <option value="9+">Age(9-18)</option>
            <option value="18+">Age(Above 18)</option>
        </select><br>{{ age }}<br>
        
        Married: <input type="checkbox" v-model="married"/>
        <p v-if="married">Married</p><br><br>

        <button @click="SubmitEvent">Submit</button>
    </form>
    </div>
</template>