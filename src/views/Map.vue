<template>
    <div class="row  light-blue accent-2">
        <div class="col s3">
            <p class="fonts red-text">ALERT</p>
            <p class="fonts">DESCRIPTION</p>
        </div>
        <div class="col s6">
            <h2>INSECTS IN THE RANGE</h2>
            <hr>
        </div>
        <div class="col s3">
            <p class="fonts">PREVENTIONS</p>
        </div>
        
    </div>
</template>


<script>
export default {  
    data(){
        return {
            months: "April",
            days:[1,2,3,4,5,6,7,8,9,10],
            products:[
                {id:1,title:"PRODUCT",description:"Lorem LoremLoremLoremLorem"},
                {id:2,title:"PRODUCT",description:"Lorem LoremLoremLoremLorem"},
                {id:3,title:"PRODUCT",description:"Lorem LoremLoremLoremLorem"},
                {id:4,title:"PRODUCT",description:"Lorem LoremLoremLoremLorem"}
            ]
        }
    }
    
}
</script>

<style >
body{
    line-height: 40px;
}
    hr{
        border: 2px solid;
        
    }
.bold{
      font-weight: bold;
}
.fonts{
    font-size: large;
}
</style>