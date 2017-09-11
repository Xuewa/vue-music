<template>
  <div class="recommend">
    <div class="slider-cont" v-for="recommend in recmmends">
      <slider>
      	<a href="recommend.linkUrl">
      		<img src="recommend.picUrl" alt="">
      	</a>
      </slider>
    </div>
    <div class="title-cont">
    	<h2 class="title-text">热门歌单推荐</h2>
    </div>
    <div class="songMenu-cont">
    	<ul class="songMenus-list"></ul>
    </div>
</div>
</template>


<script type="text/esmascript-6">
	import Slider from 'base/slider/slider'
	import {getRecommend} from 'api/recommend'
	import {ERR_OK} from 'api/config'
	export default {
	  data() {
	    return {
	      recommends: []
	    }
	  },
	  created() {
	    this._getRecommend()
	  },
	  methods: {
        _getRecommend() {
          getRecommend().then((res) => {
            this.recommends = res.data.slider
            console.log(res.data.slider)
          })
        }
	  },
	  comonents: {
	    'slider': Slider
	  }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/variable.styl"
	@import "../../common/stylus/mixin.styl"

	.recommend
		.slider-cont
			display:block
			height: 160px;
		.title-text
			color: $color-theme;
			line-height:65px;
			height:65px;
			text-align:center;
			font-size: 14px;
</style>
