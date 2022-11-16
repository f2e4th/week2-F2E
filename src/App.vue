<template>
  <div>
    <UploadPage/>
   <FileReview/>
   <!-- <FileUpload/> -->
    <Header/>
   <router-view />
  </div>
</template>

<script>
// import homePage from './page/homePage.vue'
import UploadPage from './page/UploadPage.vue'
// import SignPage  from './page/SignPage.vue';
import FileReview from './page/FileReview.vue';
import Header from './components/Header.vue';

export default {
  components:{
    // homePage,
    UploadPage,
    // SignPage,
    FileReview,
    Header,
// import FileUpload  from './page/FileUpload.vue';
// import FileReview from './page/FileReview.vue'
  }
}
</script>


<style lang="scss">
@import './assets/css/all.scss';
</style>
