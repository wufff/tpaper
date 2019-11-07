<template>
  <div class="home">
  	 <div class="head">
  	 	<span class="moreBt">
  	 		<img src="../assets/more.png" alt="">
  	 	</span>
  	 	初中 <span class="space">·</span> 数学
  	 </div>
  	 <div class="main">
  	 	 <router-link to="/" tag="div" class="goVip">
  	 	 	<span class="vipImg img">
  	 	 		<img src="../assets/vip.png" alt="">
  	 	 	</span>
            开通VIP享更多会员特效
  	 	 </router-link>
  	 	 <div class="nav clearfix">
  	 	 	<router-link to="/" tag="div">
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
  	 	 	 	<router-link to="/" tag="span" class="more">更多</router-link>
  	 	 	 </h3>
  	 	 </div>
  	 </div>
     <foot></foot>	
  </div>
</template>

<script>
// @ is an alias to /src
import foot from '@/components/foot.vue'

export default {
  name: 'home',
  components: {
     foot
  }
}
</script>
<style scoped lang="less">
   .moreBt {
   	  display: inline-block;
   	  width: 16px;
   	  height: 15px;
   	  margin-right: 10px;	
   	  img {
   	  	  width: 100%;
   	  	  height: 100%;
   	  }
   }
   .space {
   	 font-size: 22px;
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
   .recommend {
   	 background-color: #fff;
   	 padding: 6px 15px;
   	 .more {
   	 	 font-size: 15px;
   	 	 color:#5e5e5e;
   	 }
   }
</style>
