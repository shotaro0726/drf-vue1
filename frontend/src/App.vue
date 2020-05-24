<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="routing-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
export default {
  components: {
    ToolBar
  }
}
</script>

<style>
body {
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: underline;
}
a:hover {
  color: "42b883";
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}
.routing-fade-enter-active, .routing-fadeleave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to {
  opacity: 0;
}
</style>