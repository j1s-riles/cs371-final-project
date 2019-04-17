<template>
    <div class="movies">

        <template v-for="(movie, pos) in movies.moviesFromFirebase">
            <MovieCard v-on:click.native="cardClicked(movie)" v-bind:id="movie.id" v-bind:key="movie.id" v-bind:detail="movie"></MovieCard>
        </template>
    </div>
</template>

<script>

import MovieCard from '@/components/MovieCard.vue'
import firebase from 'firebase'

export default {
    name: 'CardList',
    components:{
        MovieCard
    },
    props:{
        movies: {
            type: Object
        }
    },
    data(){
        return{
            moviesReserved: []
        }
    },
    methods:{
        cardClicked(movie){
            let self = this;

            var database = firebase.database();
            var user = firebase.auth().currentUser;

            database.ref('/users/' + user.uid).once('value').then(function(snapshot){
                if(!snapshot.val().reservedMovies){
                   // database.ref('/users/'+user.uid+).update({'reservedMovies':[movie.id]});
                    database.ref('/users/' + user.uid + '/reservedMovies').push(movie.id);

                    //subtract a seat from the movies table
                    database.ref('/movies/' + movie.id + '/seats').set(movie.seats - 1);
                    console.log("movie added");
                    alert("You have reserved a seat for " + movie.title);
                }else{

                    for(let entry in snapshot.val().reservedMovies){
                        if(snapshot.val().reservedMovies[entry] === movie.id){
                            alert("You have already reserved a spot for this movie!");
                            return;
                        }
                    }

                    database.ref('/users/' + user.uid + '/reservedMovies').push(movie.id);
                    
                    //subtract a seat from the movies table
                    database.ref('/movies/' + movie.id + '/seats').set(movie.seats - 1);
                    console.log("movie added");
                    alert("You have reserved a seat for " + movie.title);

                }
                // }else if(database.ref('/users/'  + user.uid).child('reservedMovies').orderByChild()){
                //     alert("You have already reserved a spot for this movie!");
                // }else{
                //     database.ref('/users/' + user.uid).update({'reservedMovies': [movie.id]});
                // }
            });


        }
    },
    mounted(){
        //console.log(this.movies);
    }
}
</script>

<style>
.movies {
    display:grid;
    grid-template-columns: repeat(4,1fr);
}
button {
  background-color: #008CBA; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}
</style>

