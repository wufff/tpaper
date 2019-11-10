<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import './style/reset.css';
body, html, #app {
   width: 100%;
   height: 100%;
   font-size: 15px;
   background-color: #f1f1f1;
}


//==========布局
 .main {
   height: 100%;
   width: 100%;
   padding-bottom:52px;
 }

 .page {
   height: 100%;
   width: 100%;    
 }



//===========单件


.head {
    height: 50px;
    background-color: #37aafd;
    position: fixed;
    top:0;
    right: 0;
    color:#fff;
    left:0;
    line-height: 50px;
    font-size: 17px;
    padding: 0 15px;
    z-index: 98;
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
 }



 //模块开头
h3{
   font-size: 17px;
   height:44px;
   line-height: 44px;
   position: relative;
   border-bottom: 1px solid #e8e8e8;
   .more {
     position: absolute;
     right: 0;
     bottom: 0px;
   }
 }


//试卷标题
  h4  {
    font-size: 15px;
    color:#000000;
    margin-bottom: 12px;
    max-height:36px;
    overflow: hidden;
  }



 .img {
   display: inline-block;
   img {
     width: 100%;
     height: 100%;
   }
 }


  .downlist {
      width: 100%;
      height: 100%;
       position: fixed;
       left:0;
       right:0;
       top:0;
       z-index: 90;
       background-color: rgba(0,0,0,0.5);
       padding-top: 96px;
       .content {
          background-color: #fff;
          padding: 12px 23px;
          .item {
              line-height: 36px;
              height: 36px;
              color:#919191;
              font-size: 16px;
              &.active {
                  color:#37aafd;
              }
          }
       }

  }


// ==================动画===========================

.up-enter-active, .up-leave-active {
     transition: .3s;
  }
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
     transform:translateY(30px);
     opacity: 0
}
</style>
