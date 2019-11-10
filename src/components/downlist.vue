<template>
     <div class="downlist">
        <ul class="content" v-show="selectData.length > 0">
            <li class="item" :class="{active:index == current}" v-for="(item,index) in selectData">{{item.name}}</li>
        </ul>
     </div>
</template>
<script>
export default {
  name: 'downlist',
  props: ['selectData'],
  data() {
    return {
       current:0
    }
  },
  created(){
    console.log(this.selectData)
  },
  methods:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
