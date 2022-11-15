<template>
  <div id="Upload">
    <div class="Upload__nav">
    </div>
    <div class="Upload_progress">
      <ul class="progress_content">
        <li v-for="(item, i) in progressData" :key="i" class="progress_content__item"><img :src="item" alt="progress">
            <div class="progress_content__item__line"></div>
        </li>
      </ul>
    </div>
    <div class="Upload_content_wrapper">
      <div class="Upload_content">
        
      </div>
    </div>
  </div>
</template>
<script>
import {ref, reactive} from 'vue';
import finish from '../assets/img/finish.svg';
import sign from '../assets/img/sign.svg';
import upload from '../assets/img/upload.png';
</script>
<script setup>
const progressData = reactive([
  upload,
  sign,
  finish
])


</script>

<style lang="scss" scoped>
$main_color:#BE8E55;
#Upload {
  @apply h-screen w-full flex flex-col items-center;
  max-width: 1440px;
  background-color: #F5F5F5;
}
.Upload_content_wrapper {
  @apply rounded-md flex items-center justify-center my-4;
  background-color: #EFE3D4;
  width: 600px;
  height: 600px;
  .Upload_content {
    @apply border rounded-md border-dashed;
    border-color: $main_color;
    width: 536px;
    height: 536px;
  }
}
.Upload_progress {
  fill: $main_color;
  .progress_content {
    @apply flex flex-nowrap items-center justify-between;
    &__item {
      margin: 0 47.5px;
      &__line {
        
      }
    }
  }
}

</style>