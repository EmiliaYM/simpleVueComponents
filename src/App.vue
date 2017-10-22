<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <ws-book></ws-book>
      </div>
    </div>
  </div>
</template>


<script>
import Book from './components/Book.vue';
export default {
  components: {
    wsBook: Book
  }
}
</script>

<style>
</style>
