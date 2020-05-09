<template>
    <div> 

        <h1 v-on:click="changeHeader">{{header}}</h1>
    </div>
</template>

<script>
import {bus} from '../main'
export default {

    name: 'Test1',
    props: {
        header:{
            type: String
    }
    },
    methods: {
        changeHeader(){
            this.header = "changed header";
            //emit an event called changeIt and pass the string changed header as argument.
            bus.$emit('changeIt','changed header');
        }
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
