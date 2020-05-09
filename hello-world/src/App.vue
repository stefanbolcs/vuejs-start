<template>
  <div id="app">
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/friends">Friends</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/account">Account</router-link>
    </div>
    <router-view/> 
    <Test v-bind:header="header"/>
    <Test2 v-bind:header="header"/>

    
    <!-- <h1 v-for="(item,index) in posts" :key="index">{{item.title}}</h1> -->
   
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Test from './components/Test';
import Test2 from './components/Test2';
export default {
  name:'app',
  mounted(){
    this.$store.dispatch('loadPosts');
  },
  computed:{
    ...mapState([
      'posts'
    ])
  },
  components:{
    Test, Test2
  },
  data(){
    return {
      header: 'initial header'
    }
  }

}
</script>


