<template>
  <div class="home">
    <header>
      <h2>Welcome, {{userName}}</h2>
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <button>Profile</button>
      <button v-on:click="logout()">Logout</button>
    </header>
    
    <CardList></CardList>
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
      movieAPIResults: []
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


    //TODO: get list of current movies from API
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=1cca25cee708bb87ee10989f931b5f89&primary_release_date.gte=2019-04-01&primary_release_date.lte=2019-04-30&language=en&sort_by=popularity.desc');
  
    request.onload = function() {

      //access JSON data here
      var data = JSON.parse(this.response);

      data.results.forEach(movie => {
        self.movieAPIResults.push(movie)
      });
    }

    request.send();

    console.log(self.movieAPIResults);
  }

}
</script>