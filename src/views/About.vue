<template>
    <div class="about">
        <div class="aboutban">
            <img src="../assets/spain.jpg" alt="">
        </div>
        <div class="aboutcont">
            <Basicinfor />
            <QandA />
        </div>
    </div> 
</template>

<script>
    import Basicinfor from '../components/Basicinfor.vue'
    import QandA from '../components/QandA.vue'
    
    export default {
    components: { Basicinfor, QandA },
    data (){
        return {}
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
        height: 100%;
    }
    .aboutban{
        height: 400px;
    }
    .aboutcont{
        width: 90%;
        display: flex;
        text-align: start;
    }
</style>
