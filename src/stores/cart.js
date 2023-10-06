import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cartStore',
  state: () => ({
    // items: [],
    count: 0
  }),
  actions: {
    // addItem(item) {
    //   this.items.push(item);
    // },
    // removeItem(index) {
    //   this.items.splice(index, 1);
    // },
    increaseCount(){
        this.count++
    },
    decreaseCount(){
        this.count--
    }
  },
  getters:{
    oddOrEven: (state) => {
      if(state.count%2==0) return 'even'
      return 'odd'
    }
  }
});
