<template>
  <div class="draw_modal w-full left-0 top-0 fixed" @click.self="closeWarning">
    <div
      class="card-inner absolute text-xl pop-container-choose w-full z-50"
      v-if="isSelectMode && signStatus != null"
    >
      <div class="relative mt-3" @click="closeWarning">
        <img
          class="absolute right-0 top-0 mr-4 mt-3"
          src="../assets/images/icon_Close_Square_n.png"
        />
      </div>
      <div class="bg rounded-3xl overflow-hidden shadow-lg w-full">
        <div class="px-4 py-6 flex flex-col justify-center w-full">
          <div
            class="
              font-bold
              text-lg
              mb-8
              whitespace-nowrap
              text-center
              proj-text-primary
            "
          >
            選擇簽名
          </div>
          <div
            class="
              selected-modal
              overflow-auto
              flex
              items-center
              justify-center
              flex-wrap
            "
          >
            <div
              class="mb-2 flex justify-center"
              v-for="(item, idx) in signArr"
              :key="idx"
            >
              <div
                class="h-auto bg-white w-4/5 rounded-3xl py-2"
                @click="selectedSign(item)"
              >
                <img
                  :src="item"
                  class="sign mx-auto object-contain w-36 h-20"
                />
              </div>
            </div>
          </div>
          <a
            class="
              proj-text-primary
              block
              mt-4
              font-bold
              text-lg
              whitespace-nowrap
            "
            @click="isSelectMode = false"
            >+ 新增簽名</a
          >
        </div>
      </div>
    </div>
    <div
      class="card-inner absolute text-xl w-full z-50 pop-container"
      v-if="!isSelectMode"
    >
      <div class="bg rounded-3xl overflow-hidden shadow-lg w-full">
        <div class="relative mt-3" @click="closeWarning">
          <img
            class="absolute right-0 top-0 mr-4"
            src="../assets/images/icon_Close_Square_n.png"
          />
        </div>
        <div class="index_Sign flex flex-col items-center w-full py-4 px-2">
          <!-- <div class="container-pop mx-auto mb-5 text-base md:text-lg">
            <div class="inner-container">
              <div class="toggle" @click="isSignSelf = false">
                <p>匯入簽名檔</p>
              </div>
              <div class="toggle" @click="isSignSelf = true">
                <p>手寫簽名</p>
              </div>
            </div>
            <div class="inner-container" id='toggle-container' :class="{ 'toggle-active': !isSignSelf }">
              <div class="toggle" @click="isSignSelf = false">
                <p>匯入簽名檔</p>
              </div>
              <div class="toggle" @click="isSignSelf = true">
                <p>手寫簽名</p>
              </div>
            </div>
          </div> -->

          <CanvasDraw
            :isSignSelf="isSignSelf"
            v-on:closeWarning="closeWarning"
            v-on:getStroke="getStroke"
            v-on:backToChoose="backToChoose"
            @sign="getSign"
          />
        </div>
      </div>
    </div>

    <div
      class="card-inner absolute text-xl pop-container-choose w-full z-50"
      v-if="signStatus == null && isSelectMode"
    >
      <div class="bg rounded-3xl overflow-hidden shadow-lg w-full">
        <div
          class="
            box_container
            px-4
            py-6
            flex flex-col
            justify-center
            w-full
            bg-white
            relative
          "
        >
          <img
            src="../assets/images/icon_Close_Square_n.svg"
            class="absolute top-6 right-6 cursor-pointer"
            @click="closeWarning"
            alt=""
          />

          <!-- 創建簽名 -->
          <div v-if="chooseSign" class="modal_content modal_content--nosign">
            <div class="font-bold text-lg mb-8 whitespace-nowrap text-center">
              目前還沒有簽名喔~
            </div>
            <div class="text-sm">請創建新的簽名檔，可上傳圖片或線上簽名</div>
            <div
              class="btn_text flex justify-center mt-4 rounded cursor-pointer"
              @click="isSelectMode = false"
            >
              <img src="../assets/images/icon_add_new_sign_n.svg" />建立簽名
            </div>
            <div
              @click="uploadSign"
              class="btn_text flex justify-center mt-4 rounded cursor-pointer"
            >
              <img src="../assets/images/icon_add_new_img_n.svg" />上傳簽名圖檔
            </div>
          </div>
          <!-- 上傳簽名 -->
          <div v-else class="modal_content modal_content--upload">
            <div class="font-bold text-lg mb-8 whitespace-nowrap text-center">
              上傳簽名圖檔
            </div>
            <div class="card_continer flex flex-nowrap">
              <div v-for="(item, i) in 2" :key="i" class="card my-2 rounded">
                <div class="card_inner">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import CanvasDraw from "./CanvasDraw.vue";
