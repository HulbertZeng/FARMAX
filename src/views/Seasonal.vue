<template>
    <div>
        <div class="row">
            <div class="teal lighten-2 col s12 m3">
                <h2 class="white-text">WEATHER</h2>
                <ul>
                    <li v-for="day in days" :key="day">DAY- {{day}}</li>
                </ul>
                <hr>
            </div>

            <div class="deep-orange lighten-4 col s12 m9 ">
                <h2 class="green-text text-darken-2">SEASONAL PRODUCTS</h2>
            </div>
        </div>
    </div>
</template>


<script>
export default {  
    data(){
        return {
            days:[1,2,3,4,5,6,7,8,9,10]
        }
    }
    
}
</script>

<style >
    hr{
        border: 2px;
    }
</style>