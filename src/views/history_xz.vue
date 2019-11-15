<template>
  <div class="page">
      <div class="head">
        <span class="back" @click="back">
          <span class="img back-bt">
            <img src="../assets/arrow_left_b.png" alt="">
          </span>
        </span>
          <div class="inner">
             下载记录
          </div>
     </div>   	  
  	 <div class="main">
      <div class="list">
       <cube-scroll
          ref="scroll" 
          :options="options">        
  	 	    <div class="scrollwrap">
               <div class="recommend">
                 <ul class="list">
                      <li>
                         <div class="top">
                            <h4>湖北省新华小学三年级期中数学考试试题</h4>
                            <div class="info">
                                <span>初中数学</span>
                                <span>共 6 题</span>
                            </div>
                            <span class="time">2019-1-2</span>                             
                         </div>
                         <div class="bottom clearfix">
                             <div class="tab">
                                <span class="img dele_h">
                                    <img src="../assets/dele_h.png" alt="">
                                </span>
                                删除试卷
                                <div class="border-right"></div>
                             </div>
                              <div class="tab">
                                <span class="img save_h">
                                    <img src="../assets/save_h.png" alt="">
                                </span>
                                下载试卷
                             </div>                             
                         </div>
                      </li>
                       <li>
                         <div class="top">
                            <h4>湖北省新华小学三年级期中数学考试试题</h4>
                            <div class="info">
                                <span>初中数学</span>
                                <span>共 6 题</span>
                            </div>
                            <span class="time">2019-1-2</span>                             
                         </div>
                         <div class="bottom clearfix">
                             <div class="tab">
                                <span class="img dele_h">
                                    <img src="../assets/dele_h.png" alt="">
                                </span>
                                删除试卷
                                <div class="border-right"></div>
                             </div>
                              <div class="tab">
                                <span class="img save_h">
                                    <img src="../assets/save_h.png" alt="">
                                </span>
                                下载试卷
                             </div>                             
                         </div>
                      </li>
                       <li>
                         <div class="top">
                            <h4>湖北省新华小学三年级期中数学考试试题级期中数学考级期中数学考 湖北省新华小学三年级期中数学考试试题级期中数学考级期中数学考考级期中数学考考级期中数学考</h4>
                            <div class="info">
                                <span>初中数学</span>
                                <span>共 6 题</span>
                            </div>
                            <span class="time">2019-1-2</span>                             
                         </div>
                         <div class="bottom clearfix">
                             <div class="tab">
                                <span class="img dele_h">
                                    <img src="../assets/dele_h.png" alt="">
                                </span>
                                删除试卷
                                <div class="border-right"></div>
                             </div>
                              <div class="tab">
                                <span class="img save_h">
                                    <img src="../assets/save_h.png" alt="">
                                </span>
                                下载试卷
                             </div>                             
                         </div>
                      </li>
                       <li>
                         <div class="top">
                            <h4>湖北省新华小学三年级期中数学考试试题</h4>
                            <div class="info">
                                <span>初中数学</span>
                                <span>共 6 题</span>
                            </div>
                            <span class="time">2019-1-2</span>                             
                         </div>
                         <div class="bottom clearfix">
                             <div class="tab">
                                <span class="img dele_h">
                                    <img src="../assets/dele_h.png" alt="">
                                </span>
                                删除试卷
                                <div class="border-right"></div>
                             </div>
                              <div class="tab">
                                <span class="img save_h">
                                    <img src="../assets/save_h.png" alt="">
                                </span>
                                下载试卷
                             </div>                             
                         </div>
                         <li>
                         <div class="top">
                            <h4>湖北省新华小学三年级期中数学考试试题</h4>
                            <div class="info">
                                <span>初中数学</span>
                                <span>共 6 题</span>
                            </div>
                            <span class="time">2019-1-2</span>                             
                         </div>
                         <div class="bottom clearfix">
                             <div class="tab">
                                <span class="img dele_h">
                                    <img src="../assets/dele_h.png" alt="">
                                </span>
                                删除试卷
                                <div class="border-right"></div>
                             </div>
                              <div class="tab">
                                <span class="img save_h">
                                    <img src="../assets/save_h.png" alt="">
                                </span>
                                下载试卷
                             </div>                             
                         </div>
                      </li>        
                      </li>                                                                                                                                                 
                 </ul>
               </div>             
          </div>
       </cube-scroll>  
  	  </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import foot from '@/components/foot.vue'

