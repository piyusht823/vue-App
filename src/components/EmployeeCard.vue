
<script setup>
    import {ref} from 'vue';
    const emp = ref(['Employee 1','Employee 2','Employee 3','Employee 4','Employee 5'])
    const list = ref(true)

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // if(prefersDark){
    //     // document.getElementsByTagName(body).style={backgroundColor:'red'}
    // }
</script>



<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- <div v-bind:style="{paddingLeft:'50px',paddingRight:'50px'}"> -->
    <div v-bind:style="{backgroundColor:'green', padding:'5px'}">
        <button @click="list=true" ><i class="fa fa-list" aria-hidden="false"></i></button>
        <button @click="list=false" v-bind:style="{marginLeft:'5px'}"><i class="fa fa-th" aria-hidden="true"></i></button>
    </div>

    <div v-for="empp in emp" v-if="list" >
        <div style="display: flex; justify-content: center;">
            <div >
                <img src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg" style="width: 100px;">
            </div>
            
            <div>
                <p>{{ empp }}</p>
            </div>
        </div>
        <hr>
    </div>
    <div v-for="empp in emp" v-else>
        <div>
            <div style="display: flex;">
                <div>
                    <img src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg" style="width: 100px;">
                    <p>{{ empp }}</p>
                </div>

                <div>
                    <img src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg" style="width: 100px;">
                    <p>{{ empp }}</p>
                </div>

            </div>
        </div>
        
    </div>
<!-- </div> -->
</template>



<style>

</style>

