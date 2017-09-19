<template>
  <div class="recommend">
    <div class="slider-cont" v-if="recommends.length">
      <slider>
      	<div  v-for="recommend in recommends">
	      	<a :href="recommend.linkUrl">
	      		<img :src="recommend.picUrl" alt="">
	      	</a>
	    </div>
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
	import {getRecommend, getDiscList} from 'api/recommend'
	import {ERR_OK} from 'api/config'
	export default {
	  data() {
	    return {
	      recommends: [],
	      discList: []
	    }
	  },
	  created() {
	    this._getRecommend()
	    this._getDiscList()
	  },
	  methods: {
        _getRecommend() {
          getRecommend().then((res) => {
            if (res.code === ERR_OK) { 
              this.recommends = res.data.slider
            }
          })
        },
        _getDiscList() {
          getDiscList().then((res) => {
            console.log(res)
            if (res.code === ERR_OK) {
              console.log(res.data.list)
              this.discList = res.data.list
            }
          })
        }
	  },
	  components: {
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
			width:100%
		.title-text
			color: $color-theme;
			line-height:65px;
			height:65px;
			text-align:center;
			font-size: 14px;
</style>
