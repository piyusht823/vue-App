<script setup>
import EmployeeCard from './components/EmployeeCard.vue';
import Form from './components/Form.vue';
import HelloWorld from './components/HelloWorld.vue'
import OptionsvsComposition from './components/OptionsvsComposition.vue'
import vbind from './components/vbind.vue';
import task from './components/task.vue';
</script>

<template>
  <!-- <Form/> -->
  <!-- <EmployeeCard/> -->
  <!-- <vbind/> -->
  <!-- <Optionsvscomposition/> -->

  <div style="background-color: rgb(229, 239, 97);">
    <router-link :to="{name:'home'}">Home</router-link> | 
    <router-link :to="{name:'about'}">About</router-link> | 
    <router-link :to="{name:'contact'}">Contact</router-link> | 
    <router-link :to="{name:'employee'}">Employee</router-link><br>
  </div>

  <router-view/>

  <task/>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
