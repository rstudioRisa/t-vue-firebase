<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="googleLogin" v-bind:aria-disabled="sentRequest">Googleアカウントでログイン</button>
  </div>

</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                msg: "Welcome to Vue-Firebose Test",
                sentRequest: false,
            }
        },
        methods: {
            googleLogin: function () {
                this.sentRequest = true;
               this.$store.dispatch("login")
            }
        }
    }
</script>
