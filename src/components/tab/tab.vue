<template>
  <div class="tab">
    <ul class="tab-containers">
      <router-link tag="li" class="tab-item" to="/recommend">
        <a class="tab-link">推荐</a>
      </router-link>
      <router-link tag="li" class="tab-item" to="/singer">
        <a class="tab-link">歌手</a>
      </router-link>
      <router-link tag="li" class="tab-item" to="/rank">
        <a class="tab-link">排行</a>
      </router-link>
      <router-link tag="li" class="tab-item" to="/search">
        <a class="tab-link">搜索</a>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  @import '../../common/stylus/variable.styl'
  .tab-containers
    display: flex
    .tab-item
      flex: 1 
      text-align: center
      line-height: 44px
      vertical-align: middle
      font-size: $font-size-medium
      a
        color: $color-text-l
      &.router-link-active
        a
          padding-bottom: 5px
          border-bottom: 2px solid $color-theme
          color: $color-theme

</style>
