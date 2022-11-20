<template>
  <div>
    <!-- <component :is="nowComponent"></component> -->
    <PdfEditor v-if="PdfEditor" id="canvas" src="../../public/pdf/audit_trail.pdf"/>
    <div v-else>載入中...</div>
  </div>
  <!-- <PdfEditor :src="imgUrl"/> -->
</template>

<script>
import {ref, reactive, onMounted} from 'vue';
// import { defineComponent } from "vue";
import { PdfEditor } from "@lanseria/vue-pdf-vite";
export default {
  data() {
    return{
      imgUrl: '',
      nowComponent: ''
    }
  },
  components: {
    PdfEditor
  },
  methods:{
    getUrl(){
      var dataImage = localStorage.getItem('file');
      // bannerImg = document.getElementById('canvas');
      this.imgUrl = "data:image/png;base64," + dataImage;
    },
  },
  mounted(){
    this.getUrl();

  }
}
</script>

<style scope>
.top-bar {
  display: none !important;
}
.render-content canvas {
  @apply w-full;
}
</style>