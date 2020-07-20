<template>
	<div>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="while" >
	
  <van-swipe-item v-for='item in imgs'>
	  <van-image
  width="100%"
  height="3.4rem"
  fit="cover"
  :src='item.url'
/>

</van-swipe-item>

 

</van-swipe>


</div>
</template>

<script>

	
  export default {
    props:{},
    data(){
      return {
        imgs:[
			{url:'http://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201611/07/220857iivkvppu0kzbip8s.jpg'},
			{url:'http://p3.ssl.cdn.btime.com/t011edbbb49b73fa63d.jpg?size=2200x1237'},
			{url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1172210432,2664349711&fm=11&gp=0.jpg'},
		]
      }
    },
    components:{},
    mounted(){
	
		
	},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
   .my-swipe .van-swipe-item {
	   margin-top: 3px;
     color: #fff;
	 height: 3.4rem;
     font-size: 1.666666rem;
     text-align: center;
     position: relative;
   }
  
</style>
