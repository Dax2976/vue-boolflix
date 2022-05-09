<template>
  <div id="app">
    <HeaderComp @SearchUser='MySearch'/>
    <MainComp :movies='ArrayMovies'/>

  </div>
</template>

<script>
import 'bootstrap'
import HeaderComp from '@/components/HeaderComp.vue'
import axios from 'axios'
import MainComp from '@/components/MainComp.vue'
export default {
  name: 'App',
  components: {
      HeaderComp,
      MainComp,
      
  },
  data(){
    return{
      ArrayMovies: [],
      apiKey: 'b157e50a3e85cf6335dc9aa27f79bd76',
      inputSearch: '',
      
    }
  },

  methods:{
    MySearch(text){
      this.inputSearch = text
      console.log(this.inputSearch);
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=it-IT&query=${text}&page=1`).then((response)=>{
        this.ArrayMovies = response.data.results
        //console.log(this.ArrayMovies)
      })
    }
  }
}
</script>

<style lang="scss">
@import'@/assets/scss/style.scss';
</style>
