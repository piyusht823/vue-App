<script setup>
  import { ref, computed } from 'vue'
  
  const count = ref(0)
  
  const incrementCount = () => {
    count.value++
  }
  
  const decrementCount = () => {
    count.value--
  }
  
  const oddOrEven = computed(() => {
    return count.value % 2 === 0
  })
</script>


<template>
    <div>
      {{ count }}
    </div>
    <div>
      <button v-on:click="incrementCount">+</button>
      <button v-on:click="decrementCount" v-show="count>0">-</button>
    </div>
  
    <div>
      
    This counter is :<p v-if="oddOrEven">Even</p><p v-else>Odd</p>
    </div>
  </template>  