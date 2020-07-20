<template>
  <div class="nav">
    <ul>
      <router-link tag="li" to="/home"  active-class="active"><a href="javascript:;"  >首页</a></router-link>
      <router-link tag="li" to="/society" active-class="active"><a href="javascript:;" >社会</a></router-link>
      <router-link tag="li" to="/recreation" active-class="active"><a href="javascript:;" >娱乐</a></router-link>
	  <router-link tag="li" to="/inter" active-class="active"><a href="javascript:;" >国际</a></router-link>
	  <router-link tag="li" to="/money" active-class="active"><a href="javascript:;" >财经</a></router-link>
	
    </ul>
  </div>
</template>

<script>
  export default {
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
	
		
	}
  }
</script>

<style scoped>
  .nav{width:100%;  flex: 0 0 auto;  position: fixed; top: 0px; z-index:10;  background:#fff;}
  .nav ul{width:100%rem;height:0.6rem; margin:0 auto; display: flex; justify-content:space-evenly}
  .nav ul li{width:20%;height:0.6rem; }
  .nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
  .nav ul li.active a{height:0.5rem; border-bottom:0.1rem solid #5477b2; color:#5477b2;}
</style>
