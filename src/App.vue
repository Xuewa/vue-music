<template>
  <div id="app">
      <m-header></m-header>
	  <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import mHeader from 'components/m-header/m-header'
  import tab from 'components/tab/tab'
  export default {
    name: 'app',
    components: {
      'm-header': mHeader,
      'tab': tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
