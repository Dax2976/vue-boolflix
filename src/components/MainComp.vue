<template>
    <div>
        <MovieComp :films='movies' />
        <TvSeriesComp :Tvseries='series'/>
    </div>
</template>

<script>
import MovieComp from '@/components/MovieComp.vue'
import TvSeriesComp from '@/components/TvSeriesComp.vue'
export default {
    name:'MainComp',
    components:{
        MovieComp,
        TvSeriesComp
    },
    props:{
        movies: Array,
        series: Array
    }
}
</script>

<style lang="scss" scoped>

</style>