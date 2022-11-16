<template>
  <div>
   <!-- <FileUpload/> -->
    <Header/>
   <router-view />
  </div>
</template>

<script>
// import FileUpload  from './page/FileUpload.vue';
// import FileReview from './page/FileReview.vue'
import Header from './components/Header.vue'

export default {
  components:{
    // FileUpload,
    // FileReview,
    Header
  }
 
}
</script>


<style lang="scss">
@import './assets/css/all.scss';
</style>
