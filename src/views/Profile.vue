<template>
    <div class="profile">
        <h1>Profile</h1>
        <h2>Name: {{name}}</h2>
        <h2>Email: {{email}}</h2>
        <input type="email" id="changeEmail" v-model="newEmail">
        <button v-on:click="changeEmail()">Change Email</button><br>
        <h2>Reservations:</h2>
        <table class="reservations">
            <tr>
                <th>Movie</th>
                <th>Time</th>
                <th>#</th>
                <th>Cancel</th>
            </tr>
            <template v-for="r in reservations">
                <tr>
                    <td>{{r.movie}}</td>
                    <td>{{r.time}}</td>
                    <td>{{r.numTickets}}</td>
                    <td><button v-on:click="cancelReservation(r)">X</button></td>
                </tr>
            </template>
        </table>
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
            newEmail: "",
            reservations: []
        }
    },
    methods:{
        changeEmail(){
            var user = firebase.auth().currentUser;
            let self = this;
            console.log(self.newEmail);
            user.updateEmail(self.newEmail).then(function(){
                self.email = self.newEmail;
                alert("Update successful!");
            }).catch(function(error){
                alert("Could not update email.");
                console.log(error);
            });
        },
        cancelReservation(r){

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