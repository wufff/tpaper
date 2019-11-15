<template>
  <div class="page">
     <div class="head">
        <span class="back" @click="back">
          <span class="img back-bt">
            <img src="../assets/arrow_left_b.png" alt="">
          </span>
        </span>
          <div class="inner">
              试卷详情
          </div>
      </div>  
      <div class="main">
         <div class="list">
          <cube-scroll
            ref="scroll"
            :data="datalist" 
            :options="options">
          <div class="scrollwrap">
          <div class="test">
              <div class="title">
                 1. 计算: (0-3)x5的结果是 (   )
              </div>
              <ul class="aswerbox">
                 <li>
                    <span>A.</span>
                    <span>-15</span>
                 </li>
                  <li>
                    <span>B.</span>
                    <span>-15</span>
                 </li> 
                  <li>
                    <span>C.</span>
                    <span>-15</span>
                  </li>
                  <li>
                    <span>D.</span>
                    <span>-15</span>
                 </li>                                             
              </ul>
              <div class="bottom">
                  <span class="type">单选题</span>
                  <span>使用 0 次</span>
                  <span class="addItemBt" @click="addCart">
                    <span class="img add-img">
                      <img src="../assets/add.png" alt="">
                    </span> 
                    试题栏
                  </span>                                   
              </div>
          </div>
           <div class="test">
              <div class="title">
                 1. 计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )
              </div>
              <ul class="aswerbox">
                 <li>
                    <span class="sort">A.</span>
                    <span class="option">-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15</span>
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
              <div class="bottom">
                  <span class="type">单选题</span>
                  <span>使用 0 次</span>
                  <span class="addItemBt_y">
                      <span class="img add-img_y">
                        <img src="../assets/yes.png" alt="">
                      </span> 
                    已添加
                  </span>                  
              </div>
          </div>
          <div class="test">
              <div class="title">
                 1. 计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )
              </div>
              <ul class="aswerbox">
                 <li>
                    <span class="sort">A.</span>
                    <span class="option">-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15</span>
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
              <div class="bottom">
                  <span class="type">单选题</span>
                  <span>使用 0 次</span>
                  <span class="addItemBt">
                    <span class="img add-img">
                      <img src="../assets/add.png" alt="">
                    </span> 
                    试题栏
                  </span>
              </div>
          </div>
         <div class="test">
              <div class="title">
                 1. 计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )
              </div>
              <ul class="aswerbox">
                 <li>
                    <span class="sort">A.</span>
                    <span class="option">-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15</span>
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
              <div class="bottom">
                  <span class="type">单选题</span>
                  <span>使用 0 次</span>
                  <span class="addItemBt">
                    <span class="img add-img">
                      <img src="../assets/add.png" alt="">
                    </span> 
                    试题栏
                  </span>
              </div>
          </div> 
          </div>   
           </cube-scroll>                         
         </div>
      </div>
     <div class="control">
         <div class="item">
            <span class="img myCart_rukou">
               <img src="../assets/myCart_rukou.png" alt="">
            </span>
            试题篮
            <span class="border-right"></span>
            <span class="num_num">1</span>
          </div>
         <div class="item">
            <span class="img downLoad_b">
               <img src="../assets/downLoad_b.png" alt="">
            </span>                     
         下载试卷
          <span class="border-right"></span>
         </div>
         <div class="item" @click="goMyTest">
            <span class="img save_b">
               <img src="../assets/myTest.png" alt="">
            </span>            
           在线自测
       </div>
     </div>                          
  </div>
</template>
<script>

 export default { 
    name: 'paperDtail',
    data(){
         return {
           options:{
             click:true,
             bounce:false
           }
         }
    },
    methods:{
       back(){
         window.history.go(-1);
       },
       goMyTest(){
           this.$router.push({path:"/myTest"});
       }
    }
  }  
</script>
<style scoped lang="less">
 .main {
   padding-top: 49px;
   padding-bottom: 0;
 }

.border-right{
      display: block;
      width: 1px;
      height: 20px;
      background: #e2e2e2;
      position: absolute;
      top: 14px;
      right:0; 
   }


.num_num {
   right: 15px;
   top: 8px
}

.control {
       position: fixed;
       bottom:0px;
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





.myCart_rukou {
     width: 22px; 
     height: 22px;
     position: relative;
     top:6px;
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



</style>
