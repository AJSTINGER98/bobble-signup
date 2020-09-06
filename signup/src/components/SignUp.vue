<template>
    <div class="container">
      <div v-if = "loggedIn" class="home-page">
        <div>
          <h2>Welcome {{data.firstName }} {{data.lastName}}!</h2>
          <h3>You have Succesfully Signed Up</h3>
          <p>Your id : {{ data.response.id}} </p>
          <p>Token : {{ data.response.token}} </p>
      </div>
      </div>
      <div v-else class="signup-block">
        <div class="header">
          <p style="margin-top: 10px;margin-bottom: 50px;font-weight: 600;font-size: 10px;">SIGN UP</p>
          <p style="font-weight:400px; margin:0;font-size: 25px">Create your account</p>
          <p style="font-size:12px">Lorem ipsum dolor sit amet consectetur
          </p>
          <div class="buttons">
            <div class="social-link">
              <img class= "logo-image" alt="Vue logo" src="https://icons-for-free.com/iconfiles/png/512/color+facebook+icon-1320168272811213233.png">
              <button class="">Sign up with Facebook</button>
            </div>
            <div class="social-link">
              <img class= "logo-image" alt="Vue logo" src="https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png">
              <button class="">Sign up with Google</button>
            </div>
          </div>
        </div>
        <div class="separator">
          <span>or</span>
        </div>
      <form class="p-0 w-100 ">
        <div class="body">
            <div class="input-group">
                 <input type="text" name="f-name" placeholder="First Name" v-model="data.firstName" required>
            </div>
            <div class="input-group">
                 <input type="text" name="l-name" placeholder="Last Name" v-model="data.lastName" required>
            </div>
            <div class="input-group">
                <input type="email" name="email" placeholder="Email" v-model="data.email" required>
            </div>

            <div class="input-group">
                <input type="password" name="password" placeholder="Password" v-model="data.password" required>
            </div>
        </div>
        <div class="footer">
          <div class="input-group">
              <p style="font-size: 10px; font-weight:400">By clicking SignUp, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a></p>
              <button class="btn w-100 py-2" @click.prevent="Submit()">SIGN UP</button>
          </div>
        </div>
      </form>
      </div>
    </div>
</template>

<script>
export default {

  data(){
    return{
      loggedIn : false,
      data:{
        firstName:'',
        lastName:'',
        email:'',
        password:''
      }
    }
  },

  name: 'SignUp',
  methods:{
    Submit(){
      if(this.data.password != '' && this.data.email != '' && this.data.firstName != '' && this.data.lastName != ''){
        console.log(this.data);
        this.$http.post(`${this.$api}api/register`, {
            email: this.data.email,
            password: this.data.password,       
          },
          )
          .then((response)=> {
            console.log(response);
            this.data.response = response.data;
            this.loggedIn = true;
          })
          .catch((error)=> {
            console.log(error);
            alert('Please use the email id provided in https://reqres.in/api/register');
          })
      }
      else{
        alert('Please fill up all the details');
      }

      }
  },  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container  {
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
  }

  .signup-block{
    position: relative;
    max-width: 500px;
    width: 50vw;
    min-height: 40vh;
    padding: 0;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2px 1px #cccccc;
    padding: 20px 50px;

  }
  .header{
    margin-top: 0;
    text-align: center;

  }

  .buttons{
    display: flex;
    justify-content: space-around;
  }
  .social-link button{
    background: none;
    border: none;
    cursor: pointer;
  }
  .social-link{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: none;
    border: none;
    min-width: 50px;
    /* max-height: 50px; */
    box-shadow: 0px 1px 1px 1px #ccc;
    padding: 5px 30px;
    font-size: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .logo-image{
    max-height: 30px;
    width: auto;
  }
  .separator {
    margin: 20px 0px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .separator::before, .separator::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #ccc;
      font-weight: 200;
  }
  .separator::before {
      margin-right: 1em;
  }
  .separator::after {
      margin-left: 1em;
  }
  .body{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .body .input-group{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px 0px;
  }
  .input-group input{
    width: 100%;
    padding: 10px;
  }
  .footer{
    display: flex;
    justify-content: center;
  }
  .footer .input-group{
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .footer .input-group button{
    background-color: rgb(24, 154, 230)!important;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
  }
  .footer .input-group p{
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .footer .input-group a{
    margin-top: 15px;
    margin-bottom: 20px;
    text-decoration: none;
    color: rgb(24, 154, 230);
  }
  .input-group button{
    cursor: pointer;
  }
  .image-div{
    max-height: 30vh;
    width: auto;
  }
  @media screen and (max-width: 1100px) {
    .buttons{
      justify-content: space-around;
    }
    .social-link {
      margin: 10px;
    }
  }

  @media screen and (max-width: 800px) {
    .buttons{
      flex-direction: column;
    }
    .social-link {
      margin: 10px;
      min-width: 30px;
      padding: 10px;
    }
  }
</style>
