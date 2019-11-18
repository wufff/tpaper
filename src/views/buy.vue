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
        <span class="buyHistory" @click="goHistory">购买记录</span>
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
                         <div class="name">用户名</div>
                         <div class="info">您暂未开通会员</div>
                      </div>                           
                  </div>
                  <div class="buybox">
                      <h3>开通包月会员</h3>
                      <ul class="buyType">
                         <li class="buyItems active">
                             <div class="type">
                                <div class="mouth">1个月</div>
                                <div class="can">可下载15分试卷</div>
                             </div>
                             <div class="priceWrap">
                                 ¥ 10
                             </div>
                         </li>
                          <li class="buyItems">
                             <div class="type">
                                <div class="mouth">1个月</div>
                                <div class="can">可下载15分试卷</div>
                             </div>
                             <div class="priceWrap">
                                 ¥ 10
                             </div>
                         </li>
                          <li class="buyItems">
                             <div class="type">
                                <div class="mouth">1个月</div>
                                <div class="can">可下载15分试卷</div>
                             </div>
                             <div class="priceWrap">
                                 ¥ 10
                             </div>
                         </li>
                          <li class="buyItems">
                             <div class="type">
                                <div class="mouth">1个月</div>
                                <div class="can">可下载15分试卷</div>
                             </div>
                             <div class="priceWrap">
                                 ¥ 10
                             </div>
                         </li>                                                                            
                      </ul>
                      <div class="btnWrap">
                          <div class="btn">立即开通</div>
                      </div>  
                      <div class="benefit">
                          <h3>会员权益</h3>
                          <ul class="benefit">
                            <li>
                              <span class="img free">
                                 <img src="../assets/free.png" alt="">
                              </span>
                              <div>免费查看解析</div>
                            </li>
                              <li>
                              <span class="img freeDown">
                                 <img src="../assets/freeDown.png" alt="">
                              </span>
                              <div>免费下载试卷</div>
                            </li>
                            <li>
                              <span class="img freeWrong">
                                 <img src="../assets/freeWrong.png" alt="">
                              </span>
                              <div>保存错题</div>
                            </li>                                                        
                          </ul>
                      </div> 
                      <div class="noice">
                         <h3>开通说明</h3>
                         <p>这里是说明这里是说明这里是说明这里是说明
                         这里是说明这里是说明这里是说明这里是说明这里是说明这里是说明</p>
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
    }
    .info {
       font-size: 15px;
       color:#919191;
    }
    img {
       width: 54px;
       height: 54px;
       border-radius: 100%;
       float: left;
       margin-right: 10px;
    }
 }
   .buybox {
     background-color: #fff;
     h3 {
       height: 50px;
       line-height: 50px;
       border-bottom: 0;
       padding: 0 16px;
     }
     .buyType {
        padding: 0 16px;
     }
     .buyItems {
        overflow: hidden;
        border:1px solid #d7d7d7;
        border-radius: 6px;
        padding:22px 16px;
        margin-bottom: 10px;
        &.active{
           background-color: #fbf4dc;
        }
        .priceWrap {
            float: right;
            height: 35px;
            width: 70px;
            background: url('../assets/price_bg.png') no-repeat;
            background-size: contain;
            text-align: center;
            line-height: 36px;
            color:#89632d;
            font-size: 15px;
            font-weight: bold;
        }
        ul.buyType {
           margin-bottom: 15px;
        }
        .type {
            float: left;
            .mouth {
                font-size: 15px;
                margin-bottom: 6px;
            }
            .can {
              color:#a49178;
              font-size: 13px;
            }
        }

     }
    .btnWrap {
              padding: 10px 16px 25px 16px;
              .btn {
                  width: 100%;
                  border-radius: 24px;
                  background-color: #ddb174;
                  text-align: center;
                  color:#fff;
                  padding:12px 0;
                  letter-spacing: 2px;
                  font-size: 16px;
              }
          } 
     .benefit {
          overflow: hidden;
          padding-bottom: 10px;           
          .free {
              height: 51px;
              width: 38px;
              display: block;
              margin: 0 auto 15px auto;

          } 
          .freeDown {
              height: 43px;
              width: 54px;
              display: block;
              margin: 5px auto 17px auto;              
          }
          .freeWrong {
              height: 47px;
              width: 46px;
              display: block;
              margin: 4px auto 15px auto;                 
          }
          > li {
              width: 33.33%;
              float: left;
              text-align: center;
              font-size: 15px;
              color:#777777;

          }  
     } 
     .noice {
       p {
         font-size: 15px;
         padding: 0 30px 20px 30px;
          color:#777777;
          text-indent: 2em;
       }
     }        
   }
</style>
