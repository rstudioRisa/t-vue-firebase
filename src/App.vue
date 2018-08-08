<template>
  <div id="app" class="app">
    <Home v-if="!isLogin"></Home>
    <Editor :user="userData" v-if="isLogin"></Editor>
  </div>
</template>

<script>
    import Home from "./components/Home.vue";
    import Editor from "./components/Editor.vue";


    export default {
        name: 'app',
        data() {
            return {
                isLogin: false,
                userData: null,
            }

        },
        components: {
            Home,
            Editor,
        },
        created: function () {
            firebase.auth().onAuthStateChanged(user=>{
                console.log(user);
                if(user){
                    this.isLogin = true;
                    this.userData = user;
                } else {
                    this.isLogin = false;
                    this.userData = null;
                }
            })

        },
    }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
