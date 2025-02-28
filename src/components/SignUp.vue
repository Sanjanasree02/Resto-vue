<template>
    <div>
        <h1>Sign Up</h1>
        <form>
         <div class="reg">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" name="email" required>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" name="password" required>
        <button v-on:click="signUp">Sign Up</button>
    </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'SignUp',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async signUp(){
            // console.log("signup",this.email,this.password)
            let result = await axios.post('http://localhost:3000/user',{
                email: this.email,
                password: this.password
            });

            console.warn(result);
            if(result.status == 201){
                // this.$router.push('/login');
                // alert("User created successfully");
                localStorage.setItem('user-info',JSON.stringify(result.data));
                this.$router.push({name:'HomePage'});
            }
            else{
                alert("User already exists");
            }
        }
        }
    }
</script>

<style>
.reg {
  display: flex;
  flex-direction: column;
  width: 400px; /* Increased width for broader text areas */
   /* Increased height for more spacing */
  margin: 20px auto; /* Added top/bottom margin for spacing and auto for horizontal centering */
  padding: 20px; /* Increased padding for more spacing inside the form */
  border: 1px solid #ccc; /* Added a subtle border */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Added a subtle shadow */
  background-color: #f9f9f9; /* Light background color */
}

.reg input{
    width: 100%;
    padding: 10px;
    margin: 5px 0 15px 0;
    display: block;
    padding-left: 0%;
    padding-right: 0%;
    border: 1px solid #ccc;
}
.reg button {
  margin-top: 15px; /* Increased margin above the button */
  width: 100%;
  height: 50px; /* Increased height for a larger button */
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px; /* Rounded corners for the button */
  cursor: pointer;
  font-size: 18px; /* Increased font size for the button text */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}
</style>