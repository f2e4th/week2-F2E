<template>
    <div class="container_tab flex justify-center">
    <SelectSign v-if="isSelectSign" @closeWarning="closeWarning" @selectedSign="selectedSign"  />
        <div class="flex justify-between">
            <a class="signBtn flex flex-col items-center w-20 py-4 cursor-pointer" @click="isSelectSign = true">
            <img src="../assets/images/Tab_sign.png" @click="signModal"/>
            </a>
            <a class="dateBtn flex flex-col items-center w-20 py-4 cursor-pointer">
              <img src="../assets/images/Tab_date.png"/>
            </a>
           <a class="textBtn flex flex-col items-center w-20 py-4 cursor-pointer">
            <img src="../assets/images/Tab_text.png"/>
           </a>
        </div>
    </div>
</template>

<script>
import SelectSign from '../components/ChoiceSign.vue';
import { onMounted, ref, reactive } from 'vue';
var canvas = null;
export default {
    components: {
    // WarningAlert,
    SelectSign
  },
  setup (props, ctx) {
    const isSelectSign = ref(false)
    const signUrl = ref('')
    const closeWarning = (closeWarning) => {
      isSelectSign.value = closeWarning
    }

  
    const selectedSign = (selectedSign) => {
      fabric.Image.fromURL(selectedSign, (image) => {
        image.top = 100
        image.left = 100
        image.scaleX = 0.5
        image.scaleY = 0.5
        canvas.add(image)
      })
    }
    return {
        isSelectSign,
        closeWarning,
        selectedSign,
        signUrl,
    }
  } 
}
</script>

<style scoped lang="scss">
.container_tab{
    background: #FFFFFF;
}


</style>