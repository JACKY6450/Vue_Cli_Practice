<template>
    <div class="QAitem">
        <h3>
            <span @click = "$emit('show_hide')">
                {{ question }}
            </span>
        </h3>
        <p v-if = "show">
            {{ answer }}
        </p>
    </div>
</template>

<script>
export default {
    props:{
        question:{
            type: String,
            required: true
        },
        answer:{
            type: String,
            required: true
        },
        show:{
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            showitem: false,
        }
    },
    methods:{
        // show_hide(){

        // }    
    },
    // mounted(){
    //     console.log(this.id);
    // }
}
</script>

<style>
    .QAitem h3{
        margin: 15px 0px;
    }
    .QAitem p{
        margin: 10px 0px;
    }
    .QAitem h3 span:hover{
        color: mediumblue; 
        cursor: pointer;
    }
</style>