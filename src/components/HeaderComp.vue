<template>
   <div class="d-flex justify-content-between bg-dark p-3">
      <h1 class="text-uppercase text-danger">Boolflix</h1>
      <div class="text-align-center align-items-end d-flex">
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
            InpuText: ''
        }
    }
}
</script>

<style lang='scss' scoped>
.btnSearch{
  margin-left: 10px ;
}
</style>