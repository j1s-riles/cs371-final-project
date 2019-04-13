<template>
  <div class="home">
    <header>
      <img alt="Vue logo" src="../assets/logo.png">
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
  }
}
</script>