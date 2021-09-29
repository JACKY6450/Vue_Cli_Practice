<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link> |
      <router-link :to="'/user/'+item.id">User</router-link> |
      <router-link :to="'/user/'+item1.id">User</router-link>
      <!-- <a :href="'/user/'+item1.id">User1</a> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      item : {
        name :'user',
        id: 'date1'
      },
      item1 : {
        name :'user1',
        id: 'date2'
      }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
