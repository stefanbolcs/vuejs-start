<template>
  <div id="app">
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> 
    
    <h1 v-for="(item,index) in posts" :key="index">{{item.title}}</h1>
   
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'app',
  mounted(){
    this.$store.dispatch('loadPosts');
  },
  computed:{
    ...mapState([
      'posts'
    ])
  }
}
</script>


