<template>
  <div id="app">
    <Menu :title="message"></Menu>
    <router-link :to="{name: 'home', params: {param_title: app_title } }">Home</router-link>
    <router-view></router-view>
    <TestProps :name=" 'Noah' " :age="345" :title="app_title" :my-user="user"></TestProps>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import TestProps from "@/components/TestProps";

export default {
  name: 'App',
  data: function () {
    return {
      message : 'My First App',
      number_users: 345,
      app_title: 'Hello World',
      user: {user_name: 'Toto', user_mail: 'toto@gmail.com'},
      isConnected: false
    }
  },
  computed: {
    truc: function () {
     if(this.isConnected)
        return 'bidule'
     else
       return  'autre chose'
    }
  },
  components: {
    TestProps,
    Menu,
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
