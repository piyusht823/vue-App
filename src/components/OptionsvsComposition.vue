<!-- <script>
//Options API
export default {
  data() {
    return {
      username: 'Piyush',
      isModalShown: false
    }
  }
  ,
  methods: {
    updateUsername(newUsername) {
      this.username = newUsername
    },
    showModal() {
      this.isModalShown = true
    },
    mounted() {
      this.updateUsername('Piyush@LT')
      this.showModal()
    }
  }
}

</script>

<template>
    <div>
      <p>{{ username }}</p>
      <button @click="updateUsername('Piyush@LTdI')">Update Username</button>
      <button @click="showModal">Show Modal</button>
    </div>
</template> -->
  








<!-- Compositions API -->
<script setup>
import { onMounted, reactive, ref } from 'vue';


    const username= ref('Piyush')
    const isModalShown= ref(false)
    const showName = ref(true)
    const changeName = ref(false)
    // const person1 = ref({
    //   name:"reactive",
    //   age:23
    // })
    // const person2 = reactive({
    //   name:"reactive",
    //   age:23
    // })
    // const person1 = ref([
    //   id="reactive",
    //   age=23
    // ])


    function updateUsername(newUsername) {
      username.value = newUsername
    }
    function showModal() {
      isModalShown.value = false
    }
    
    onMounted(() => {
        updateUsername('Tiwari');
        showModal();
    })

    // person1.value = {name:"cha",age:29}

</script>

<template>
    <div>
      <h3>{{ person1 }}</h3>
      <p v-if="showName">{{ username }}</p>
      <p v-else>{{ Math.random()}}</p>
      <button @click="showName=!showName">Toggle Name</button>
      <button @click="updateUsername('Pratyush Tiwari')">Update Username</button>
    </div>
</template>





<!-- OR -->


<!-- Compostion API by AI-->
<!-- <template>
  <div>
    <p>{{ username }}</p>
    <button @click="updateUsername('Tiwari')">Update Username</button>
  </div>
</template> 

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    // Define reactive data using ref
    const username = ref('Piyush');
    const isModalShown = ref(false);

    // Define methods
    const updateUsername = (newUsername) => {
      username.value = newUsername;
    };

    const showModal = () => {
      isModalShown.value = true;
    };

    // Component lifecycle hook: mounted
    onMounted(() => {
      updateUsername('Piyush@LTI');
      showModal();
    });

    // Return data and methods for use in the template
    return {
      username,
      isModalShown,
      updateUsername,
      showModal,
    };
  },
};
</script>  -->