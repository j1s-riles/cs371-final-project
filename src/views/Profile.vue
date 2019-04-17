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
                <th>Cancel</th>
            </tr>
            <template v-for="(item,key,index) in reservations">
                <tr v-bind:key="key">
                    <td>{{reservationTitles[index]}}</td>
                    <td><button v-on:click="cancelReservation(key, item, index)">X</button></td>
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
            reservations: [],
            reservationTitles: [],
            reservationIDs: []
        }
    },
    methods:{
        changeEmail(){
            var user = firebase.auth().currentUser;
            let self = this;
            console.log(self.newEmail);
            user.updateEmail(self.newEmail).then(function(){
                self.email = self.newEmail;
                firebase.database().ref('users/' + user.uid + "/email").set(self.newEmail);
                alert("Update successful!");
            }).catch(function(error){
                alert(error);
            });
        },
        cancelReservation(key, movie, index){
            var database = firebase.database();
            var user = firebase.auth().currentUser;
            var self = this;
            database.ref('/users/' + user.uid).once('value').then(function(snapshot){
                database.ref('/users/' + user.uid + '/reservedMovies').child(key).remove();
                database.ref('/movies/' + movie + '/seats').transaction(function(currentSeats){
                    return currentSeats + 1;
                });
                self.reservationTitles.splice(index,1);
                console.log(index);
            });
            console.log(self.reservationTitles);
        }
    },
    created(){
        var database = firebase.database();
        var user = firebase.auth().currentUser;
        let self = this;

        database.ref('/users/' + user.uid).on('value', function(snapshot){
            self.name = snapshot.val().name;
            self.email = snapshot.val().email;
            self.reservations = snapshot.val().reservedMovies;
            self.reservationIDs = [];
            for(let id in snapshot.val().reservedMovies){
                self.reservationIDs.push(snapshot.val().reservedMovies[id]);
            }
            database.ref('/movies').once('value').then(function(snapshot){
                self.reservationIDs.forEach(id =>{
                    //console.log(snapshot.val()[id].title)
                    self.reservationTitles.push(snapshot.val()[id].title);
                    
                });
            });
        });
        // console.log(self.reservations);

        
        
    }
}
</script>