<template>
  <div class="slider" ref="slider">
	  <div class="slider-group" ref="sliderGroup">
	  	<slot></slot>
	  </div>
	  <div v-if="dots.length>0" class="dots" >
	  	<span v-for="(dot,idx) in dots" class="dot" :class="(idx === currentIndex)?'active':''"></span>
	  </div>
  </div>
</template>


<script type="text/esmascript-6">
	import BScroll from 'better-scroll'
	import {addClass} from 'common/js/dom'
	export default {
	  name: 'slider',
	  data() {
	    return {
          dots: [],
          currentIndex: 0
	    }
	  },
	  props: {
        loop: {
          type: Boolean,
          default: true
        },
        autoPlay: {
          type: Boolean,
          default: true
        },
        interval: {
          type: Number,
          default: 1000
        }
	  },
	  mounted() { 
	    setTimeout(() => {
	      this._setSliderWidth()
	      this._initDots()
	      this._initSlider()
	      if (this.autoPlay) this._play()
	    }, 20)
	    window.addEventListener('resize', () => {
	      if (!this.sliderScroll) {
	        return
          }
          this._setSliderWidth(true)
          this.sliderScroll.refresh()
	    })
	  },
	  methods: {
	    _setSliderWidth(isResize) {
	      this.children = this.$refs.sliderGroup.children
	      let w = 0
	      let singleSliderW = this.$refs.slider.clientWidth
	      for (let i=0; i < this.children.length; i++){
	        let child = this.children[i]
	        addClass(child, 'slider-item')
	        child.style.width = singleSliderW + 'px'
	        w += singleSliderW
	      }
	      // 只有第一次渲染才需要加上前后2个slider的宽度
	      if (this.loop && !isResize) w += 2* singleSliderW
	      this.$refs.sliderGroup.style.width = w + 'px'
	    },
	    _initDots() {
	      this.dots = new Array(this.children.length)
	    },
	    _initSlider() {
	      this.sliderScroll = new BScroll(this.$refs.slider, {
	        scrollX: true,
	        scrollY: false,
	        momentum: false,
	        snap: true,
	        snapLoop: this.loop,
	        snapThreshold: 0.3,
	        snapSpeed: 400
	        // click: true
	      })

	      this.sliderScroll.on('scrollEnd', () => {
	        let pageIndex = this.sliderScroll.getCurrentPage().pageX
	        if (this.loop) pageIndex -= 1
	        this.currentIndex = pageIndex
	        if (this.autoPlay) {
	          this._play()
	        }
	      })
	      this.sliderScroll.on('beforeScrollStart', () => {
	        if (this.autoPlay) {
	          clearTimeout(this.timer)
	        }
	      })
	    },
	    _play() {
	      let pageIndex = this.currentIndex + 1 
	      if (this.loop) pageIndex += 1
	      this.timer = setTimeout(() => { 
	        this.sliderScroll.goToPage(pageIndex, 0, 400)
	      }, this.interval)
	    }
	  },
	  destory() {
	    clearTimeout(this.timer)
	  }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/variable.styl"
	
	.slider
	  width: 100%
	  overflow: hidden
	  position:relative
	  .slider-group
	    position:relative
	    .slider-item
	      display:inline-block
	      a
	        display:block
	        width:100%
	        overflow:hidden
	        img
	          width:100%
	  .dots
	    text-align: center
	    position: absolute
	    bottom:4px
	    width:100%
	    height:10px
	    .dot
	      display:inline-block
	      background-color: rgba(255, 255, 255, .8)
	      border-radius: 4px
	      width: 8px
	      height: 8px
	      margin-right: 6px
	      vertical-align:top
	      &.active
	        width: 16px
	        margin-right: 6px

</style>
