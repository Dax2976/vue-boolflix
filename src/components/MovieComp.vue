<template>
    <div class="container">
        <div class="row">
            <h2 class="text-uppercase text-center">Film : </h2>
            <div class="col-3" v-for="(element, index) in films" :key="index">
                <div class="">Titolo: {{element.title}}</div>
                <div class="">Titolo Originale: {{element.original_title}}</div>
                <div class="">Voto: {{element.vote_average}}</div>
                <div class="">Overview: {{element.overview}}</div>
                <div class="d-flex justify-content-between">
                    <span class="">Lingua:</span>
                    <div class="Flag">
                        <img :src="MovieFlag(element)" alt="" class="flag">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'MovieComp',
    props: {
        films: Array
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
            
        }
    }
}
</script>

<style lang="scss" scoped>
.flag{
    width: 20%;
}
</style>