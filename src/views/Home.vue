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
      userName: ""
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
      console.log(snapshot.val().name);
      self.userName = snapshot.val().name;
    });


  }

}
</script>