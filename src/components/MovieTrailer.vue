<template>
    <div class="container-fluid Movie">
        <div class="row">
            <div class="col-6 text-align-center">
                <br>
               <h2 class="text-white text-uppercase p-5">Venom</h2>
               <p class="text-white">
                   Mentre esplora lo spazio per cercare nuovi mondi abitabili, un'astronave appartenente alla società di bioingegneria 
                   denominata Life Foundation scopre quattro forme 
                   di vita aliene e le porta sulla Terra. Uno di questi fugge in transito, causando la caduta della nave in Malaysia, ma la Life Foundation recupera gli altri tre e li trasporta nel proprio centro di ricerca a San Francisco. Il capo della fondazione, Carlton Drake, diventa ossessionato dal legame dei simbionti con gli umani, per preparare l'umanità all'inevitabile collasso ecologico della Terra, e inizia a fare esperimenti illegali di fusione tra alieni ed umani su vagabondi, provocando numerosi morti (tra cui uno dei rimanenti simbionti), e attirando l'attenzione del giornalista investigativo Eddie Brock, che organizza un'intervista con Drake attraverso la sua ragazza Anne Weying, un avvocato affiliato alla Life Foundation. Disubbidendo alle istruzioni, Eddie affronta Drake con materiale confidenziale relativo agli esperimenti, che ha tratto dall'e-mail di Anne, portando sia al proprio licenziamento, sia a quello di Anne nonché alla fine della loro relazione sentimentale. 
               </p>
            </div>
            <div class="col-6 d-flex">
                <iframe width="760" height="515" src="https://www.youtube.com/embed/265PpN8G07o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    .trailer-video{
        position: relative;
        .text-trailer{
            transition: 2s;
            opacity: 0;
            align-items: flex-start;
            flex-direction: column;
            width: 50%;
            justify-content: center;
            position: absolute;
            bottom: 8px;
            height: 400px;
            padding: 20px;
        }
    }

    .text-trailer:hover{
        opacity: 1;
    }
    .Movie{
        margin-bottom: 50px;
    }
</style>