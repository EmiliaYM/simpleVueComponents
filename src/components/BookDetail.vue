<template>
    <div class="innerTop">
        <h3>The Fellowship of the Ring</h3>
        <p>One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.</p>
        <p>Author: {{authorName}}</p>
        <p>Price: {{bookPrice}}</p>
        <button @click="updateToOriginalName">update To Original Name</button>
        <button @click="partialName">Extract parts of a string:</button>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    authorName: {
      type: String,
      required: true
    },
    bookPrice: Number
  },
  methods: {
    partialName() {
     var test = this.authorName.substring(6, this.authorName.length);
      this.authorName = test;
    },
    updateToOriginalName() {
      this.authorName = "J.R.R. Tolkien";
      this.$emit("eventUpdateOriginalName", this.authorName);
    }
  },
  created() {
    eventBus.$on("eventDiscountPrice", data => {
      this.bookPrice = data;
    });
  }
};
</script>
<style>
.innerTop {
  background-color: lightblue;
}
</style>
