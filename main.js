Vue.component('task-list',{
    template:'<div><task v-for="task in tasks">{{task.task}}</task> </div>',

    data(){
        return {
            tasks:[
                {task:'Go to store', complete:true},
                {task:'Go to the email', complete:false},
                {task:'Go to the farm', complete:true}
                
            ]
        }
    }
})



Vue.component('task',{
template:'<li><slot></slot></li>',

data(){
    return {
        message:'Foobar'
    }
}
});

new Vue({
    el: '#root'
});

