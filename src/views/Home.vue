<template>
  <div >
    <div class="card-panel homebg margin">
    <h1 class="bold">
        <span class="deep-purple-text">F A R </span>
        <span class="light-blue-text"> M A X</span>
    </h1>
    <router-link to="/seasonal" class="marginbtn btn-large">SEASONAL PLANS</router-link>
    <router-link to="/demands" class="marginbtn btn-large">DEMANDS</router-link>
    <router-link to="/customers" class="marginbtn btn-large">CUSTOMERS</router-link>
    <router-link to="/map" class="marginbtn btn-large">INSECTS IN THE RANGE</router-link>
    <!-- <div class="row">
      <div class="col s12 m6 l3">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">SEASONAL PLANS</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">See more</a>
          </div>
        </div>
      </div>
    
        <div class="col s12 m6 l3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">DEMANDS</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">See more</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6 l3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">CUSTOMERS</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">See more</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6 l3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">WEATHER</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">See more</a>
            </div>
          </div>
        </div>
    </div> -->
    </div>
    <img width="100%" src="../assets/image.png" alt="Image">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style >
.margin{
  margin: 0 !important;
}
.bold{
  font-weight: bold;
}
.marginbtn{
  margin: 20px 30px;
}
.homebg{
  background-color: #F59394 !important;
}
</style>
