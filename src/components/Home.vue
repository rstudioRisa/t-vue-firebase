<template>
  <div>
    <h1>{{ msg }}</h1>
    <button>Googleアカウントでログイン</button>
  </div>
  
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                msg: "Welcome to Vue-Firebose Test"
            }
        }
    }
</script>
