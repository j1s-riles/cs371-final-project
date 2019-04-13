<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CardList></CardList>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MovieCard from '@/components/MovieCard.vue'
import CardList from '@/components/CardList.vue'

export default {
  name: 'home',
  components: {
    CardList
  }
}
</script>



