<template>
    <div id="top">
        <h1>Login Page</h1>
        <div id="loginForm">
            <label for="usernameField">Username:</label>
            <br>
            <input type="email" id="usernameField">
            <br>
            <label for="passField">Password:</label>
            <br>
            <input type="password" id="passField">
            <br>
            <button v-on:click="authenticate">Login</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'signIn',
    data(){
        return{}
    }
}

</script>

