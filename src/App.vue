<template>
  <div>
    <!-- <home-page/> -->
    <UploadPage/>
  </div>
</template>

<script>
import homePage from './page/homePage.vue'
import UploadPage from './page/UploadPage.vue'

export default {
  components:{
    homePage,
    UploadPage
  }
 
}
</script>


<style lang="scss">
@import './assets/css/all.scss';
</style>
