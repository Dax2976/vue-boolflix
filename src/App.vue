<template>
  <div id="app">
    <div class="d-flex justify-content-between bg-dark p-3">
      <h1 class="text-uppercase text-danger">Boolflix</h1>
      <div class="text-align-center align-items-end d-flex">
        <input type="text" class="input-group-text" placeholder="Search a FIlm/TV Series">
        <button class="btn bg-light btnSearch">Search</button>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
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

.btnSearch{
  margin-left: 10px ;
}
</style>
