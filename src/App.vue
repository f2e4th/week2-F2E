<template>
  <div>
   <SignPage/>
   <FileReview/>
  </div>
</template>

<script>
import SignPage  from './page/SignPage.vue';
import FileReview from './page/FileReview.vue'

export default {
  components:{
    SignPage,
    FileReview
  }
 
}
</script>


<style lang="scss">
@import './assets/css/all.scss';
</style>
