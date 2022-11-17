<template>
  <PdfEditor src="../../public/pdf/audit_trail.pdf"/>
</template>

<script>
import {ref, reactive, onMounted} from 'vue';
import { defineComponent } from "vue";
import { PdfEditor } from "@lanseria/vue-pdf-vite";
export default defineComponent ({
  components: {
    PdfEditor
  }
})
</script>
<script set up>


</script>

<style scope>
.top-bar {
  display: none !important;
}
.render-content canvas {
  @apply w-full;
}
</style>