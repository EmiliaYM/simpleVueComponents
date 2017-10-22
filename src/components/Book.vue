<template>
    <div class="component">
        <h1>Book catalog</h1>
        <p>Our library of books</p>
         <button @click="update">Update</button>
        Author's name: {{ authorName }}
        <p>Price: {{ price }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <ws-book-detail :author-name ="authorName" :book-price ="price"
                 @eventUpdateOriginalName="authorName = $event"></ws-book-detail>
            </div>
            <div class="col-xs-12">
                <ws-book-edit
                :author-name="authorName"
                :book-price="price"></ws-book-edit>
            </div>
            <div class="col-xs-12">
                <ws-book-footer></ws-book-footer>
            </div>
        </div>
    </div>
</template>

<script>
import BookDetail from "./BookDetail.vue";
import BookEdit from "./BookEdit.vue";
import BookFooter from './BookFooter.vue';

export default {
  data() {
    return {
      authorName: "John Doe",
      price: 100
    };
  },
  methods: {
    update() {
      this.authorName = "John Doe";
    }
  },
  components: {
    wsBookDetail: BookDetail,
    wsBookEdit: BookEdit,
    wsBookFooter : BookFooter
  }
};
</script>

<style>
div {
  background-color: lightgray;
  padding-bottom: 10px;
}
</style>

