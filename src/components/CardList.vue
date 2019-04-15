<template>
    <div class="movies">
        <template v-for="(movie, pos) in movies.movieAPIResults">
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
        //console.log(this.movies);
    }
}
</script>

<style>
.movies {
    display:grid;
    grid-template-columns: repeat(4,1fr);
}
</style>

