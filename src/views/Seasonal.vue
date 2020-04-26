<template>
    <div>
        <div class="row">
            <div class="teal lighten-2 col s12 m3">
                <h3 class="white-text bold">WEATHER</h3>
                <hr>
                <p>Month: {{months}}</p>
                <ul>
                    <li v-for="day in days" :key="day">DAY- {{day}}</li>
                </ul>
                
            </div>

            <div class="deep-orange lighten-4 col s12 m9 ">
                <h2 class="green-text text-darken-2">SEASONAL PRODUCTS</h2>


                <div>
                    <div v-for="product in products" :key="product.id" class="col s12 m6 l3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                            <span class="card-title">{{product.title}}</span>
                            <p>{{product.description}}</p>
                            </div>
                            <div class="card-action">
                            <a href="#">See more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {apiweather} from '../utils/apiweather'
import GoogleMapsApiLoader from "google-maps-api-loader";
import Axios from 'axios'
export default {  
    data(){
        return {
            months: "April",
            days:[1,2,3,4,5],
            products:[
                {id:1,title:"PRODUCT",description:"Lorem LoremLoremLoremLorem"},
                {id:2,title:"PRODUCT",description:"Lorem LoremLoremLoremLorem"},
                {id:3,title:"PRODUCT",description:"Lorem LoremLoremLoremLorem"},
                {id:4,title:"PRODUCT",description:"Lorem LoremLoremLoremLorem"}
            ],
            userdata:{
                lati: 0,
                long:0
            },
            api:"api.openweathermap.org/data/2.5/forecast"
        }
    },
    created(){
        //console.log(apiweather,'api')
        if (navigator.geolocation) { //check if geolocation is available
                navigator.geolocation.getCurrentPosition(position=>{
                this.userdata.lati=position.coords.latitude
                this.userdata.long=position.coords.longitude
                //    console.log(this.userdata);
                });   
            }
    },
    mounted(){
        setTimeout(()=>{
            this.callApiWeather(this.userdata.lati,this.userdata.long)
        },200)
        
    },
    methods:{
        async callApiWeather(lati,long){
            let api=this.api
            let request=api+`?lat=${lati}&lon=${long}&appid =${apiweather}`
             console.log(request)
        let resp=await Axios.get(request)
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
        color: #9ccc65;
    }
.bold{
      font-weight: bold;
}
</style>