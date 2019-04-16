<template>
    <div class="card">

        <div class="container">
            <h4>{{detail.title}}</h4>
                <img id="moviePoster" :src="`http://image.tmdb.org/t/p/w185_and_h278_bestv2/${detail.posterPath}`" alt="Movie Poster">
        </div>
        <div id="description">
            <h4>Overview:</h4>
                {{detail.overview}}         
        </div>
        <p><strong>Seats: {{detail.seats}}/50</strong></p>

    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props:{
        detail:{}
    }
}
</script>

<style>
.card {
  /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
    padding: 2px 16px;
}

#moviePoster {
    display: inline-flex;
    vertical-align: middle
}

#description {
    text-align: left;
}
</style>


