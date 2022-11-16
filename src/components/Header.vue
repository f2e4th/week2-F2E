<template>
    <div class="container_tab flex justify-center">
        <div class="flex justify-between">
            <img src="../assets/images/Tab_sign.png" @click="signModal"/>
            <img src="../assets/images/Tab_date.png"/>
            <img src="../assets/images/Tab_text.png"/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            signStatus:false,
        }
    },
    methods:{
        signModal(){
            // this.$emitter.emit('signStatus' ,!this.signStatus)
        }
    }

    
}
</script>

<style scoped lang="scss">
.container_tab{
    background: #FFFFFF;
}


</style>