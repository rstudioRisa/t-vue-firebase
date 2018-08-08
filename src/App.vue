<template>
  <div id="app" class="app">
    <p v-if="!checkedUserStatus">check status</p>
    <div v-if="checkedUserStatus">
      <Home v-if="!isLogin"></Home>
      <Editor v-if="isLogin"></Editor>
    </div>
  </div>
</template>

<script>
    import Home from "./components/Home.vue";
    import Editor from "./components/Editor.vue";


    export default {
        name: 'app',
        data() {
            return {
                // isLogin: false,
                // userData: null,
                checkedUserStatus: false,
            }

        },
        computed: {
            isLogin: function () {
                return this.$store.getters.isLogin;
            }
        },
        components: {
            Home,
            Editor,
        },
        created: function () {
            firebase.auth().onAuthStateChanged(user => {
                console.log(user, this.$store.getters.user);
                if (user) {
                    this.$store.commit("setUserData", {user: user});
                    // console.log("state", this.$store.getters.user)
                    // this.isLogin = true;
                    // this.userData = user;
                    // } else {
                    // this.isLogin = false;
                    // this.userData = null;
                }
                this.checkedUserStatus = true;
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
