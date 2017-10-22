<template>
  <div class="recommend">
    <scroller class="recommend-content" :data="discList">
      <div>
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
        <div class="discList-cont">
          <ul class="discList-list">
    		<li v-for="item in discList">
    			<span class="discList-left">
    				<img :src="item.imgurl" alt="" width="60">
    			</span>
    			<span class="discList-right">
    				<h4 class="disc-name">{{item.creator.name}}</h4>
    				<p class="disc-instruction">{{item.dissname}}</p>
    			</span>
    		</li>
          </ul>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script type="text/esmascript-6">
	import Slider from 'base/slider/slider'
	import Scroller from 'base/scroller/scroller'
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
	    'slider': Slider,
	    'scroller': Scroller
	  }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/variable.styl"
	@import "../../common/stylus/mixin.styl"

	.slider-cont
		display:block
		width:100%
	.title-text
		color: $color-theme;
		line-height:65px;
		height:65px;
		text-align:center;
		font-size: 14px;
	.discList-list
		li
			display:flex
			padding:0 20px 20px 20px
			.discList-left
				flex:0 0 60px
				margin-right:20px
				img
					width:60px
			.discList-right
				flex:1
				display:flex
				flex-direction:column
				justify-content: center
				line-height:20px
				font-size:14px
				.disc-name
					margin-bottom:8px
				.disc-instruction
					color:$color-text-d



</style>
