<template>
  <div class="page">
     <div class="head" id="head">
     	<span class="back" @click="back">
	  	 	<span class="img back-bt">
	  	 		<img src="../assets/arrow_left_b.png" alt="">
	  	 	</span>
  	 	</span>
  	    <div class="inner">
  	    	VIP会员
  	    </div>
  	 </div>         
     <div class="main">
     	 <div class="list">
	          <cube-scroll
		          ref="scroll" 
		          :options="options">
		          <div class="scrollwrap">
				          <div class="author">
                      <img src="http://wufff.static.dev.dodoedu.com/fztkPage/frontend/images/headbj.png" alt="" class="headimg">
                      <div class="my">
                         <div class="name">
                            <span class="img vip">
                               <img src="../assets/vip.png" alt="">
                            </span>
                           13100688807
                         </div>
                         <div class="info">会员有效期至：2019.12.12</div>
                         <div class="small">下载剩余次数:14</div>
                      </div>                           
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
   background-color: #ddb175;
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
</style>
