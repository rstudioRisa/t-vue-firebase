<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="googleLogin">Googleアカウントでログイン</button>
  </div>

</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                msg: "Welcome to Vue-Firebose Test"
            }
        },
        methods: {
            googleLogin: function () {
                firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
            }
        }
    }
</script>
