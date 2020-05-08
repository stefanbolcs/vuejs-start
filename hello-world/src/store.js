
import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue';

Vue.use(vuex, axios)

export default new vuex.Store({
    state:{
      posts:[]
    },
    actions:{
        loadPosts({commit}){
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(data=>{
                    console.log(data.data)
                 const posts = data.data
                    commit('SET_POSTS', posts)
                })
                .catch(error =>{
                    console.log(error)
                })
        }
        
    },
    mutations:{
        SET_POSTS(state, posts){
            state.posts = posts
        }
    }
})