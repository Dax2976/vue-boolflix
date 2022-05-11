<template>
   <div class="d-flex justify-content-between p-3 align-items-center Netflixbar">
      <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/220509/a4140465225844d06b4c34e9e5e4faf6.png" alt="netflix-font" border="0"></a>
      <div class="d-flex align-items-start">
        <a href="#">Home</a>
        <a href="#">Film</a>
        <a href="#">Serie TV</a>
        <a href="#">Nuovi e Popolari</a>
        <a href="#">La Mia Lista</a>
      </div>
      <div class="align-items-end align-items-center d-flex">
        <input type="text" class="input-group-text inpUt" placeholder="Search FIlm / TVSeries" @keyup.enter="$emit('SearchUser',InpuText)" v-model="InpuText">
        <button class="btn btnSearch"><font-awesome-icon icon="fa-solid fa-magnifying-glass fa-5x"/></button>
        <span class="p-2"><font-awesome-icon icon="fa-solid fa-bell fa-5x" id="Bell"/></span>
        <a href="#">Bambini</a>
        <img src="https://occ-0-2637-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeNs0Y10aoAgJ48Vej3YQiWbOgMCkTEgNd33LRKOgL6CvLgRC95Mu4cMDLFLyFLsuWKfM2grv6Or3qTpPOU-FwF3B9bKSH0.png?r=fcc" alt="">
        <button class="btn btnSearch"><font-awesome-icon icon="fa-solid fa-arrow-down" class="text-white mx-1"/></button>
      </div>
    </div>
</template>

<script>
export default {
    name:'HeaderComp',
    data(){
        return{
            InpuText:''
        }
    }
}
</script>

<style lang='scss' scoped>
.btnSearch{
  margin-left: 5px;
  color: white;
  
}

.btnSearch:hover{
  color: white;
}

a:hover{
  transition: 0.5s;
  color: rgb(171, 170, 170);
}

a{
  color: white;
  padding: 1rem;
  text-decoration: none;
}

.Netflixbar{
  background-color: #141414;
}

.inpUt{
  background-color: #141414;
  color: white;
  border: none;
}

#Bell{
  color: white;
}


</style>