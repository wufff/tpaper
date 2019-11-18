<template>
  <div class="page">
    <div class="head">
        <span class="back" @click="back">
          <span class="img back-bt">
            <img src="../assets/arrow_left_b.png" alt="">
          </span>
        </span>
          <div class="inner">
            登录
      </div>
     </div>      
     <div class="main">
         <div class="list">
             <div class="content">
                <input type="text" v-model="usename" class="usename" placeholder="请输入手机号">
                <div class="item clearfix">
                   <input type="text" v-model="code" class="code" placeholder="输入验证码">
                   <span class="codeBtn">( 4 )</span>
                </div>    
                <div class="notice">
                    若该手机号未注册，我们会自动为您注册
                </div>            
             </div>
             <div class="btn_subimt">
                 登录
             </div>
             <div class="type">
                 <span>使用密码登录</span>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import foot from '@/components/foot.vue'
import tree from '@/components/tree.vue'


export default {
  name: 'items',
  data(){
     return {
       usename:"",
       passwrod:""
     }
  },

  created(){
    
  },
  mounted(){
    if(this.$route.query.tree){
         this.showTree();
    }
  },
  methods:{
     back(){
       window.history.go(-1);
     }     
  },
  components: {
     foot,
     tree
  }
}
</script>
<style scoped lang="less">
    .main {
       padding-top: 52px;
       background-color: #fff;
    }
  

   .pionter {
       padding-left: 15px;
       color: #919191;
       padding-top: 5px;
       display: block;
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


   .content {
     padding-top: 85px;
     input {
          background-color: #f6f6f6;
          height: 50px;
          line-height: 50px;
          border-radius: 5px;
          display: block;
          padding-left: 25px;
       }
       input.usename {
          width: 260px;
          margin: 0 auto;
          display: block;
          padding:0 25px;
          font-size: 15px;
          margin-bottom: 20px;
       }     
     input.code {
        width: 150px;
        float: left;
     }
     .item {
       margin-bottom: 17px;
       padding:0 35px;
     }
     .codeBtn {
        float:right;
        height: 50px;
        line-height: 52px;
        text-align: center;
        width: 110px;
        background: #37aafd;
        color:#fff;
        border-radius: 5px;
     }
     .notice{
        padding-left: 32px;
        color:#777777;
        margin-bottom: 81px;
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
         width: 33.333%;
         text-align: center;
         font-size: 15px;
         color:#000000;
         position: relative;
      }
   }

   .main {
        padding-top: 52px;
        padding-bottom: 0px;
   }

   .btn_subimt {
      height: 50px;
      width: 310px;
      margin: 0 auto;
      text-align: center;
      line-height: 50px;
      color:#fff;
      background-color: #37aafd;
      font-size: 17px;
      letter-spacing: 4px;
      border-radius: 5px;
      margin-bottom: 35px;
   }

     .selectBox {
        width: 100%;
        height: 100%;
     }

   .type{
     text-align: center;
     color:#777777;
   }
</style>
