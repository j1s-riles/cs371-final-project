<template>
    <div class="profile">
        <h1>Profile</h1>
        <h2>Name: {{name}}</h2>
        <h2>Email: {{email}}</h2>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'profile',
    data(){
        return {
            name: "",
            email: "",
            tickets: []
        }
    },
    methods:{
        changeName(){

        }
    },
    created(){
        var database = firebase.database();
        var user = firebase.auth().currentUser;
        let self = this;

        database.ref('/users/' + user.uid).once('value').then(function(snapshot){
            self.name = snapshot.val().name;
            self.email = snapshot.val().email;
        });
    }
}
</script>