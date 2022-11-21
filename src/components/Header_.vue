<template>
    <div style='border: 1px solid red' class="flex justify-around items-center">
        <img src="../assets/images/header_icon/home_icon.png" alt="">

        <div class="flex justify-center">
            <div v-for=" (arr,i) in header_arr" :key='i' class="flex items-center mx-5 text_brown">
                <img src= '../assets/images/header_icon/home_icon.png' alt="" class="mx-3">
                {{arr.text}}
            </div>
        </div>

        <div>
            <img src="../assets/images/header_icon/user_icon.png" alt="">
        </div>
    </div>
</template>


<script>
    export default {
        data () {
            return{
                header_arr :[
                    {
                        text:'待自己簽屬',
                        img:'assets/images/header_icon/icon_own.png'
                    },
                    {
                        text:'待別人簽屬',
                        img:'assets/images/header_icon/icon_other.png'
                    },
                    {
                        text:'管理簽名',
                        img:'assets/images/header_icon/icon_setting.png'
                    }
                ]
            }
        }
        
    }

</script>

<style lang="scss" scoped>
    .text_brown{
        color:#8C5D19;
    }
</style>