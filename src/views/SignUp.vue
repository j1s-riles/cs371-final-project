<template>
    <div id="top">
        <h1>Sign Up</h1>
        <div id="loginForm">
            <label for="emailField">Email:</label>
            <br>
            <input type="email" id="emailField" v-model="email" placeholder="Email">
            <br>
            <label for="nameField">Name:</label>
            <br>
            <input type="text" id="nameField" v-model="name" placeholder="Name">
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
            name: '',
            password: '',
            passConfirm: ''
        }
    },
    methods:{
        signUp(){
            let self = this;

            //Ensure fields are not blank
            if(this.email === "" || this.password === "" || this.passConfirm === "" || this.name === ""){
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
                //success
                function(user){
                    
                    //set up database
                    var database = firebase.database();
                    
                    //console.log(user.user.uid);

                    database.ref('users/' + user.user.uid).set({
                        email: self.email,
                        name: self.name,
                        reservedMovies: []
                    });

                    //User is automatically logged in on success
                    self.$router.push({
                        name: 'home'
                    });
                })
            .catch(
                //an error occurred
                function(err){
                    alert("Oops. " + err.message);
                }
            )
        }
    }
}
</script>


