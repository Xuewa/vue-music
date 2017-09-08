<template>
  <div class="header">
    <span class="img_logo"></span>
    <h2 class="page_title">Chicken Music</h2>
    <span class="person_logo"><i class="icon-mine"></i></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  @import '../../common/stylus/variable.styl'

  .header
    width: 100%
    text-align: center
    .img_logo
      bg-image("logo")
      background-size: 30px 32px
      width: 30px
      height: 32px
      display: inline-block
      margin-top: 5px
      margin-right: 4px
    .page_title
      display:inline-block
      text-align: center
      font-size: $font-size-large
      vertical-align: top
      line-height: 44px
    .person_logo
      position: absolute
      right: 0
      font-size: 20px
      padding: 12px
</style>
