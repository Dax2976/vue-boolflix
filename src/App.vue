<template>
  <div id="app">
    <HeaderComp @SearchUser='MySearch'/>
    <MovieTrailer/>
    <MainComp :movies='ArrayMovies' :series="TVseriesArray"/>

  </div>
</template>

<script>
import 'bootstrap'
import HeaderComp from '@/components/HeaderComp.vue'
import axios from 'axios'
import MainComp from '@/components/MainComp.vue'
import MovieTrailer from '@/components/MovieTrailer.vue'
export default {
  name: 'App',
  components: {
      HeaderComp,
      MainComp,
      MovieTrailer,
      
  },
  data(){
    return{ 
      TVseriesArray:[],
      ArrayMovies: [],
      apiKey: 'b157e50a3e85cf6335dc9aa27f79bd76',
      inputSearch: '',
      
    }
  },

  methods:{
    MySearch(text){
      this.inputSearch = text
      //console.log(this.inputSearch);
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=it-IT&query=${text}&page=1`).then((response)=>{
        this.ArrayMovies = response.data.results
        //console.log(this.ArrayMovies)
      })
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&language=it-IT&query=${text}&page=1`).then((response)=>{
        this.TVseriesArray = response.data.results
        console.log(this.TVseriesArray)
      })
    }
  }
}
</script>

<style lang="scss">
@import'@/assets/scss/style.scss';

body{
  background-color:#141414;
}
#abs{
    position: absolute;
    top: 10px;
    
}
</style>
