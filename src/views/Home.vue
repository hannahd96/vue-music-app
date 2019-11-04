<template>
  <div class="home">
    <i class="fas fa-headphones" id="headphone-icon"></i>
    <HelloWorld msg="Vue Music App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit|Staatliches&display=swap');

h1{
  font-family: 'Kanit', sans-serif;
  margin:0px;
  letter-spacing: 1px;
}

#headphone-icon{
  color:white;
  font-size:35px;
  padding:5px 0px 0px 0px;
}
</style>
