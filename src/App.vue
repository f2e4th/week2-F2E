<template>
  <div>
    <UploadPage/>
    <SignPage/>
  </div>
</template>

<script>
import homePage from './page/homePage.vue'
import UploadPage from './page/UploadPage.vue'
import SignPage  from './page/SignPage.vue';

export default {
  components:{
    homePage,
    UploadPage,
    SignPage
  }
}
</script>


<style lang="scss">
@import './assets/css/all.scss';
</style>
