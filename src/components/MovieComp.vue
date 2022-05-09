<template>
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="(element, index) in films" :key="index">
                <div class="">Titolo: {{element.title}}</div>
                <div class="">Titolo Originale: {{element.original_title}}</div>
                <div class="">Voto: {{element.vote_average}}</div>
                <div class="">Overview: {{element.overview}}</div>
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
}
</script>

<style lang="scss" scoped>

</style>