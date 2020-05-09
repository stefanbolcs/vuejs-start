<template>
    <h1>Friends</h1>
    {{$route.params.id}}
    {{$route.params.age}}
    {{$route.params.weight}}

   
</template>

<script>
export default {
    props:[
        'id',
        'age',
        'weight'
    ]
    
}
</script>