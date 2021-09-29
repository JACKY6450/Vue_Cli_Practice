<template>
    <div class="contactme">
        <div class="Mugshot">
            <img src="../assets/europe-820314_1920.jpg" alt="">
        </div>
        <p>
            <span style="font-size: 24px; font-weight: bold;">About me</span><br>
            大家好我是張硯涵我畢業於國立高雄應用科技大學(高雄科技大學前身)，目前任職於產經公司
            從事的工作主要有:MCU Firmware專案的撰寫，數位電源IC前期研發設計&測試，專案PCB Layout
            等工作內容。我的個性是還蠻慢熟跟害羞的，對於第一次接觸到的人跟環境通常會略顯緊張，但互相
            有了交集比較熟了之後我是還蠻熱情的，本人喜歡看電影、看電視劇、打遊戲這些消遣活動，對於
            新的事物充滿好奇感討厭一成不變的生活模式，常常默默地自學一些別人想不到的事物。
        </p>
        <ul>
            <li v-for = "item in basicinfor" :key = "item.describe+''+item.content" >
                <span>
                    <i :class="item.iconstyle" aria-hidden="true"></i> 
                    <b>{{item.describe}}</b>
                </span> 
                <span >
                    {{item.content}}
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            basicinfor :[
                {
                    iconstyle: 'fa fa-home',describe: '居住地 : ',content: '新北市三重區'  
                },
                {
                    iconstyle: 'fa fa-building',describe: '任職於 : ',content: '目前待業中'  
                },
                {
                    iconstyle: 'fa fa-facebook',describe: '我的臉書 : ',content: 'https://www.facebook.com/ '+'\n'+' jaacky.chang'  
                },
                {
                    iconstyle: 'fa fa-envelope',describe: '我的信箱 : ',content: 'qwqw0424@yahoo.com.tw \n qwqw0424@gmail.com'  
                },
                {
                    iconstyle: 'fa fa-mobile',describe: '連絡電話 : ',content: '0968721892'  
                },
            ]
        }
    }
}
</script>
<style scoped>
    .contactme{
        /* flex: auto; */
        /* height: 800px; */
        width: 35%;
        font-size: 20px;
        padding: 10px;
        background-color:#77ffcc;
        /* color:#009ffc; */
        /* margin-left: 50px; */
        /* border: 1px solid gray; */
        
    }
    .contactme .Mugshot{
            width: 220px;
            height: 220px;
            margin: auto;
            padding: 10px;
            /* border: 1px solid black; */
            /* border-radius: 50%;      */
    }
    .contactme p{
        margin-top: 10px;
        padding: 0px 10px;
    }
    .contactme .Mugshot img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    /* .contactme ul{
        padding: 0px 5px;
    } */
    .contactme ul li{
        margin: 20px 0px;
        display: flex;
        /* padding: 0px 10px; */
        /* border: 1px solid black; */
    }
    .contactme ul li b{
        margin-left: 10px;
    }
    .contactme ul li span{
        display: inline-block;
        margin-left: 10px;
        vertical-align: middle;
        /* border: 1px solid black; */
    }
    .contactme ul li .width040{
        width: 42%;
    }
    .contactme ul li .width045{
        widows: 40%;
    }
    .contactme ul li::before{
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
    .fa-facebook{
        color: black;
        background-color: transparent;
    }
    .fa:hover {
        opacity: 1;
    }
</style>