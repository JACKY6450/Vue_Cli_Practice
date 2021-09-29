<template>
    <div class="content">
        <h2>問答Q&A</h2>
        <QandAitem 
         v-for = "(item, index) in QAdata" 
         :key = "item.question+''+item.answer" 
         :question = "item.question"
         :answer = "item.answer"
         :show = "item.show"
         @show_hide = "showhandler(index)"
                   />
        <!-- <div class="QAitem" v-for = "(item,index) in QAdata" :key = "item">
            <h3>
                <span @click = "show_hide(index)">
                    {{ item.question }}
                </span>
            </h3>
            <p v-if = "item.show">
                {{ item.answer }}
            </p>
        </div> -->
    </div>
</template>

<script>
import QandAitem from '../components/QandAitem.vue'
export default {
    components :{
        QandAitem
    },
    data(){
        return{
            QAdata:[
                { 
                  question: '請問你的姓名是?',
                  answer: '張硯涵',
                  show: false
                },
                { 
                  question: '請問你的生日血型?',
                  answer: '1993年4月24日，血型B型。',
                  show: false
                },
                { 
                  question: '請問你的星座?',
                  answer: '金牛座。',
                  show: false
                },
                { 
                  question: '請問你最愛看的電影?',
                  answer: '星際大戰，漫威復仇者聯盟，主要是動作類型的都蠻喜歡的。',
                  show: false
                },
                { 
                  question: '最喜歡的電視劇?',
                  answer: '陰屍路，絕命毒師，疑犯追蹤，毒梟。',
                  show: false
                },
                { 
                  question: '請問你最難忘的一件事?',
                  answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus similiqueunde iusto',
                  show: false
                },
                { 
                  question: '一場最難忘懷的旅行?',
                  answer: '在日本打工度假那一年認識了幾個也是從台灣來的朋友一起去了九州福岡、熊本，還有到熊本雄部長辦公室去參觀，'+
                          '因福岡是日本拉麵的發源地因此那一次旅程除了去各個景點以外各種吃拉麵簡直是一場拉麵旅行，'+
                          '連一蘭拉麵本店我們都造訪過，這些回憶到現在都還很美好。',
                  show: false
                },
                { 
                  question: '請問你有哪些工作經歷?',
                  answer: '我從大學時開始做一些打工性質的工作，在大學期間做過7-11店員，燒烤店外場，簡餐店的內場，服完役之後到了日本Working Holiday'+
                          '有在那邊的飯店做打掃房間的工作以及串炸店的服務生，回國後找工作一段時間找到了現在的工作持續做到現在。',
                  show: false
                },
                { 
                  question: '請問你為何想轉職?',
                  answer: '因為對於目前的工作環境跟氣氛不是跟我很Match，做的東西感覺能發揮的地方也不多，因此才會有想學習不同的專業技術比方說'+
                          '網頁前端、後端、純軟體等等，在嘗試自己寫了一些網頁之後發覺自己對於網頁前端還蠻有興趣的而且可以馬上做馬上看到成果。',
                  show: false
                },
                { 
                  question: '未來想去哪邊工作生活?',
                  answer: '因本身還蠻容易對一個一成不變的環境產生倦怠的因此將來有想要出國工作生活的想法，因政府現在有在推行南進政策因此對於'+
                          '一些東南亞國家像是越南、泰國、印尼、菲律賓都蠻有興趣的，未來可能會找機會到那邊工作生活。',
                  show: false
                }
            ]
        }
    },
    methods:{
        showhandler(index){
          if(!this.QAdata[index].show){
              this.QAdata[index].show = true;
          }
          else{
              this.QAdata[index].show = false;
          }
        }
    }
    
}
</script>

<style>
    .content{
        width: 65%;
        padding: 10px 20px;
    }
</style>