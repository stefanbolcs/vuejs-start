<template>
<div>
<div class="tabs">
      <ul>
        <li v-for="tab in tabs" :key="tab" :class="{'is-active':tab.selected}">
            <a href="#" @click="selectTab(tab)">{{tab.name}}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
        <slot></slot>
      
    </div>
</div>
    
</template>

<script>
export default {

    name: 'Tabs',
    
    data(){
        return {tabs:[]};
    },

    created(){
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab=>{
                tab.selected = (tab.name == selectedTab.name)
            })
        }
    }
    
    
}
</script>