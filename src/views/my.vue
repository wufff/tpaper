<template>
  <div class="page">
       <div class="top">
          <img src="http://wufff.static.dev.dodoedu.com/fztkPage/frontend/images/headbj.png" alt="" class="headimg">
          <span>用户名</span>
          <div class="govip" @click="goVip">
             <span class="img vip">
               <img src="../assets/vip.png" alt="">
             </span>
             开通vip享更多会员特权
             <span class="img arrow_right_z">
              <img src="../assets/arrow_right_z.png" alt="">
            </span>
          </div>
       </div>
       <div class="space"></div>
       <div class="content">
             <ul class="list">
                 <router-link to="/history_zj" exact tag="li">
                   <span class="img hostory">
                      <img src="../assets/hostory.png" alt="">
                   </span>
                   组卷记录
                   <span class="img arrow_right">
                    <img src="../assets/arrow_right.png" alt="">
                  </span>
                 </router-link>  
                 <router-link to="/history_xz" exact tag="li">
                    <span class="img downLoad">
                      <img src="../assets/downLoad.png" alt="">
                   </span>                  
                   下载记录
                   <span class="img arrow_right">
                    <img src="../assets/arrow_right.png" alt="">
                  </span>
                </router-link> 
                <router-link to="/history_ct" exact tag="li">
                    <span class="img wrongs">
                      <img src="../assets/wrongPaper.png" alt="">
                   </span>                  
                   错题本
                   <span class="img arrow_right">
                    <img src="../assets/arrow_right.png" alt="">
                  </span>
                </router-link>
                  <router-link to="/feedback" exact tag="li">
                    <span class="img feedback">
                      <img src="../assets/feedback.png" alt="">
                   </span>                  
                   意见反馈
                   <span class="img arrow_right">
                    <img src="../assets/arrow_right.png" alt="">
                  </span>
                </router-link>                                                                          
             </ul>
       </div>
       <div class="outBtn">
          退出当前账号
       </div>
      <foot></foot>
   </div>
</template>
<script>
import foot from '@/components/foot.vue' 
export default {
  name: 'my',
  data() {
    return {
        data: [] 
    }
  },
  methods:{
    goVip(){
       this.$router.push({path:"/buy"});
    }
  },
  components:{
      foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
   .page{
      background-color: #fff;
      position: relative;
   }
   .top {
      width: 100%;
      height: 187px;
      background-color: #424242;
      padding: 44px 15px ;
      color:#fff;
      font-size: 20px;
      position: relative;
      .headimg {
          width: 61px;
          height: 61px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 14px;
      }
      .govip {
        width: 340px;
        height: 45px;
        background-color: #e1b67a;
        border-radius: 6px 6px 0 0;
        position: absolute;
        bottom: 0;
        left:18px;
        color:#7f5010;
        line-height: 47px;
        font-size: 15px;
        padding-left: 10px;
        font-weight: bold;

      }
      .vip {
          width: 19px;
          height: 16px;
          margin-right: 2px;
          position: relative;
          top:2px;

      }
      .arrow_right_z {
          width: 8px;
          height: 14px;
          float: right;
          margin-right: 10px;
          position: relative;
          top:2px;
      }
   }

   .space {
      width: 100%;
      height: 11px;
      background-color: #f1f1f1;
   }

   .content {
       background-color: #fff;
      .list {
         padding:0 15px;
          > li {
             height: 51px;
             border-bottom: 1px solid #f1f1f1;
             position: relative;
             font-size: 16px;
             line-height: 51px;
             color:#474747;
             .arrow_right {
                width: 8px;
                height:14px;
                position:absolute;
                right: 0;
                top: 2px;
             }
          }
      }
   }

   .hostory {
      width: 16px;
      height: 19px;
      position: relative;
      top:3px;
      margin-right: 5px;
   }
   .downLoad {
       width: 16px;
       height: 19px;
       position: relative;
      top:3px;
      margin-right: 4px;       
   }
   .feedback {
       width: 19px;
       height: 17px;
       position: relative;
      top:3px;
      margin-right: 4px;       
   }
   .wrongs {
      width: 18.5px;
      height: 18.5px;
      position: relative;
      top:3px;
      margin-right: 4px;       
   }
   .outBtn {
      width: 315px;
      height: 50px;
      background-color: #de4a55;
      color:#fff;
      line-height: 51px;
      font-size: 16px;
      text-align: center;
      position: absolute;
      bottom:90px;
      left: 29px;
      letter-spacing: 1px;
   }

</style>
