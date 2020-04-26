<template>
    <div>
        <div class="row">
            <div class="teal lighten-2 col s12 m3">
                <p>INDEX AND COST ESTIMATION</p>
                <hr>
                
                <table>
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>Q.D</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>

            <div class="deep-orange lighten-4 col s12 m9 ">
                <h2 class="green-text text-darken-2">DEMANDS</h2>


            </div>
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
        color: #9ccc65;
    }
.bold{
      font-weight: bold;
}
</style>