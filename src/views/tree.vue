<template>
  <div class="treebox">
     <div class="main"> 
          <div class="list">
             <div class="scrollwrap">
                <div  v-for="(item,index) in data">
                   <div class="treeItem">
                    <span class="img-tree">
                      <img src="../assets/tree_open.png" alt="" v-show="!item.opened" v-if="item.children" @click="open(index)">
                      <img src="../assets/tree_close.png" alt="" v-show="item.opened"  v-if="item.children"  @click="close(index)">
                    </span>
                    {{item.text}}
                  </div>
                  <div v-for="(item2,index2) in item.children" v-show="item.opened"> 
                      <div class="treeItem2">
                        <span class="img-tree">
                          <img src="../assets/tree_open.png" alt="" v-show="!item2.opened" v-if="item2.children" @click="open(index,index2)">
                          <img src="../assets/tree_close.png" alt="" v-show="item2.opened" v-if="item2.children" @click="close(index,index2)"> 
                        </span>
                       {{item2.text}}
                      </div> 
                      <div  v-for="(item3,index3) in item2.children" v-show="item2.opened"> 
                          <div class="treeItem3">{{item3.text}}</div>
                      </div>
                  </div>                 
                </div>
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
  .treebox {
      height: 100%;
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      top:0;
  }



  .main {
     padding-top: 52px;
     padding-bottom: 0;
     background:rgba(0,0,0,0.5); 
     .list {
        background-color: #fff;
     }
  }
  .scrollwrap {
      background-color: #fff;
      padding: 0 15px;
      .img-tree {
         display: inline-block;
         width: 15px;
         height: 15px;
         text-align: center;
         img {
            max-width:12px;
            max-height:12px;
            position: relative;
            top:-2px;
         }
      }
  }
 



  .treeItem, .treeItem2, .treeItem3{
      font-size: 18px;
      height:42px;
      line-height: 42px;
      color:#474747;
      background: url("../assets/arrow_right.png") no-repeat center right;
      background-size:6px  10px;
  }
  .treeItem2 {
      padding-left: 30px;
  }
  .treeItem3 {
      padding-left: 80px;
  }
</style>
