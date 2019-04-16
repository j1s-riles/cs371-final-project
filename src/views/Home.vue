<template>
  <div class="home">
    <header>
      <h2>Welcome, {{userName}}</h2>
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <router-link to="/profile" tag="button">Profile</router-link>
      <button v-on:click="logout()">Logout</button>
    </header>
    
    <CardList v-bind:movies="{moviesFromFirebase}"></CardList>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'
import CardList from '@/components/CardList.vue'
import firebase from 'firebase'

export default {
  name: 'home',
  components: {
    CardList
  },
  data(){
    return {
      userName: "",
      movieAPIResults: [],
      moviesFromFirebase: []
    }
  },
  methods:{
    logout(){
      let self = this;

      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        self.$router.push({
          name:'SignIn'
        })
      }).catch(function(error) {
        // An error happened.
        alert("Uh oh! " + error)
      });

    }
  },
  created(){
    var database = firebase.database();
    var user = firebase.auth().currentUser;
    let self = this

    database.ref('/users/' + user.uid).once('value').then(function(snapshot){
      self.userName = snapshot.val().name;
    });


    //get list of current movies from API
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=1cca25cee708bb87ee10989f931b5f89&region=US&primary_release_date.gte=2019-04-01&primary_release_date.lte=2019-04-30&language=en&sort_by=popularity.desc');
  
    request.onload = function() {

      //access JSON data here
      var data = JSON.parse(this.response);

      data.results.forEach(movie => {
        //put each movie into an array we can use later
        self.movieAPIResults.push(movie)
      });
    }

    request.send();

    //Checks if movie already in /movies in firebase, if not, adds it
    database.ref('/movies/').once('value').then(function(snapshot){
          self.movieAPIResults.forEach(movie =>{
            if(!snapshot.val()[movie.id]){
              database.ref("/movies/" + movie.id).set({
                title: movie.title,
                id: movie.id,
                posterPath: movie.poster_path,
                overview: movie.overview,
                seats: 50
              });
            }
          });
    });

    //Grabs all movie data from database and populates page
    database.ref('/movies/').once('value').then(function(snapshot){
      snapshot.forEach(movie => {
        //console.log(movie.val());
        self.moviesFromFirebase.push(movie.val());
      });

      //console.log(self.moviesFromFirebase);
    });

    //Set listener so that when data changes, page updates
    database.ref('/movies/').on("child_changed",function(snapshot){
      console.log(snapshot.val());

      self.moviesFromFirebase.forEach(movie => {
        if(movie.id == snapshot.val().id){
          movie.seats = snapshot.val().seats;
        }
      });

      console.log(self.moviesFromFirebase);
    });

    //console.log("moviesFromFirebase: " + self.moviesFromFirebase);
  }

}
</script>