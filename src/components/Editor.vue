<template>
  <div class="editor">
    <h1> エディター画面 </h1>
    <span>{{ user.displayName }}</span>

    <button @click="logout">ログアウト</button>
    <div class="memoList">
      <button class="addMemoButton" @click="addMemo">メモ追加</button>
      <ul>
        <li v-for="(memo,index) in memos" @click="selectMemo(index)" :data-selected="selectedIndex==index">{{ displayTitle(memo.markdown) }}</li>
      </ul>
      <div class="memoController">
        <button class="removeMemoButton" v-if="memos.length>0" @click="removeCurrentMemo">表示中のメモを削除</button>
        <button class="saveMemoButton" v-if="memos.length>0" @click="saveRemoteMemos">メモを保存する</button>
      </div>
    </div>
    <div class="editorWrapper" v-if="memos.length>0">
      <textarea class="markdown" v-model="memos[selectedIndex].markdown"></textarea>
      <div class="preview" v-html="preview()"></div>
    </div>
  </div>
</template>

<script>
    import marked from "marked";
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
            return {
                memos: [],
                markdown: "",
                selectedIndex: 0,
                trash: null,
            }
        },
        created: function(){
            firebase.database().ref("memos/" + this.user.uid).once('value').then(result=> {
                if(result.val()) {
                    this.memos = result.val();
                }
            })
        },
        mounted: function(){
            document.onkeydown = e =>{
                if(e.key == 's' && e.metaKey) {
                    this.saveRemoteMemos();
                }
            }
        },
        beforeDestroy: function() {
          document.onkeydown = null;
        },
        methods: {
            logout: function () {
                // firebase.auth().signOut();
                this.$store.dispatch("logout");
            },
            preview: function(){
                return marked(this.memos[this.selectedIndex].markdown);
                // return marked(this.markdown);
            },
            addMemo: function () {
                this.memos.push({markdown: "無題のメモ"});
            },
            selectMemo: function(index) {
                this.selectedIndex = index;
                this.saveRemoteMemos();
            },
            displayTitle: text => text.split(/\n/)[0],
            removeCurrentMemo: function () {
                this.trash = this.memos.splice(this.selectedIndex,1);
            },
            saveRemoteMemos: function () {
                firebase.database().ref("memos/" + this.user.uid).set(this.memos).then(result=> {
                    console.log("保存しました！")
                });

            },


        }
    }
</script>
<style lang="sass" scoped>
  .memoList
    width: 50%
    margin: auto
    padding: 2em 0
    text-align: left
    ul
      height: auto
      max-height: 5em
      overflow-y: auto
      padding: 0
      list-style: none
      li
        padding: .2em 0
        border-bottom: 1px dashed black
        &[data-selected="true"]
          background-color: khaki
  .memoController
    display: flex
    justify-content: space-between

  .editorWrapper
    display: flex
  .markdown
    width: 50%
    height: 500px
  .preview
    width: 50%
    text-align: left
</style>
