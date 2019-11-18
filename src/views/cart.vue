<template>
  <div class="page">
      <div class="main">
          <div class="list">
             <cube-scroll
            ref="scroll"
            :options="options">  
             <div class="wrapscroll" v-show="datalist.length < 1">
                   <div class="noneWarp">
                       <span class="img none_items">
                         <img src="../assets/none_items.png" alt="">
                       </span>
                       <div class="title">试题篮是空的！</div>
                       <router-link to="/items" class="goItem">
                          去选题
                        </router-link>
                   </div>                 
             </div>          
             <div class="wrapscroll" v-show="datalist.length > 0">
                <div class="itemClassfiy" >
                    <div class="title">一、单选题</div>
                    <span class="img closeBtn">
                        <img src="" alt="">
                        <img src="../assets/arrow_down.png" alt="">
                    </span>
                    <div class="items">
                       <div class="test">
                           <div class="test_title">
                               1. 计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )
                          </div> 
                           <ul class="aswerbox">
                               <li>
                                  <span class="sort">A.</span>
                                  <span class="option">-15</span>
                               </li>
                                <li>
                                  <span class="sort">B.</span>
                                  <span class="option">-15</span>
                               </li> 
                                <li>
                                  <span class="sort">C.</span>
                                  <span class="option">-15</span>
                                </li>
                                <li>
                                  <span class="sort">D.</span>
                                  <span class="option">-15-15-1-15-15-15-15-15-15-15-15-115-15-1-15-15-15-15-15-15-15-115-15-1-15-15-15-15-15-15-15-15-155-15-15-15</span>
                               </li>                                             
                            </ul>
                             <span class="img dele_h">
                                <img src="../assets/dele_h.png" alt="">
                            </span>                              
                       </div>
                       <div class="test">
                           <div class="test_title">
                               1. 计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )
                          </div> 
                           <ul class="aswerbox">
                               <li>
                                  <span class="sort">A.</span>
                                  <span class="option">-15</span>
                               </li>
                                <li>
                                  <span class="sort">B.</span>
                                  <span class="option">-15</span>
                               </li> 
                                <li>
                                  <span class="sort">C.</span>
                                  <span class="option">-15</span>
                                </li>
                                <li>
                                  <span class="sort">D.</span>
                                  <span class="option">-15</span>
                               </li>                                             
                            </ul>
                             <span class="img dele_h">
                                <img src="../assets/dele_h.png" alt="">
                            </span>                                                                                 
                       </div>                       
                    </div>
                </div>
                <div class="itemClassfiy">
                    <div class="title">二、多选题</div>
                    <span class="img closeBtn">
                        <img src="" alt="">
                        <img src="../assets/arrow_down.png" alt="">
                    </span>
                    <div class="items">
                       <div class="test">
                           <div class="test_title">
                               1. 计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )
                          </div> 
                           <ul class="aswerbox">
                               <li>
                                  <span class="sort">A.</span>
                                  <span class="option">-15</span>
                               </li>
                                <li>
                                  <span class="sort">B.</span>
                                  <span class="option">-15</span>
                               </li> 
                                <li>
                                  <span class="sort">C.</span>
                                  <span class="option">-15</span>
                                </li>
                                <li>
                                  <span class="sort">D.</span>
                                  <span class="option">-15</span>
                               </li>                                             
                            </ul>
                              <span class="img dele_h">
                                <img src="../assets/dele_h.png" alt="">
                            </span>                                                                               
                       </div>
                       <div class="test">
                           <div class="test_title">
                               1. 计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )
                          </div> 
                           <ul class="aswerbox">
                               <li>
                                  <span class="sort">A.</span>
                                  <span class="option">-15</span>
                               </li>
                                <li>
                                  <span class="sort">B.</span>
                                  <span class="option">-15</span>
                               </li> 
                                <li>
                                  <span class="sort">C.</span>
                                  <span class="option">-15</span>
                                </li>
                                <li>
                                  <span class="sort">D.</span>
                                  <span class="option">-15</span>
                               </li>                                             
                            </ul>
                             <span class="img dele_h">
                                <img src="../assets/dele_h.png" alt="">
                            </span>                                                                                 
                       </div>                       
                    </div>
                </div>                
             </div>
             </cube-scroll>
          </div>
      </div>  
     <div class="control"  v-show="datalist.length > 0">
         <div class="item">
            <span class="img dele_b">
               <img src="../assets/dele_b.png" alt="">
            </span>
            清空试题
            <span class="border-right"></span>
          </div>
         <div class="item">
            <span class="img downLoad_b">
               <img src="../assets/downLoad_b.png" alt="">
            </span>                     
         下载试卷
          <span class="border-right"></span>
         </div>
         <div class="item">
            <span class="img save_b">
               <img src="../assets/save_b.png" alt="">
            </span>            
         保存试卷
       </div>
     </div>
     <foot></foot>
  </div>
