import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorage from '../modules/localstorage' 
Vue.use(Vuex)

const store = new LocalStorage('todo-vue');

export default new Vuex.Store({
    state: {
        // todos: [{ content: '123', done: true },{ content: '456', done: false },{ content: '789', done: false }]
        todos: []
    },
    getters: {
        list(state){
            return state.todos.map((todo, tid) => {
                return{
                    tid,
                    todo
                }
            })
        },
        filterList(state, getters){
            return  (filter) => {
                switch(filter){
                    case 'all':
                        return getters.list;
                    case 'active':
                        return getters.list.filter((todo) => { return !todo.todo.done });
                    case 'done':
                        return getters.list.filter((todo) => { return todo.todo.done });    
                    default:
                        return [];
                }
            }
        }
    },
    mutations: {
        set_todos(state, todos){
            state.todos = todos;
        }
    },
    actions: {
        crete_todo({ commit }, { todo }){
            // 1.post
            const todos = store.load();
            todos.push(todo);
            store.save(todos);
            // 2.commit mutation
            commit('set_todos', todos);
            // 3.return
            return {
                tid: todos.length -1,
                todo
            }
        },
        read_todo({ commit }){
            // 1.get
            const todos = store.load();
            console.log(todos);
            // 2.commit mutation
            commit('set_todos', todos);
            // 3.return
            return {
                todos
            }
        },
        update_todo({ commit, state }, { tid, content }){
            // 1.patch
            if(state.todos[tid].content === content) return;
            const todos = store.load();
            todos[tid].content = content;
            // todos.splice(tid, 1, todo);
            store.save(todos);
            // 2.commit mutation
            commit('set_todos', todos);
            // 3.return
            return {
                tid,
                todo: todos[tid]
            }      
        },
        check_todo({ commit }, { tid, done }){
            // 1.patch
            const todos = store.load();
            todos[tid].done = done;
            store.save(todos);
            // 2.commit mutation
            commit('set_todos', todos);
            // 3.return
            return {
                tid,
                todo: todos[tid]
            }      
        },
        delete_todo({ commit }, { tid }){
            // 1.delete
            const todos = store.load();
            const todo = todos.splice(tid, 1)[0];
            store.save(todos);
            // 2.commit mutation
            commit('set_todos', todos);
            // 3.return
            return {
                tid: null,
                todo
            }
        },
        clear_todo({ commit }){
            const todos = [];
            store.save(todos);
            commit('set_todos', todos);
            return {
                todos
            }
        }    
    }
})