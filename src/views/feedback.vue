<template>
  <div class="page">
      <div class="head">
        <span class="back" @click="back">
          <span class="img back-bt">
            <img src="../assets/arrow_left_b.png" alt="">
          </span>
        </span>
          <div class="inner">
             意见反馈
          </div>
     </div>   	  
  	 <div class="main">
      <div class="list">
       <cube-scroll
          ref="scroll" 
          :options="options">        
  	 	    <div class="scrollwrap">
             <h4>问题描述</h4>
             <div class="textarea">
                <cube-textarea 
                v-model="maov"
                :autoExpand ="autoExpand"
                :placeholder ="placeholder"
                :maxlength = "maxlength"
                ></cube-textarea>
             </div>
             <h4>联系方式 ( 手机号、QQ或邮箱 ) </h4> 
             <div class="tell">
                  <cube-input 
                  v-model="tell" 
                  :placeholder ="placeholder2"
                  ></cube-input>
             </div>                   
             <h4>图片（可选）</h4> 
             <div class="upload">
                
             </div>
             
            
                            
          </div>
       </cube-scroll>  
  	  </div>
     </div>
     <span class="btn">提交反馈</span>
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
        placeholder:"请输入反馈内容",
        placeholder2:"请输入电话号码",
        autoExpand:true,
        maxlength:120,
        maov:"",
        tell:""
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
       padding-top:60px;
       padding-bottom: 0px;
       h4 {
         height: 36px;
         line-height: 36px;
         margin-bottom: 0px;
         padding-left: 15px;
       }
    }
 
  

  .textarea {
      height: 80px;
      background: #fff;
  }

  .cube-textarea_active::after, .cube-input_active::after{
        border-color:#fff;
    }
  
   .upload {
      height: 60px;
      background-color: #fff;
   }

   // .btnW {
   //    width: 100%;
   //    height: 45px;
   //    position: fixed;
   //    left:0;
   //    right: 0px;
   //    bottom: 0px;
   // }

   .btn{
      height: 46px;
      width: 345px;
      margin: 0 auto;
      color:#fff;
      background: #37aafd;
      border-radius: 5px;
      display: block;
      text-align: center;
      line-height: 46px;
      font-size: 16px;
      letter-spacing: 2px;
      position: absolute;
      bottom:30px;
      left: 15px;
   }


   


</style>
