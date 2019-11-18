<template>
  <div class="page">
     <div class="head" id="head">
     	<span class="back" @click="back">
	  	 	<span class="img back-bt">
	  	 		<img src="../assets/arrow_left_b.png" alt="">
	  	 	</span>
  	 	</span>
  	    <div class="inner">
  	    	购买记录
  	    </div>
  	 </div>         
     <div class="main">
     	 <div class="list">
	          <cube-scroll
		          ref="scroll" 
		          :options="options">
              <div class="scrollwrap" v-show="datalist.length < 1">
                 <div class="noneWarp">
                       <span class="img none_com">
                         <img src="../assets/none_com.png" alt="">
                       </span>
                       <div class="title">暂无购买记录！</div>
                       <router-link to="/items" class="goItem">
                          去选题
                        </router-link>
                   </div>                         
              </div>
		          <div class="scrollwrap" v-show="datalist.length > 0">
				          <ul class="oder">
                     <li>
                        <div class="number">
                           <span>订单号：32493000888</span>
                           <span class="status">交易成功</span>
                        </div>
                        <div class="conetent">
                           <div class="left">
                              <div class="name">一个月VIP会员</div>
                              <span>2019-13-03 10:10:10</span>
                           </div>
                           <div class="right">
                                ¥ 9
                           </div>
                        </div>
                     </li>
                      <li>
                        <div class="number">
                           <span>订单号：32493000888</span>
                           <span>交易成功</span>
                        </div>
                        <div class="conetent">
                           <div class="left">
                              <div class="name">一个月VIP会员</div>
                              <span>2019-13-03 10:10:10</span>
                           </div>
                           <div class="right">
                                ¥ 9
                           </div>
                        </div>
                     </li>                             
                  </ul>      
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
  name: 'items',
  data(){
     return {
       options:{
         click:true,
         bounce:false,
       },
       datalist:[],
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
     },
     goHistory(){
        this.$router.push("/buyhistory");
     }   
  },
  components: {
     foot
  }
}
</script>
<style scoped lang="less">
 .main {
 	 padding-top: 53px;
 	 padding-bottom: 0;
 }

#head {
   .buyHistory{
     color:#fff;
     position: absolute;
     right:15px;
     top: 2px;
     font-size: 15px;
   }
}

  

 .author {
    background-color: #fff;
    overflow: hidden;
    padding: 17px 22px;
    margin-bottom: 10px;
    .my {
       float: left;
    }
    .name {
       font-size: 18px;
       margin-bottom: 5px;
       padding-top: 6px;
       color:#7f5010;
    }
    .info {
       font-size: 15px;
       color:#919191;
       margin-bottom: 5px;
    }
    img.headimg {
       width: 58px;
       height: 58px;
       border-radius: 100%;
       float: left;
       margin-right: 10px;
       position: relative;
       top:11px;
    }
 }
  .small {
     font-size: 14px;
     color:#919191;
  }
  .vip {
    height: 17px;
    width: 20px;
    position: relative;
    top:2px;
  }
  

  .oder {
     
      > li {
         background-color: #fff;
          padding:0 15px;
          margin-bottom: 8px;
      }
      .number {
         height: 45px;
         line-height: 45px;
         border-bottom: 1PX solid #ddd;
         color:#919191;
         .status {
           float: right;
         }
      }
      .conetent {
          overflow: hidden;
          padding:8px 0;
          .left{
             float: left;
             .name{
                margin-bottom: 5px;
                color:#000;
                font-size: 17px;
             }
             .time {
               color:#919191;
             }
          }
          .right{ 
             float:right;
             padding-top: 11px;
             font-size: 17px;
          }
      }
  }
</style>