export default {
  name: 'home',
  data(){
     return {
        options:{
           click:true,
           bounce:false           
        },
        secetVisb:false
     }
  },
  methods:{
     back(){
       window.history.go(-1);
     }
  },
  components: {
     foot
  }
}
</script>
<style scoped lang="less">
    .main {
       padding-top: 45px;
       padding-bottom: 0px;
    }
   .goVip {
   	   height: 34px;
   	   color:#7f5010;
   	   line-height: 35px;
   	   padding:0 15px;
   	   background:url("../assets/arrow_right_z.png") no-repeat #dcaf72;
   	   background-size:  6px 15px;
   	   background-position: 97% 10px;;
   	   .vipImg { 
          width: 16px;
          height: 14px;
   	    }
   }
   .nav { 
   	  width: 100%;
   	  padding: 30px 15px 20px 15px;
   	  background-color: #fff;
   	  margin-bottom: 9px;
   	  > div {
   	  	 float: left;
   	  	 width: 33.33%;
   	  	 text-align: center;
   	  	 img {
   	  	 	 width: 38px;
   	  	 	 height: 38px;
   	  	 	 margin-bottom: 17px;
   	  	 }
   	  	 .name { 
               font-size: 14px;
               // font-weight: bold;
               color:#000000;
   	  	  }
   	  }
   }

 .border-right{
      display: block;
      width: 1px;
      height: 20px;
      background: #ddd;
      position: absolute;
      top: 11px;
      right:0; 
   }



   .recommend {
   	 padding: 6px 0;
   	 .more {
   	 	 font-size: 15px;
   	 	 color:#5e5e5e;
   	 }
     .list > li{
        padding: 16px 10px 0 10px;
        position: relative;
        background-color: #fff;
        margin-bottom: 10px;
        .top{
           padding-bottom: 18px;
        }
        .info{
           font-size: 14px;
           color:#919191;
           > span { margin-right: 10px; }
          
        }
        .time {
             position: absolute;
             right: 15px;
             bottom:56px;
             color:#919191;
           }   
        .bottom{
           .tab {
              width: 50%;
              float: left;
              color:#919191;
              font-size: 14px;
              color:#919191;
              text-align: center;
              height: 43px;
              line-height: 43px;
              border-top: 1PX solid #ddd;
              position: relative;
           }
          .dele_h {
              width: 18px;
              height: 18px;
             position: relative;
              top:2px;
              margin-right: 2px;              

          }
          .save_h {
              width: 16px;
              height: 16px;
              position: relative;
              top:2px;
              margin-right: 3px;
          }
        }       
     }
   }

   //下拉框
  .selectBox {
      width: 100%;
      height: 100%;
       position: fixed;
       left:0;
       right:0;
       top:0;
       z-index: 90;
       background-color: rgba(0,0,0,0.5);
       padding-top: 49px;
       .content {
          background-color: #fff;
          padding: 4px 15px;
          h6 {
             font-size: 15px;
             color:#000;
             height: 44px;
             line-height: 44px;
          }
          ul{
             width: 360px;
             margin-bottom: 3px;
          }
          li {
             float: left;
             width: 76px;
             height: 35px;
             line-height: 35px;
             text-align: center;
             background-color: #f1f1f1;
             margin-right: 14px;
             margin-bottom: 14px;
          }
         
       }

  }
   


</style>
