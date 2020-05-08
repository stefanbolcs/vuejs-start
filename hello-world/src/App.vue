<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    
    
    {{this.$store.state.test}}
  </div>
</template>

<script>

export default {
  name:'app',
  data(){
    return {
      msg: 'welcome tod your vue app'
    }
  }
}
</script>


