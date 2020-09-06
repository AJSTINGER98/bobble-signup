<template>
  <div id="app">
    <div class="container">
      <!-- NAVBAR -->
      <nav>
        <div class="nav-body">
            <img class= "nav-image" alt="Vue logo" src="https://i.ibb.co/kBTRwRC/logo.png">
        </div>
      </nav>
      <div class="main-container">
        <!-- THIS IS THE SIGN UP CONTAINER. SIGNUP COMPONENT IS BEING RENDERED AT THIS LOCATION.
              TO SEE THE ACTUAL CONTENT OF SIGNUP COMPONENT GO TO: /components/SignUp.vue
         -->
        <SignUp msg=""/>
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from './components/SignUp.vue'


export default {
  data(){
  },
  name: 'App',
  // importing SignUp.vue as a component to be rendered above in html
  components: {
    SignUp,
  },
}
</script>

<style>
  .main-container{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
  .nav-body{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    -moz-box-shadow:    0px 2px 6px 2px #ccc;
    -webkit-box-shadow: 0px 2px 6px 2px #ccc;
    box-shadow:         0px 2px 6px 2px #ccc;
  }
  .nav-image{
    height: 100%;
    width: auto;
  }

</style>
