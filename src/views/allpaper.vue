<template>
  <div class="page">
     <div class="head">
     	<span class="back" @click="back">
	  	 	<span class="img back-bt">
	  	 		<img src="../assets/arrow_left_b.png" alt="">
	  	 	</span>
  	 	</span>
  	    <div class="inner">
  	    	全部试卷
  	    </div>
  	 </div>    
      <div class="filter clearfix">
         <div class="item" v-for="(item,index) in selectValue"  @click="selectTitle(index,item.current)">
            {{item.name}}
            <span class="img down-img">
              <img src="../assets/filter_up.png" v-show="item.open" alt="">
              <img src="../assets/filter_down.png" v-show="!item.open" alt="">
            </span>
            <span class="border-right" v-show="index < 1"></span>
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
				                      <router-link to="/paperDtail" tag="li">
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
                                       <router-link to="/" tag="li">
				                          <h4>湖北省新华小学三年级期中数学考试试题中数学 考试试题中数学考试试题</h4>
				                          <div class="info">
				                              <span>浏览：30</span>
				                              <span>下载：2</span>
				                          </div>
				                          <span class="time">2019-1-5</span>
				                      </router-link>  			                                                                                        
				                 </ul>
				           </div>                        
		          </div>       	 	
	          </cube-scroll>
     	 </div>
     </div>
     
   <router-link class="cart_rk" to="/cart" tag="div">
        <img src="../assets/cart_rk.png" alt="">
        <span class="num_num">1</span>
    </router-link>    
  </div>
</template>

<script>
// @ is an alias to /src
import foot from '@/components/foot.vue'



export default {
  name: 'items',
  data(){
     return {
       options:{
         click:true,
         bounce:false,
       },
       selectValue:[{name:"综合排序",id:0,open:false,current:0},{name:"全部年级",id:0,open:false,current:0}]
     }
  },
  created(){
   
  },
  mounted(){
    
  },
  methods:{
     back(){
     	window.history.go(-1);
     },
	select(name,id,tpye,index){
        this.selectValue[tpye].name = name;
        this.selectValue[tpye].id = id;
        this.selectValue[tpye].current = index;
        this.selectValue[tpye].open = false;
        this.downlistVisble = false;
     },
     selectTitle(index,current){
        this.selectValue[index].open = true;
        this.downlistVisble = true;
        this.downlistData.current = current;
     }    
  },
  components: {
     foot
  }
}
</script>
<style scoped lang="less">
 .main {
 	 padding-top: 93px;
 	 padding-bottom: 0;
 }


.recommend {
   	 background-color: #fff;
   	 padding: 6px 15px;
   	 margin-top: 10px;
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
         width: 50%;
         text-align: center;
         font-size: 15px;
         color:#000000;
         position: relative;
      }
   }    

.cart_rk {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position: fixed;
    bottom: 60px;
    right:40px;
    z-index: 999;
    img {
       width: 100%;
       height: 100%;
    }
    .num_num {
       color:#fff;
       right: -5px;
    }
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
  

   
</style>
