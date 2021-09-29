<template>
    <div class="todos">
        <div class="menu">
            <router-link to= "/todo" replace>全部</router-link> 
            <router-link to= "/todo?filter=active" replace>未完成</router-link> 
            <router-link to= "/todo?filter=done" replace>已完成</router-link>
            <!-- <a href="/todo?filter=done">已完成</a> -->
        </div>
        <div class="typecol">
            <input type="text" v-model = "currentcont" placeholder="請輸入代辦事項">
            <input type="button" value="新增" @click = "updatehandler(todo)">
        </div>
        <ul style="padding: 0px; margin: 0px;">
            <!-- <li v-for = "item of list" :key= "item">
                <input type="checkbox" name="" id="" v-model="item.todo.done">
                <span>
                    {{ item.todo.content }}
                </span>
                
            </li> -->
            <Todoitem v-for = "item of list"  
            :key= "item.tid+''+item.todo.content" 
            :todo = "item.todo" 
            :edit = "item.tid === edit"
            @check = "value => checkhandler(item.tid, value)"
            @edithis = "edit = item.tid"
            @editcomplete = "value => editcompletehandler(item.tid, value)"
            @deletethis = "deletehandler(item.tid)"/>
        </ul>
    </div>
</template>
<style scoped>
    .todos{
        padding: 10px;
        background-color: #f5f5f5;
        width: 40%;
        margin: auto;
    }
    .menu a{
        display: inline-block;
        padding: 6px 6px;
        margin: 0px 4px;
        text-decoration: none;
        color: black;
        border-radius: 3px;
    }
    
    .menu a.router-link-exact-active {
        background-color: #cccccc;
    }
    .typecol{
        margin-top: 10px;
        padding: 0px 3px;
        display: flex;
    }
    .typecol input[type = "text"]{
        width: 95%;
        padding: 0px 3px;
        margin-right: 8px;
        font-size: 16px;
    }
</style>
<script>
import Todoitem from '../components/Todoitem.vue'
export default {
    data(){
        return{
            filter: 'all', // all,active,done
            edit: null ,
            currentcont: '',
            todo: {
                content: '',
                 done: false
            }
        }
    },
    computed: {
        list(){
            return this.$store.getters.filterList(this.filter);
        }
    },
    methods: {
        updatehandler(todo){
            todo.content = this.currentcont;
            this.currentcont = '';
            this.$store.dispatch('crete_todo', { todo });
            // console.log(todo);
        },
        checkhandler(tid, done){
            this.$store.dispatch('check_todo', {tid, done});
            // console.log(tid,done);
        },
        editcompletehandler(tid, content){
            this.edit = null;
            // console.log(tid, content);
            this.$store.dispatch('update_todo',{tid, content});
        },
        deletehandler(tid){
            if (confirm('你確要刪除此項 ?')){
                this.$store.dispatch('delete_todo', { tid });
            }
        }
    },
    watch: {
        // $route: function(route){
        //     this.filter = route.query.filter || 'all';
        // },
        $route: {
            immediate: true,
            handler: function(route){
                this.filter = route.query.filter || 'all';
            }   
        }
    },
    mounted(){
        this.$store.dispatch('read_todo');    
    },
    components: {
        Todoitem
    }
}
</script>