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
        <div class="file"> <img src="../assets/img/icon_upload_n.png"> 選擇檔案</div>
        <div class="text">或直接拖放檔案進來</div>
        <div class="text">檔案限制格式：pdf,大小200mb以下</div>
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
    @apply border rounded-md border-dashed flex flex-col items-center justify-center;
    border-color: $main_color;
    width: 536px;
    height: 536px;
    color: $main_color;
    .file {
      @apply border rounded px-2 py-1 flex flex-nowrap items-center;
      border-color: $main_color;
      margin-bottom: 8px;
      >img {
        margin-right: 4px;
      }
    }
    .file,.text{
      margin-bottom: 8px;
      font-weight: 700px;
      font-size: 16px;
      line-height: 23px;
    }
  }
}
.Upload_progress {
  margin: 60px 0;
  fill: $main_color;
  .progress_content__item {
    @apply relative;
    &:nth-last-child(1){
      &::before {
        display: none;
      }
    }
    &::before {
      @apply absolute;
      top: 29px;
      left: 60px;
      display: block;
      content: '';
      height: 2px;
      width: 95px;
      background-color: $main_color;
    }
    
  }
  .progress_content {
    @apply flex flex-nowrap items-center justify-between items-center;
    &__item {
      margin: 0 47.5px;
      &__line {
        
      }
    }
  }
}

</style>