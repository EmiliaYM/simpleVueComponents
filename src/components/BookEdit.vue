<template>
    <div class="innerBottom">
        <h3>The Hobbit</h3>
        <p>Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo r eluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.</p>
        <p>Author: {{authorName}}</p>
        <p>Price: {{bookPrice}}</p>
        <button @click="discountPrice">Discount price</button>
         <!-- Note that once we have pass the category object from BookFooter to BookEdit component,
        we have actually passed the object by refernce and not a new instance of it. Therefore,
        after you have passed by reference, any updates to the object property is directly updated
        to the original object. -->
        <button @click="objectDemo">Demo pass by reference</button>
    </div>
</template>

<script>
import {eventBus} from '../main';

export default{
    data(){
         return {
                category: {
                    id: 1,
                    name: 'Adventure'
                },
                test: 'Adventure'
            }
    },
    props: {
            authorName: String,
            bookPrice: Number
        },
    methods:{
        discountPrice(){
            this.bookPrice = 5;
            eventBus.$emit('eventDiscountPrice', this.bookPrice);
        },  
        objectDemo() {
                this.category.name = 'Horror';
        }
    },
    created() {
        eventBus.$on('eventUpdateCategory', (data) => {
            console.log(data);
            this.category = data;
        })
    }
}
</script>

<style>
.innerBottom {
    background-color: lightgreen;
}
</style>
