<template>
  <div class="container">
      <div class="row">
          <h2 class="text-uppercase text-center text-white" v-if="Tvseries.length >0 ">Tv Series: </h2>
          <div class="col-4 mb-5 d-flex justofy-content-center" v-for="(element, index) in Tvseries" :key="index">
               <div class="flip">
                    <div class="flip-inner">
                        <div class="front-card">
                            <img :src="`https://image.tmdb.org/t/p/w342/${element.poster_path}`" :alt="`poster of ${element.original_title}`" class="w-100">
                        </div>
                        <div class="card-back bg-dark p-3">
                            <div><strong>Titolo:</strong> {{element.name}}</div>
                            <p><strong>Titolo Originale:</strong> {{element.orginal_name}}</p>
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
                            <div class="d-flex justify-content-between align-items-center py-2 px-4">
                                <span><strong>Lingua:</strong></span>
                                <div class="flagCont">
                                    <img :src="TVflag(element)" alt="" class="w-100">
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
export default {
    name:'TvSeriesComp',
    props:{
        Tvseries: Array
    },
    methods:{
         TVflag(object){
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


</style>