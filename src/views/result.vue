<template>
  <div class="page">
     <div class="head">
        <span class="back" @click="back">
          <span class="img back-bt">
            <img src="../assets/arrow_left_b.png" alt="">
          </span>
        </span>
          <div class="inner">
              结果与解析
          </div>
      </div>
      <div class="timebox">
         <div class="title">初中数学试卷2019年09月12日</div>
         <div class="info">
            <span class="space">共用时：00:00:02</span> 
            <span>正确率：94.7%</span>
         </div>
         <span class="img img-time"  @click="showCard">
             <img src="../assets/time.png" alt="">
         </span>
     </div>
     <div class="main">
         <div class="list">
            <cube-scroll
            ref="scroll"
            :data="datalist" 
            :options="options"> 
            <div class="scrollwrap">
                <div class="type">
                   <div class="test_title">单选题</div>
                   <div class="test_test">
                        <div class="title">
                          <span class="sort">1.</span>
                          <span class="question">计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )</span>
                        </div>
                          <ul class="aswerbox">
                             <li class="wrong">
                                <span class="sort">A.</span>
                                <span class="option">-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15-15</span>
                                <div class="yesorno">
                                   <span class="img img-false">
                                      <img src="../assets/false_b.png" alt="">
                                    </span>
                                </div>                                     
                             </li>
                            <li class="right">
                                <span class="sort">B.</span>
                                <span class="option">-15</span>
                                 <div class="yesorno">
                                   <span class="img">
                                      <img src="../assets/yes.png" alt="">
                                    </span>
                                </div>                                  
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
                          <!-- <div class="angls">查看解析</div> -->
                          <div class="angls_y">
                             <div class="title">解析</div>
                             <p>3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结结结</p>
                          </div>
                    </div>
                    <div class="test_test">
                        <div class="title">
                          <span class="sort">1.</span>
                          <span class="question">计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )</span>
                        </div>
                          <ul class="aswerbox">
                             <li class="active">
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
                          <!-- <div class="angls">查看解析</div> -->
                          <div class="angls_y">
                             <div class="title">解析</div>
                             <p>3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结结结</p>
                          </div>
                    </div>                                                 
                </div>
               <div class="type">
                   <div class="test_title">多选题</div>
                   <div class="test_test">
                        <div class="title">
                          <span class="sort">1.</span>
                          <span class="question">计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )</span>
                        </div>
                          <ul class="aswerbox">
                             <li class="active">
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
                          <!-- <div class="angls">查看解析</div> -->
                          <div class="angls_y">
                             <div class="title">解析</div>
                             <p>3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结结结</p>
                          </div>
                    </div>
                     <div class="test_test">
                        <div class="title">
                          <span class="sort">1.</span>
                          <span class="question">计算: (0-3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结果是 计算: x5的结(   )</span>
                        </div>
                          <ul class="aswerbox">
                             <li class="active">
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
                          <!-- <div class="angls">查看解析</div> -->
                          <div class="angls_y">
                             <div class="title">解析</div>
                             <p>3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结3)x5的结果是 计算: x5的结果是 计算结果是 计算: x5的结结结结</p>
                          </div>
                    </div>                                                 
                </div>                              
              </div>
             </cube-scroll>                    
         </div>
     </div>
     <transition name="moveLeft">
                      <div class="card" v-show="cardshow">
                          <div class="card-items">
                              <h5>单选</h5>
                              <ul class="asw clearfix">
                                 <li>1</li>
                                 <li class="disable">1</li>
                                 <li>1</li>
                                 <li class="wrong">1</li>
                                 <li>11</li>
                                 <li>1</li>
                                 <li class="disable">1</li>
                                 <li>1</li>
                                 <li>1</li>
                                 <li class="wrong">11</li>                 
                              </ul>
                          </div>
                          <div class="card-items">
                              <h5>单选</h5>
                              <ul class="asw clearfix">
                                 <li></li>
                              </ul>
                          </div>
                         <div class="notice">
                            注：标灰色的为试题无法在线答题,
                            您可以查看解析
                         </div>                 
                      </div> 
      </transition>                                        
  </div>
</template>
<script>

 export default { 
    name: 'result',
    data(){
         return {
           options:{
             click:true,
             bounce:false
           },
           datalist:[],
           cardshow:false
         }
    },
    methods:{
       back(){
         window.history.go(-1);
       },
       goMyTest(){
           this.$router.push({path:"/myTest"});
       },
       showCard(){
          this.cardshow = !this.cardshow;
       }
    }
  }  
</script>
<style scoped lang="less">
.main {
   padding-top: 138px;
   padding-bottom: 0;
   .list {

   }
 }






.timebox {
      position: fixed;
      top:50px;
      background: #fff;
      left:0;
      right: 0;
      padding: 9px 7px;
      font-size: 16px;
      color:#474747;
      padding:15px 20px;
      .img-time {
          width: 22px;
          height: 23px;
          position: absolute;
          top: 30px;
          right: 18px;
      }
      .space {
         margin-right: 10px;
      }
      .title {
         margin-bottom: 15px;
      }
      .info {
         color:#919191;
      }
  }  


.card {
        position: fixed;
        left: 0;
        right: 0;
        width: 100%;
        bottom: 0;
        top:138px;
        background: #fff;
        z-index: 999;
        padding: 16px 28px;
        .card-items {
            margin-bottom: 10px;
        }
        h5 {
            color:#474747;
            margin-bottom: 10px;
        }
        .asw {
         
          li {
             float: left;
             border-radius: 100%;
             width: 30px;
             height: 30px;
             text-align: center;
             line-height: 30px;
             margin-left: 15px;
             margin-bottom: 15px;
             &.wrong{
               background: #c85a63;
               color:#fff;
             }
             &.disable{
               color:#c6c6c6;
             }
          }
        }
        .notice {
           color :#c6c6c6;
        }
 } 


 .type {
     margin-bottom: 5px;
    .test_title{
        padding: 15px 18px;
    }
    .angls {
       padding-left: 10px;
       color:#37aafd;
    }
    .angls_y{
        padding-left: 10px;
        .title {
           color:#37aafd;
        }
        p {
           line-height: 1.4;
           color:#474747;
        }
    }
 }


 .test_test {
    padding: 16px;
    background-color: #fff;
   .add-img { 
        width: 11px;
        height: 11px;
    }
   .add-img_y{
      width: 11px;
      height: 9px;
      margin-right: 3px;
   }    

    .title {
       margin-bottom: 8px;
    }
     .sort{
           position: absolute;
           left:18px;
         }
         .question {
           padding-left: 20px;
           display: block;  
           font-size: 16px;   
           color:#000000; 
           margin-bottom: 15px;      
      }    
    .aswerbox {
         padding-left:12px; 
         .sort{
           position: absolute;
           left:16px;
         }        
        .yesorno{
           position: absolute;
           right:12px;
           top:0;
           bottom: 0;
           width:14px; 
           display: flex;
           align-items:center;           
           .img {
             display: block;
             width: 100%;
           }
           .img-false {
              width: 10px;
           }
         }           
         .option {
           padding-left: 20px;
           display: block;
           padding-right:20px;
         }
         li {
           border-radius: 2px;
           // background-color: #a3d3f6;
           padding: 12px 9px 12px 24px;
           border-radius: 5px;
           position: relative;
           background: #f6f6f6;
           margin-bottom: 10px;
           &.wrong {
             background: #e89da4;
           }
           &.right {
              background-color: #b9eb79;
           }

         }
         margin-bottom: 20px;
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
