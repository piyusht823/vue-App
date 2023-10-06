<!-- <script>
  import { ref } from 'vue';
  import { useCartStore } from '../stores/cart'; // Import the Pinia store
  
  export default {
    data() {
      return {
        newItem: '',
      };
    },
    computed: {
      cartItems() {
        return useCartStore().items;
      },
    },
    methods: {
      addItem() {
        if (this.newItem.trim() !== '') {
          useCartStore().addItem(this.newItem);
          this.newItem = '';
        }
      },
      removeItem(index) {
        useCartStore().removeItem(index);
      },
    },
  };
  </script>
  

<template>
    <div>
      <h1>Shopping Cart</h1>
  
      <div>
        <input v-model="newItem" @keyup.enter="addItem" placeholder="Add item" />
        <button @click="addItem">Add</button>
      </div>
  
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item }}
          <button @click="removeItem(index)">Remove</button>
        </li>
      </ul>
    </div>
  </template>-->




  <script setup>
  import { ref, computed } from 'vue'
  import { useCartStore } from '../stores/cart';
  
  const count = ref(0)
  
  const cartStore = useCartStore()
  
</script>


<template>
    <div>
      {{ cartStore.count }}
    </div>
    <div>
      <button v-on:click="incrementCount">+</button>
      <button v-on:click="decrementCount">-</button>
    </div>
  
    <div>
      
    This counter is : {{ cartStore.oddOrEven }}
    </div>
  </template>  
  
  