<template>
    <div id="top">
        <h1>Sign In</h1>
        <div id="loginForm">
            <label for="usernameField">Email:</label>
            <br>
            <input type="email" v-model="email" id="usernameField">
            <br>
            <label for="passField">Password:</label>
            <br>
            <input type="password" v-model="password" id="passField">
            <br>
            <button v-on:click="authenticate()">Login</button>
            <button v-on:click="signUp()">Sign Up</button>
        </div>

    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'signIn',
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        authenticate(){
            //"this" has different reference in firebase function
            //so we need to create our own instance of it
            let self = this;
            
            //TODO: authenticate
            if(this.email === "" || this.password === ""){
                alert("Please fill in all fields! 😬");
            }

            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(function(user){
                    //move to next home page
                    self.$router.push({
                        name: 'home'
                    });
                })
                .catch(function(err){
                    alert("Oops. " + err.message);
                });
            
        },

        signUp(){
            this.$router.push({
                name: 'SignUp'
            });
        }
    }
}

</script>

