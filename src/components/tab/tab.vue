<template>
  <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/recommend">
        <span class="tab-link">推荐</span></router-link>
      </div>
      <div class="tab-item">
        <router-link to="/singer"><span class="tab-link">歌手</span></router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rank"><span class="tab-link">排行</span></router-link>
      </div>
      <div class="tab-item">
        <router-link to="/search"><span class="tab-link">搜索</span></router-link>
      </div>
    </div>
</template>


<script type="text/ecmascript-6">
  export default {
    name: 'tab'
  }
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/variable.styl"
	@import "../../common/stylus/mixin.styl"
	.tab
	    display: flex
	    width: 100%
	    height: 44px
	    line-height: 44px
	    font-size:14px
	    .tab-item
	      flex: 1
	      text-align: center
	      & >a
	        font-size: 14px
	        color: $color-text-l
	        display: block
	        &.router-link-active
	          color: #ffcd32
	          .tab-link
	            height:100%
	            border-bottom:2px solid #ffcd32
</style>
