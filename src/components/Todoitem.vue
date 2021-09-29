<template>
    <li class="list">
        <template v-if="!edit" style="border: 1px solid black">
            <input type="checkbox" name="" id="" v-model="done">
            <span>
                {{ todo.content }}
            </span>
            <input type="button" value="編輯" @click = "$emit('edithis')">
            <input type="button" value="刪除" @click = "$emit('deletethis')">
        </template>
        <template v-else>
            <input type="text" name="" id="" v-model = "editcontent">
            <input type="button" value="完成"  @click = "$emit('editcomplete',editcontent)">
        </template>   
    </li>
</template>
<style scoped>
    .list {
        margin: 10px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 1px solid black; */
    }
    .list input[type="checkbox"]{
        width: 20px;
        height: 20px;
        /* margin-right: 8px; */
    }
    .list span, .list input[type = "text"]{
        flex: auto;
        font-size: 16px;
        /* width: 250px; */
        padding: 5px 3px;
        margin-left: 8px;
        border: 1px solid #cccccc;
        text-align: start;
    }
    .list input[type="button"]{
        margin-left: 8px;
        /* margin-right: 8px; */
    }
</style>
<script>
export default {
    props:{
        todo:{
            type: Object,
            required: true
        },
        edit:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            editcontent: ''
        }
    },
    mounted(){
        this.editcontent = this.todo.content;
    },
    computed:{
        // content:{
        //     get(){
        //         return this.todo.content;
        //     },
        //     set(value){
        //         this.editcont = value;
        //     }
        // },
        done:{
            get(){
                return this.todo.done;
            },
            set(value){
                this.$emit('check', value);
            }
        }
    }
}
</script>