<template>
  <MovieComp :films='movies' />
</template>

<script>
import MovieComp from '@/components/MovieComp.vue'
export default {
    name:'MainComp',
    components:{
        MovieComp
    },
    props:{
        movies: Array
    }
}
</script>

<style lang="scss" scoped>

</style>