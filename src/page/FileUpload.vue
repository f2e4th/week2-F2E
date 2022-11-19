<template>
  <div class="container_sign">
    <div class="flex justify-center pt-10 pb-10">
      <!-- <img src="../assets/images/step1.png"/> -->
      <ProgressLine :arrStatus="arrStatus" />
    </div>
    <div :class="nextPage == '' ? '' : 'hidden'" class="flex justify-center">
      <div
        class="upload_content rounded-md flex items-center justify-center my-4 flex flex-col"
        @drop="ondrop"
        @dragleave="dragleave"
        @dragenter="ondragenter"
        @dragover="ondragover"
      >
        <div
          class="border rounded-md border-dashed flex justify-center items-center flex-col"
          :class="status == 0 ? 'upload_inneer1' : 'upload_inneer2'"
        >
          {{ status == 1 ? filename : "" }}
          <label v-if="status == 0" class="mb-2 upload mt-1">
            <input
              class="form-control hidden"
              type="file"
              ref="upload-file"
              accept="application/pdf"
              @change="uploadFile()"
            />
            <!-- <img src="../assets/images/Option.png"/> -->
          </label>
          <label v-if="status == 1" class="mb-2 reupload mt-1">
            <input
              class="form-control hidden"
              ref="upload-file"
              type="file"
              accept="application/pdf"
              @change="uploadFile()"
            />
          </label>
          <div v-if="status == 1" class="mb-2 font-bold">
            或直接拖放檔案進來
          </div>
          <div class="font-bold">檔案限制格式：pdf，大小200mb以下</div>
        </div>
        <div
          v-if="step == 2"
          :class="nextPage == '' ? '' : 'hidden'"
          class="mt-8 upload_inneer2 border rounded-md border-dashed flex justify-center items-center flex-col"
        >
          <p class="text-left file_title">文件命名</p>
          <input type="text" class="file_name bg-white file_name_input" v-model="filename"/>
        </div>
      </div>
    </div>
    <div @click="nextStep()">下一步</div>
    <div :class="nextPage == '' ? 'hidden' : ''">
      <FileReview />
    </div>
  </div>
</template>

<script>
import bus from "../srcipt/bus";
import FileReview from "../page/FileReview.vue";
import ProgressLine from "../components/progress.vue";

export default {
  components: {
    FileReview,
    ProgressLine,
  },
  data() {
    return {
      filename: "",
      status: "",
      nextPage: "",
      arrStatus: [1, 2, 2],
      // 控制進度條 控制步驟，動態控制 progressData item.status , 0 已經做， 1正在做 ，2還沒做 ,
      step: 1, // 1 未上傳，2 已上傳
    };
  },
  methods: {
    uploadFile(data) {
        this.status = this.$refs["upload-file"].files.length||data.length;
        console.log(this.status);
        var filedata;
        if (this.status == 1) {
            if(data){
                this.filename = data[0].name;
                filedata = data[0]
            } else {
                this.filename = this.$refs["upload-file"].files[0].name;
                filedata = this.$refs["upload-file"].files[0]
            }
        console.log(this.filename);
        // bus.emit("fileUpload", this.$refs["upload-file"].files[0]);
        this.store(filedata)
      } else {
        this.step = 1;
      }
    },
    store(thisFile){
        var newImg = canvas.toDataURL(thisFile);
        localStorage.setItem('file', newImg)

        this.step = 2
    },
    nextStep() {
      this.nextPage = 1;
    },
    dragleave(e) {
      console.log("拖出");
      e.preventDefault(); //阻止離開時的瀏覽器預設行為
    },
    ondragenter(e) {
      e.preventDefault(); //阻止拖入時的瀏覽器預設行為
      console.log("拖入");
    },
    ondragover(e) {
      console.log("正在拖");
      e.preventDefault();
    },
    ondrop(e) {
      console.log("拖曳結束");
      e.preventDefault(); //阻止拖放後的瀏覽器預設行為
      const data = e.dataTransfer.files; // 取得檔案
      if (data.length < 1) {
        return; // 檢查檔案是否有拖曳進來
      }
      if (data.size >= 2000000) {
        // 超過2mb不可上傳
        alert("不可超過2mb");
        return;
      }
      this.uploadFile(data);
    //   const formData = new FormData(); // 建立一個 newForm
    //   for (var i = 0; e.dataTransfer.files.length - 1; i++) {
    //     // console.log(e.dataTransfer.files.length);
    //     if (e.dataTransfer.files[i].name.indexOf("pdf") === -1) {
    //       // 檢查是否上傳的檔案不符合格式
    //       alert("請上傳pdf檔案");
    //       return;
    //     }
    //     formData.append(
    //       "uploadFile",
    //       e.dataTransfer.files[i],
    //       e.dataTransfer.files[i].name
    //     );
    //   }
    },
  },
  create() {
    this.status = "";
  },
};
</script>

<style scoped lang="scss">
$main_color: #be8e55;
.upload {
  background-image: url("../assets/images/Option.png");
  height: 40px;
  width: 100px;
  background-repeat: no-repeat;
  cursor: pointer;
}

.reupload {
  background-image: url("../assets/images/reupload.png");
  height: 40px;
  width: 100px;
  background-repeat: no-repeat;
  cursor: pointer;
}
.file_name_input {
    color: $main_color;
}
</style>
