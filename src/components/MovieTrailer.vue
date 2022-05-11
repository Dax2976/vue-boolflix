<template>
    <div class="container-fluid Movie">
        <h2 class="text-uppercase text-white">scelto per te</h2>
        <div class="row">
            <div class="col-12 align_center movie_trailer">
                <iframe width="100%" height="515" src="https://www.youtube.com/embed/265PpN8G07o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="text_movie d-flex text-white">
                    <div class="w-70">
                        <h2>Venom</h2>
                        <p>
                            Mentre esplora lo spazio per cercare nuovi mondi abitabili, un'astronave appartenente alla società di bioingegneria 
                            denominata Life Foundation scopre quattro forme 
                            di vita aliene e le porta sulla Terra. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'MovieTrailer',
    data(){
        return{
            hover:false
        }
    }
}
</script>


<style lang="scss" scoped>
    .movie_trailer{
        position: relative;
        .text_movie{
            transition: 1.3s;
            opacity: 0;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            width: 55%;
            position: absolute;
            bottom: 6px;
            height: 400px;
            padding: 20px;
            background-image: linear-gradient(rgba(255,0,0,0),rgb(0,0,0));
        }
    }

    .text_movie:hover{
        opacity: 1;
    }

    .align_center{
        text-align: center;
    }
</style>