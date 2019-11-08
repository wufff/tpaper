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
 .main {
   padding-top: 50px;
 }
 .img {
   display: inline-block;
   img {
     width: 100%;
     height: 100%;
   }
 }
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


 body, html, #app {
   width: 100%;
   height: 100%;
   font-size: 15px;
   background-color: #f1f1f1;
}


//试卷标题
  h4  {
    font-size: 15px;
    color:#000000;
    margin-bottom: 12px;
    max-height:36px;
    overflow: hidden;
  }
</style>
