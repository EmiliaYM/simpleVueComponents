<template>
  <div class="component">
        <h3>The Footer</h3>
        <p>This is a footer</p>
        <p> Category ID: {{ category.id }}</p>
        <p> Category: {{ category.name }}</p>
        <button @click="updateCategory">Update category</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    
  data() {
      return {
          category: {
              id: 1,
              name: 'Adventure'
          }
      }
  },
  methods: {
      updateCategory() {
          this.category.name = 'Thriller';
          this.test = 'Thriller'
          eventBus.$emit('eventUpdateCategory', this.category);
      }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgoldenrodyellow
    }
</style>