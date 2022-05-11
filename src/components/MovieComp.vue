<template>
    <div class="container">
        <div class="row">
            <h2 class="text-uppercase text-center text-danger mt-5" v-if="films.length >0">Film :</h2>
            <div class="col-4 mb-5 d-flex justify-content-center" v-for="(element, index) in films" :key="index">
                <div class="flip">
                    <div class="flip-inner">
                        <div class="front-card">
                            <img :src="`https://image.tmdb.org/t/p/w342/${element.poster_path}`" :alt="`poster of ${element.original_title}`" class="w-100">
                        </div>
                        <div class="card-back bg-dark p-3" @mouseover="ActorGet(element.id)">
                             <img :src="`https://image.tmdb.org/t/p/w342/${element.backdrop_path}`" :alt="`poster of ${element.original_title}`" class="w-100">
                            <div><strong>Titolo:</strong> {{element.title}}</div>
                            <p><strong>Titolo Originale:</strong> {{element.original_title}}</p>
                            <p><strong>Genere: </strong>{{element.genre_ids}}</p>
                            <div>
                                <span class="me-3">Voto: </span>
                                <span class="fs-2" :class="StarsVote(element) > 1? 'text-warning' : ''">&#9733;</span>
                                <span class="fs-2" :class="StarsVote(element) > 2? 'text-warning' : ''">&#9733;</span>
                                <span class="fs-2" :class="StarsVote(element) > 3? 'text-warning' : ''">&#9733;</span>
                                <span class="fs-2" :class="StarsVote(element) > 4? 'text-warning' : ''">&#9733;</span>
                                <span class="fs-2" :class="StarsVote(element) > 5? 'text-warning' : ''">&#9733;</span>
                            </div>
                            <br>
                            <p><strong>Overview:</strong> {{element.overview}}</p>
                            <div v-if="ActorArray.length>0">
                                <h3 class="text-uppercase">Attori: </h3>
                                <div class="text-start" v-for="(actor, index) in ActorArray" :key="index">
                                    <strong>Nome: </strong>
                                    <span class="ms-2">{{ActorArray[index].name}}</span>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center py-2 px-4">
                                <span><strong>Lingua:</strong></span>
                                <div class="flagCont">
                                    <img :src="MovieFlag(element)" alt="" class="w-100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'MovieComp',
    props: {
        films: Array,
        
    },
    data(){
        return{
            apiKey: 'b157e50a3e85cf6335dc9aa27f79bd76',
            ActorArray: [],
            GenerArray:[]
        }
    },
    methods:{
        MovieFlag(object){
            if(object.original_language == 'en'){
                return 'https://www.bandiere-mondo.it/data/flags/w1160/um.webp'
            }else if(object.original_language == 'fr'){
                return 'https://www.bandiere-mondo.it/data/flags/w1160/fr.png'
            }else if(object.original_language == 'es'){
                return 'https://www.bandiere-mondo.it/data/flags/w1160/es.webp'
            }else if(object.original_language == 'jp'){
                return 'https://www.bandiere-mondo.it/data/flags/w1160/jp.webp'
            }else if(object.original_language == 'it'){
                return 'https://www.bandiere-mondo.it/data/flags/w1160/it.png'
            } else{
                return 'https://www.greenlink.it/wp-content/themes/consultix/images/no-image-found-360x260.png'
            }
            
        },
        StarsVote(object){
            return Math.ceil(object.vote_average / 2)
        },
        ActorGet(movie){
            axios.get(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${this.apiKey}&language=it-IT`).then((response)=>{
                this.ActorArray=response.data.cast.slice(0,5)
            })
        },
        GenerGet(){
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=it-IT`).then((response)=>{
                this.GenerArray=response.data.result
            })
        }
    }
}
</script>

<style lang="scss" scoped>


.flagCont{
    width: 50px;
    height: 50px;
}

.flip{
    background-color: transparent;
    width: 342px;
    height: 512px;
    perspective: 1000px; //effetto 3d
}

.flip-inner{
    position: relative;
    text-align: center;
    transform-style: preserve-3d;
    transition: 0.5s;
    width: 100%;
    height: 100%;
}

.flip:hover .flip-inner{
    transform: rotateY(180deg);
}

.front-card,
.card-back{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow-y: auto;
    overflow-x:hidden;
}

.front-card{
    background-color:white;
    color: white;
    border: 3px solid white;
}

.card-back{
    color: white;
    transform: rotateY(180deg);
}

// .hidden{
//     display: none;
// }
</style>