<template>
    <div> 

        <h1>{{header}}</h1>
    </div>
</template>

<script>
import {bus} from '../main';
export default {

    name: 'Test2',
      props: {
    header:{
        type: String
    } 
  },
  created(){
      bus.$on('changeIt', (data)=>{
          this.header = data;
      })
  }
    
}
</script>
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
