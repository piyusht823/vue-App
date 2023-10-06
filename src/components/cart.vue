<script>
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
  </template>
  
  