<template>
    <div id="top">
        <h1>Sign Up</h1>
        <div id="loginForm">
            <label for="usernameField">Email:</label>
            <br>
            <input type="email" id="usernameField" v-model="email" placeholder="Email">
            <br>
            <label for="passField">Password:</label>
            <br>
            <input type="password" v-model="password" id="passField" placeholder="Password">
            <br>
            <label for="passField">Confirm:</label>
            <br>
            <input type="password" v-model="passConfirm" id="passConfirm" placeholder="Confirm">
            <br>
            <button v-on:click="signUp()">Sign Up</button>
        </div>

    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'SignUp',
    data(){
        return{
            email: '',
            password: '',
            passConfirm: ''
        }
    },
    methods:{
        signUp(){
            let self = this;

            //Ensure fields are not blank
            if(this.email === "" || this.password === "" || this.passConfirm === ""){
                alert("Please fill in all fields! 😬");
                return;
            }

            //Ensure passwords match
            if(this.password !== this.passConfirm){
                alert("Passwords do not match ☹️");
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(
                function(user){
                    //alert("Account has been created! 😁");
                    
                    //User is automatically logged in on success
                    self.$router.push({
                        name: 'home'
                    });
                })
            .catch(
                function(err){
                    alert("Oops. " + err.message);
                }
            )
        }
    }
}
</script>


