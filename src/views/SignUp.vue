<template>
    <div id="top">
        <h1>Sign Up</h1>
        <div id="loginForm">
            <label for="usernameField">Email:</label>
            <br>
            <input type="email" id="usernameField">
            <br>
            <label for="passField">Password:</label>
            <br>
            <input type="password" id="passField">
            <br>
            <label for="passField">Confirm:</label>
            <br>
            <input type="password" id="passConfirm">
            <br>
            <button v-on:click="signUp()">Sign Up</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data(){
        return{}
    },
    methods:{
        signUp(){
            

            //Go back to sign in page when complete
            this.$router.push({
                name: 'SignIn'
            })
        }
    }
}
</script>


