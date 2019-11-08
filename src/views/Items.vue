<template>
  <div class="Items">
     <div class="head">
          <span class="moreBt">
            <img src="../assets/more.png" alt="">
          </span>
          初中 <span class="space">·</span> 数学
     </div>  	 
  	 <div class="filter clearfix">
         <div class="item">
            全部题型
            <span class="img down-img">
              <img src="../assets/filter_down.png" alt="">
            </span>
            <span class="border-right"></span>
         </div>
         <div class="item">
            全部难度
            <span class="img down-img">
              <img src="../assets/filter_down.png" alt="">
            </span>
             <span class="border-right"></span>
         </div>
         <div class="item">
            全部年级
            <span class="img down-img">
               <img src="../assets/filter_up.png" alt="">
            </span>
         </div>
     </div>
     <div class="selectBox">
       
     </div>
     <div class="main">
        <div class="list"> 
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
     </div>
     <foot></foot>	
  </div>
</template>

<script>
// @ is an alias to /src
import foot from '@/components/foot.vue'
export default {
  name: 'items',
  components: {
     foot
  }
}
</script>
<style scoped lang="less">

   .add-img { 
        width: 11px;
        height: 11px;
    }
   .add-img_y{
      width: 11px;
      height: 9px;
      margin-right: 3px;
   }
   .border-right{
      display: block;
      width: 1px;
      height: 20px;
      background: #e2e2e2;
      position: absolute;
      top: 11px;
      right:0; 
   }



   .filter {
      background-color: #fff;
      position: fixed;
      z-index: 98;
      top:50px;
      left: 0;
      right: 0;
      .down-img {
         width: 11px;
         height: 6px;
         position: relative;
         top:-2px;
         margin-left: 5px;
      }

      .item {
         height: 42px;
         line-height: 42px;
         float: left;
         width: 33.333%;
         text-align: center;
         font-size: 15px;
         color:#000000;
         position: relative;
      }
   }

   .main {
     padding-top:102px;
     .list {
        // padding: 15px 0;
        padding-bottom: 54px;
     }
   }

   .test {
    padding: 16px;
    margin-bottom: 10px;
    background-color: #fff;
    .title {
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
         }
         li {
           border-radius: 2px;
           // background-color: #a3d3f6;
           padding: 6px;
           position: relative;
         }
         margin-bottom: 30px;
       }     
     .bottom {
        padding-left: 15px;
        color:#919191;
        position: relative;
         .type{ 
            margin-right: 20px;
          }
        .addItemBt{
           position: absolute;
           right: 0;
           bottom: 0;
           border:1px solid #919191;
           border-radius: 2px;
           padding: 6px  9px;
        }
        .addItemBt_y{
           position: absolute;
           right: 0;
           bottom: 0;
           background-color: #37aafd;
           color: #fff;
           border-radius: 2px;
           padding: 6px  9px;           
        }
     }

   }



   
</style>
