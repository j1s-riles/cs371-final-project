<template>
    <div class="movies">

        <template v-for="(movie, pos) in movies.moviesFromFirebase">
            <MovieCard v-bind:key="pos" v-bind:detail="movie"></MovieCard>
        </template>
    </div>
</template>

<script>

import MovieCard from '@/components/MovieCard.vue'

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
    mounted(){
        console.log(this.movies);
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

