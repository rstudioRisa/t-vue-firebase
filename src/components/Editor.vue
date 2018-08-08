<template>
  <div class="editor">
    <h1> エディター画面 </h1>
    <span>{{ user.displayName }}</span>

    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
    export default {
        name: "Editor",
        props:{
            // "user":{
            //     type:Object,
            // },
        },
        computed: {
            user: function () {
                return this.$store.getters.user;

            }
        },
        data() {
            return {}
        },
        methods: {
            logout: function(){
                // firebase.auth().signOut();
                this.$store.dispatch("logout");
            }
        }
    }
</script>

