<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MovieCard></MovieCard>
    <MovieCard></MovieCard>
    <MovieCard></MovieCard>
    <MovieCard></MovieCard>
    <MovieCard></MovieCard>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'home',
  components: {
    MovieCard
  }
}
</script>
