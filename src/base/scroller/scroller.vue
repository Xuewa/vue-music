<template>
  <div class="scroller" ref="wrapper">  
	<slot></slot>
  </div>
</template>


<script type="text/esmascript-6">
	import BScroll from 'better-scroll'

	export default {
	  props: {
        probeType: {
          type: Number,
          default: 1
        },
        click: {
          type: Boolean,
          default: true
        },
        data: {
          type: Array,
          default: null
        }
	  }, 
	  mounted() { 
	    setTimeout(() => {
	      this._initScroller()
	    }, 20);
	  },
	  methods: {
	    _initScroller() {
	      if (!this.$refs.wrapper) {
	        return
	      }
	      this.scroller = new BScroll(this.$refs.wrapper,{
	        probeType: this.probeType,
	        click: this.click
	      })
	      console.log(this.scroller)
	    },
	    _refresh() {
	      this.scroller && this.scroller.refresh()
	      console.log(this.scroller)
	    },
	    _enable() {
	      this.scroller && this.scroller.enable()
	    },
	    _disable() {
	      this.scroller && this.scroller.disable()
	    }
	  },
	  watch: {
	    data() {
	      setTimeout(() => {
	        this._refresh()
	      },20)
	    }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