export default {
  name: "selectSign",
  components: {
    CanvasDraw,
  },
  props: {},
  setup(props, ctx) {
    const signArr = ref("");
    const isSelectMode = ref(true);
    const isSignSelf = ref(true);
    const signStatus = ref(null);
    const chooseSign = ref(true);

    onMounted(() => {
      init();
      signStatus.value = localStorage.getItem("vue-canvas");
      console.log(signStatus.value);
    });
    onUnmounted(() => {});

    const init = () => {
      if (localStorage.getItem("vue-canvas-array")) {
        signArr.value = JSON.parse(localStorage.getItem("vue-canvas-array"));
      }
    };

    const closeWarning = () => {
      ctx.emit("closeWarning");
    };

    const selectedSign = (url) => {
      ctx.emit("selectedSign", url);
      closeWarning();
    };

    const getStroke = (getStroke) => {
      ctx.emit("selectedSign", getStroke);
    };

    const backToChoose = (backToChoose) => {
      closeWarning();
      console.log(backToChoose);
      // isSelectMode.value = backToChoose
    };

    const getSign = () => {
      closeWarning();
      signStatus.value != null;
      isSelectMode.value = true;
    };

    const uploadSign = () => {
      console.log("change modal");
      chooseSign.value = false;
    };

    return {
      // url,
      signArr,
      closeWarning,
      selectedSign,
      init,
      isSelectMode,
      isSignSelf,
      getStroke,
      backToChoose,
      signStatus,
      getSign,
      chooseSign,
      uploadSign,
    };
  },
};
</script>

<style scoped lang="scss">
$main_color: #be8e55;
.draw_modal {
  z-index: 99;
  height: 120vh;
  background: rgba(140, 93, 25, 0.3);
}
.card-inner {
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  color: #8c5d19;
}
.bg {
  background: #efe3d4;
}

.container-pop {
  width: 240px;
  height: 40px;
  // margin: auto;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
}

.inner-container {
  position: absolute;
  left: 0;
  top: 0;
  width: inherit;
  height: inherit;
  text-transform: uppercase;
  // font-size: .6em;
  // letter-spacing: .2em;
}

.inner-container:first-child {
  background: #ffffff;
  color: #a9a9a9;
}

.inner-container:nth-child(2) {
  background: linear-gradient(180deg, #35a483 0%, #077854 100%);
  color: white;
  clip-path: inset(0 50% 0 0);
  transition: 0.3s cubic-bezier(0, 0, 0, 1);
}

.toggle {
  width: 50%;
  position: absolute;
  height: inherit;
  display: flex;
  box-sizing: border-box;
}

.toggle p {
  margin: auto;
}

.toggle:nth-child(1) {
  right: 0;
}
.toggle-active {
  clip-path: inset(0 0% 0% 50%) !important;
}

.selected-modal {
  height: 18rem;
}
.pop-container-choose {
  width: fit-content;
}
.pop-container {
  max-width: 600px;
  @media (max-width: 768px) {
    max-width: 343px;
  }
}
.btn_text {
  @apply flex items-center justify-center;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  height: 34px;
  width: 280px;
  background-color: #efe3d4;
  margin: 4px auto;
  > img {
    margin-right: 5.5px;
  }
}
.box_container {
  box-shadow: 2px 2px 10px #be8e55;
}
.modal_content.modal_content--upload {
  .card {
    @apply p-0 flex items-center justify-center;
    width: 260px;
    height: 240px;
    background: #EFE3D4;
    &:nth-child(1){
      margin-right: 20px;
    }
    .card_inner {
      @apply border border-dashed rounded-lg;
      border-color: $main_color;
      height: 180px;
      width: 200px;
    }
  }
}
</style>
