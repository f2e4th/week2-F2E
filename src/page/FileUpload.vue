<template>
<div class="container_sign">
    <div class="flex justify-center pt-10 pb-10">
        <img src="../assets/images/step1.png"/>
    </div>
    <div  :class="nextPage == ''? '' : 'hidden'" class="flex justify-center">
        <div class="upload_content rounded-md flex items-center 
        justify-center my-4 flex flex-col">
        <div class="border rounded-md border-dashed 
        flex justify-center items-center flex-col" :class="status == 0 ? 'upload_inneer1' : 'upload_inneer2'">
            {{ status == 1 ? filename : ''}}
            <label v-if="status == 0" class="mb-2 upload mt-1">
                <input class="form-control hidden" type="file" ref="upload-file" accept="application/pdf" @change="uploadFile()"/>
                <!-- <img src="../assets/images/Option.png"/> -->
            </label>
            <label v-if="status == 1" class="mb-2 reupload mt-1">
                <input class="form-control hidden" ref="upload-file" type="file" accept="application/pdf"
                @change="uploadFile()" />
            </label>
            <div v-if="status == 0" class="mb-2 font-bold">或直接拖放檔案進來</div>
            <div class="font-bold">檔案限制格式：pdf，大小200mb以下</div>
        </div>
        <div :class="nextPage == '' ? '' : 'hidden'" class="mt-8 upload_inneer2 border rounded-md border-dashed 
        flex justify-center items-center flex-col">
            <p class="text-left file_title">
                文件命名
            </p>
            <input type="text" class="file_name"/>
        </div>
        </div>
    </div>
    <div @click="nextStep()" :class="nextPage == ''">下一步</div>
    <div :class="nextPage == '' ? 'hidden' : ''">
        <FileReview/>
    </div>
</div>
</template>

<script>
import bus from '../srcipt/bus';
import FileReview from '../page/FileReview.vue';

export default {
    components: {
    FileReview
    },
    data() {
        return {
            filename:'',
            status:'',
            nextPage:''
       }
    },
    methods:{
        uploadFile(){
            this.status = this.$refs['upload-file'].files.length;
            console.log(this.status)
            if(this.status == 1){
                this.filename = this.$refs['upload-file'].files[0].name;
                console.log(this.filename);
                bus.emit('fileUpload', this.$refs['upload-file'].files[0])
            }
        },
        nextStep(){
            this.nextPage = 1
        }
    },
    create(){
        this.status = '';
    }

    
}
</script>

<style scoped lang="scss">
.upload{
    background-image:url('../assets/images/Option.png');
    height: 40px;
    width: 100px;
    background-repeat: no-repeat;
    cursor: pointer;
}

.reupload{
    background-image:url('../assets/images/reupload.png');
    height: 40px;
    width: 100px;
    background-repeat: no-repeat;
    cursor: pointer;

}
</style>