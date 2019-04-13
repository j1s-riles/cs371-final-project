<template>
    <div class="card">

        <div class="container">
            <table>
                <tr>
                    <td>
                        <img id="moviePoster" src="../assets/placeHolder.jpg" alt="Emperor's New Groove">
                    </td>  
                    <td id="description">
                        <h4>Overview:</h4>
                        Kuzco is a self-centered emperor who summons Pacha from a village and to tell him that his home 
                            will be destroyed to make room for Kuzco's new summer home. 
                            Kuzco's advisor, Yzma, tries to poison Kuzco and accidentally 
                            turns him into a llama, who accidentally ends up in Pacha's 
                            village. Pacha offers to help Kuzco if he doesn't destroy 
                            his house, and so they form an unlikely partnership.
                        
                    </td>
                </tr>
            </table>
        </div>
        
        <p><strong>Seats: 50/50</strong></p>

        <h4>The Emperor's New Groove</h4>
    </div>
</template>

<script>
export default {
    name: 'MovieCard'
}
</script>

<style>
.card {
  /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 30%;
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


