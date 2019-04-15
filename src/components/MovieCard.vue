<template>
    <div class="card">

        <div class="container">
            <table>
                <tr>
                    <td>
                        <img id="moviePoster" :src="`http://image.tmdb.org/t/p/w185_and_h278_bestv2/${detail.poster_path}`" alt="Movie Poster">
                    </td>  
                    <td id="description">
                        <h4>Overview:</h4>
                            {{detail.overview}}
                        
                    </td>
                </tr>
            </table>
        </div>
        
        <p><strong>Seats: 50/50</strong></p>

        <h4>{{detail.title}}</h4>
    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props:{
        detail:{}
    },
    mounted(){
        console.log(this.detail);
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


