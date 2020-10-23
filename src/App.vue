<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <div class="col-3">
          <InsertDay />
        </div>
        <div class="col">
          <Display />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InsertDay from "./components/InsertDay";
import Display from './components/Display'
export default {
  components: {
    InsertDay,
    Display
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