</template>
<script>
import foot from '@/components/foot.vue' 
export default {
  name: 'tree',
  props: {
    msg: String
  },
  data() {
    return {
        data:"",
        options:{
         click:true,
         bounce:false
       },        
       datalist:[]
    }
  },
  methods:{
     
  },
  components:{
    foot
  }
}

</script>

<style scoped lang="less">
  .page{
     .main {
        padding-bottom: 103px;
     }
     .list {
        
     }
     .control {
       position: fixed;
       bottom:50px;
       left:0;
       right: 0;
       height: 51px;
       background: red;
       z-index: 80;
       background: #37aafd;
       .item {
          float: left;
          width: 33.333%;
          text-align: center;
          line-height:50px;
          color: #fff;
          position: relative;
       }
     }
  }


  .itemClassfiy {
     background: #fff;
     padding: 0 15px 15px 15px;
     margin-top: 10px;
     .title {
        font-size: 18px;
        height: 57px;
        line-height: 57px;
        padding-left: 15px;
        background: #fff;
        position: relative;
      }
     .closeBtn {
         height: 8px;
         width: 15px;
         position: absolute;
         right: 15px;
         top:28px;
     }
    .test {
        padding: 16px 16px 25px 16px;
        background: #f1f1f1;
        margin-bottom: 10px;
        margin-top: 0px;
        position: relative;
        .dele_h {
            width: 18px;
            height: 19px;
            position: absolute;
            bottom:15px;
            right: 15px;
        }
        .test_title {
           font-size: 15px;
           margin-bottom: 8px;
        }
        .aswerbox {
             padding-left:12px; 
             .sort{
               position: absolute;
               left:2px;
             }
             .option {
               padding-left: 20px;
               display: block;
               font-size: 15px;
             }
             li {
               border-radius: 2px;
               // background-color: #a3d3f6;
               padding: 6px;
               position: relative;
             }
             margin-bottom: 10px;
           }     
       }                
  }

 .noneWarp {
    text-align: center;
    padding-top: 155px;
   .none_items {
          width: 108px;
          height: 85px;
          margin-bottom: 15px;
    }    
    .title{
        margin-bottom: 15px;
    }
    .goItem {
        color:#37aafd;
        font-size: 17px;
    }
 }
 
  .dele_b{  
     width: 17px;
     height: 19px;
     position: relative;
     top:2px;
     margin-right: 4px;
  }

  .downLoad_b {
      width: 17px;
      height: 17px;
      position: relative;
      top:2px;
      margin-right: 2px;
  }
 
  .save_b {
      width: 17px;
      height: 17px;
      position: relative;
      top:3px;
      margin-right: 2px;     
   }


.border-right{
      display: block;
      width: 1px;
      height: 20px;
      background: #fff;
      position: absolute;
      top: 14px;
      right:0; 
   }  



  
 
</style>
