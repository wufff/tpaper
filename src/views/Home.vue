<template>
  <div class="page">
  	 <div class="head">
  	 	<span class="moreBt">
  	 		<img src="../assets/more.png" alt="">
  	 	</span>
  	 	初中 <span class="space">·</span> 数学
  	 </div>
  	 <div class="main">
      <div class="list">
       <cube-scroll
          ref="scroll" 
          :options="options">        
  	 	    <div class="scrollwrap">
              <router-link to="/" tag="div" class="goVip">
                      <span class="vipImg img">
                        <img src="../assets/vip.png" alt="">
                      </span>
                          开通VIP享更多会员特效
              </router-link>
               <div class="nav clearfix">
                <router-link :to="{path:'/items',query:{tree:'open'}}" tag="div">
                  <img src="../assets/bases.png" alt="">
                  <div class="name">知识点选题</div>
                </router-link>
                <router-link to="/" tag="div">
                  <img src="../assets/selects.png" alt="">
                  <div class="name">试卷选题</div>
                </router-link>
                <router-link to="/" tag="div">
                  <img src="../assets/wrongs.png" alt="">
                  <div class="name">错题本</div>
                </router-link>  
               </div>
               <div class="recommend">
                 <h3>
                  精选试卷
                  <router-link to="/allpaper" tag="span" class="more">更多</router-link>
                 </h3>
                 <ul class="list">
                      <router-link to="/" tag="li">
                          <h4>湖北省新华小学三年级期中数学考试试题</h4>
                          <div class="info">
                              <span>浏览：30</span>
                              <span>下载：2</span>
                          </div>
                          <span class="time">2019-1-2</span>
                      </router-link> 
                      <router-link to="/" tag="li">
                          <h4>湖北省新华小学三年级期中数学考试试题中数学考试试题中数学考试试题</h4>
                          <div class="info">
                              <span>浏览：30</span>
                              <span>下载：2</span>
                          </div>
                          <span class="time">2019-1-2</span>
                      </router-link>  
                      <router-link to="/" tag="li">
                          <h4>湖北省新华小学三年级期中数学考试试题中数学 考试试题中数学考试试题</h4>
                          <div class="info">
                              <span>浏览：30</span>
                              <span>下载：2</span>
                          </div>
                          <span class="time">2019-1-2</span>
                      </router-link>    
                      <router-link to="/" tag="li">
                          <h4>湖北省新华小学三年级期中数学考试试题中数学考试试题中数学考试试题</h4>
                          <div class="info">
                              <span>浏览：30</span>
                              <span>下载：2</span>
                          </div>
                          <span class="time">2019-1-2</span>
                      </router-link>  
                      <router-link to="/" tag="li">
                          <h4>湖北省新华小学三年级期中数学考试试题中数学 考试试题中数学考试试题</h4>
                          <div class="info">
                              <span>浏览：30</span>
                              <span>下载：2</span>
                          </div>
                          <span class="time">2019-1-2</span>
                      </router-link> 
                       <router-link to="/" tag="li">
                          <h4>湖北省新华小学三年级期中数学考试试题中数学 考试试题中数学考试试题</h4>
                          <div class="info">
                              <span>浏览：30</span>
                              <span>下载：2</span>
                          </div>
                          <span class="time">2019-1-2</span>
                      </router-link>                                                                         
                 </ul>
               </div>             
          </div>
       </cube-scroll>  
  	  </div>
      <foot></foot>	
      <div class="selectBox" v-show="secetVisb">
        <transition name="up">
            <div class="content">
                <div class="item">
                    <h6>小学</h6>
                    <ul class="clearfix">
                       <li>语文</li>
                       <li>数学</li>
                       <li>英语</li>
                       <li>生命安全</li>
                       <li>心里健康</li>
                    </ul>
                </div>
                <div class="item">
                    <h6>初中</h6>
                    <ul class="clearfix">
                       <li>语文</li>
                       <li>数学</li>
                       <li>英语</li>
                       <li>生命安全</li>
                       <li>心里健康</li>
                    </ul>
                </div> 
                  <div class="item">
                    <h6>高中</h6>
                    <ul class="clearfix">
                       <li>语文</li>
                       <li>数学</li>
                       <li>英语</li>
                       <li>生命安全</li>
                       <li>心里健康</li>
                    </ul>
                </div>                           
            </div>
        </transition> 
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
  components: {
     foot
  }
}
</script>
<style scoped lang="less">
    .main {
       padding-top: 50px;
    }
   .goVip {
   	   height: 34px;
   	   color:#7f5010;
   	   line-height: 35px;
   	   padding:0 15px;
   	   background:url("../assets/arrow_right_z.png") no-repeat #dcaf72;
   	   background-size:  6px 10px;
   	   background-position: 97% 11px;;
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

   .recommend {
   	 background-color: #fff;
   	 padding: 6px 15px;
   	 .more {
   	 	 font-size: 15px;
   	 	 color:#5e5e5e;
   	 }
     .list > li{
        padding: 16px 0;
        border-bottom:1PX solid #e8e8e8; 
        position: relative;
        .info{
           font-size: 14px;
           color:#919191;
           > span { margin-right: 10px; }
          
        }
        .time {
             position: absolute;
             right: 0;
             bottom:16px;
              color:#919191;
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
