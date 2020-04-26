<template>
  <div id="app">
    <div id="">
        <nav>
        <div class="nav-wrapper container">
          <div class="left"><router-link to="/" class=" brand-logo">FARMAX</router-link></div>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/">Home</router-link> </li>
            <li><router-link to="/about">About Project</router-link></li>
            <li><router-link to="/map">Insect prediction</router-link></li>
          </ul>
        </div>
      </nav>
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
