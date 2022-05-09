<template>
  <div id="app">
    <HeaderComp @SearchUser='MySearch()'/>
  </div>
</template>

<script>
import 'bootstrap'
import HeaderComp from '@/components/HeaderComp.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
      HeaderComp,
      
  },
  data(){
    return{
      ArrayMovies: [],
      apiKey: 'b157e50a3e85cf6335dc9aa27f79bd76',
      inputSearch: ''
    }
  },

  methods:{
    MySearch(text){
      this.inputSearch = text
      // console.log(this.inputSearch);
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${text}=1&include_adult=false`).then((response)=>{
        this.ArrayMovies = response.data.response
        console.log(this.ArrayMovies)
      })
    }
  }
}
</script>

<style lang="scss">
@import'@/assets/scss/style.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
