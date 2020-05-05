<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        </li>  
      </ul>
    </nav>
    <div class="mt-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
  @import'~bootstrap/dist/css/bootstrap.css';
</style>

<style>
  .gap {
    margin-top: 50px;
  }
</style>

<script>

export default {
  name: 'app'
}
</script>