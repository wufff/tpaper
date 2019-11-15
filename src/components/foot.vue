<template>
     <ul class="foot">
         <router-link to="/" exact tag="li">
              <div class="icon icon-home"></div>
              <div class="name">首页</div>
         </router-link>   
         <router-link to="/items" tag="li">
              <div class="icon icon-items"></div>
              <div class="name">题库</div>
         </router-link>  
          <router-link to="/cart" tag="li">
              <div class="icon icon-cart"></div>
              <div class="name">试题栏</div>
              <div class="ball-container">
                <transition v-on:after-enter="afterEnter" v-on:enter="enter" v-on:before-enter="beforeEnter" name="drop" v-for="(litterBall,indexBall) in balls" :key="indexBall">
                  <div v-show="litterBall.show" class="ball">
                    <div class="inner"></div>
                  </div>
                </transition>
              </div>
          </router-link>  
          <router-link to="/my" tag="li">
              <div class="icon icon-my"></div>
              <div class="name">我的</div>
          </router-link>                                   
     </ul>
</template>
<script>
// v-on:before-enter="beforeEnter" （动画进入前）
// v-on:enter="enter"（动画进入时）
// v-on:after-enter="afterEnter" （动画进入完后）



export default {
  name: 'tree',
  props: {
    msg: String
  },
  data() {
    return {
       balls:[
              {show:false,index:0},
              {show:false,index:1},
              {show:false,index:2},
              {show:false,index:3},
              {show:false,index:4}
            ],
       dropBall:[]      
    }
  },
  methods:{
     drop(ele){
       console.log(ele)
     },
     beforeEnter(ele){

     },
     enter(ele,done){

     },
     afterEnter(ele){

     },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .foot {
       position: fixed;
       z-index: 80;
       bottom: 0;
       width: 100%;
       left: 0;
       right: 0;
       border-top: 1PX solid #f1f1f1;
       background-color: #fff;
      li {
         float: left;
         width: 25%;
         text-align: center;
         .name { font-size: 11px; margin-bottom: 3px;color:#5e5e5e;}
         .icon { width: 26px;height:26px;background-repeat: no-repeat;background-size: contain;margin: 8px auto 3px auto;}
         .icon-home { background-image: url('../assets/home.png'); }
         .icon-items { background-image: url('../assets/items.png'); }
         .icon-cart { background-image: url('../assets/cart.png'); }
         .icon-my { background-image: url('../assets/my.png');}
          &.router-link-active {
             .icon-home { background-image: url('../assets/home_a.png'); }
             .icon-items { background-image: url('../assets/items_a.png'); }
             .icon-cart { background-image: url('../assets/cart_a.png'); }
             .icon-my { background-image: url('../assets/my_a.png');}
             .name { color: #000000;font-weight: bold; }
          }         

      }
   }

 

.ball-container {
   .ball {
      position:fixed;
      left:32px;
      bottom:22px;
      z-index:900;
      transform:translate3d(0,0,0);
      transition:all 0.6s cubic-bezier(0.49,-0.29,0.75,0.41);
      .inner {
          width:16px;
          height:16px;
          border-radius: 100%;
          background:rgb(0,160,220);
          transition:all 0.6s linear;
          transform: translate3d(0,0,0);
      }      
   }
}
  
</style>
