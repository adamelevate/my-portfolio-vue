<template>
    <v-app :class="{'mobile': $vuetify.breakpoint.smAndDown}">
          <router-view/>
          <footer/>
    </v-app>
</template>

<style lang="scss">
body{
  height: 100%;
}
#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("~@/assets/images/escheresque.png");
  height: 100%;
  h1{
    // font-family: 'cartonSlab';
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
p{
  color: #666!important;
}
.flex-auto{
  flex: 0 1 auto!important;
}
#flying-focus{
  position: fixed!important;
}

</style>
