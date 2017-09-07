<template>
  <div class="header">
    <span class="img_logo"></span>
    <h2 class="page_title">Chicken Music</h2>
    <span class="person_logo"><i class="icon-mine"></i></span>
  </div>
</template>


<script type="text/esmascript-6">
	export default {
		name: 'header'
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/variable.styl"
	@import "../../common/stylus/mixin.styl"
	.header
		color:$color-theme;
		text-align:center;
		.img_logo
			display:inline-block;
			width:30px;
			height:32px;
			bg-image('logo');
			background-size:30px 32px;
			margin-left:30px;
			margin-top:4px;
		.page_title
			font-family:'微软雅黑','黑体';
			height:44px;
			line-height:44px;
			font-size:18px;
			display:inline-block;
			vertical-align:top;
		.person_logo
			/* width:44px;
			height:44px;*/
			float:right;
			font-size:20px;
			padding:12px;
</style>
