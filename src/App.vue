<template>
  <div>
    <UploadPage/>
   <FileReview/>
  </div>
</template>

<script>
import homePage from './page/homePage.vue'
import UploadPage from './page/UploadPage.vue'
import SignPage  from './page/SignPage.vue';
import FileReview from './page/FileReview.vue'

export default {
  components:{
    homePage,
    UploadPage,
    SignPage,
    FileReview
  }
}
</script>


<style lang="scss">
@import './assets/css/all.scss';
</style>
