<template>
    <div id="top">
        <h1>Sign In</h1>
        <div id="loginForm">
            <label for="usernameField">Email:</label>
            <br>
            <input type="email" id="usernameField">
            <br>
            <label for="passField">Password:</label>
            <br>
            <input type="password" id="passField">
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
        return{}
    },
    methods:{
        authenticate(){
            
            //TODO: authenticate

            //move to next home page
            this.$router.push({
                name: 'Home'
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

