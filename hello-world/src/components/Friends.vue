<template>
<div>
    <h1>Friends</h1>
    {{$route.params.id}}
    {{$route.params.age}}
    {{$route.params.weight}}
</div>
   
</template>

<script>
export default {
    namespaced:true,
    props:[
        'id',
        'age',
        'weight'
    ]
    
}
</script>