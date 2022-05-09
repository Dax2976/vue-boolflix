<template>
   <div class="d-flex justify-content-between bg-dark p-3 align-items-center">
      <img src="https://fontmeme.com/temporary/a4140465225844d06b4c34e9e5e4faf6.png" alt="">
      <div class="align-items-end d-flex">
        <input type="text" class="input-group-text" placeholder="Search a FIlm/TV Series" @keyup.enter="$emit('SearchUser',InpuText)" v-model="InpuText">
        <button class="btn bg-light btnSearch">Search</button>
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
  margin-left: 10px ;
}
</style>