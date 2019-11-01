<template>
  <div class="hello">
      <div  v-for="(item,index) in data">
        <div class="treeItem">
          <img src="../assets/a-add.png" alt="" v-show="!item.opened" v-if="item.children" @click="open(index)">
          <img src="../assets/a-sub.png" alt="" v-show="item.opened"  v-if="item.children"  @click="close(index)"> 
          {{item.text}}
        </div>
        <div v-for="(item2,index2) in item.children" v-show="item.opened"> 
            <div class="treeItem2">
               <img src="../assets/a-add.png" alt="" v-show="!item2.opened" v-if="item2.children" @click="open(index,index2)">
               <img src="../assets/a-sub.png" alt="" v-show="item2.opened" v-if="item2.children" @click="close(index,index2)"> 
                {{item2.text}}
            </div> 
            <div  v-for="(item3,index3) in item2.children" v-show="item2.opened"> 
                <div class="treeItem3">{{item3.text}}</div>
            </div>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'tree',
  props: {
    msg: String
  },
  data() {
    return {
        data: [
         {
          "text": "一层1",
          "opened":true,
          "children": [{
            "text": "二层1",
            "selected": true
          },
          {
            "text": "二层2",
            "icon": "fa fa-warning icon-state-danger"
          },
          {
            "text": "二层3",
            "icon": "fa fa-folder icon-state-default",
            "opened": false,
            "children": [{
              "text": "三层1"
            }]
          }]
        }, 
        {
          "text": "一层2",
          "opened":false,
        }
      ] 
    }
  },
  methods:{
     open(index,index2){
       if(index2){
         this.data[index].children[index2].opened= true;
       }else{
          this.data[index].opened = true;
       }
     },
     close(index,index2){
        if(index2){
             this.data[index].children[index2].opened= false;
       }else{
          this.data[index].opened = false;
       }        
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .treeItem, .treeItem2, .treeItem3{
      font-size: 18px;
      height:42px;
      line-height: 42px;
      border-bottom: 1px dashed #ddd;
  }
  .treeItem2 {
      padding-left: 30px;
  }
  .treeItem3 {
      padding-left: 80px;
  }
</style>
