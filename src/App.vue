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
  z-index:-1;
  visibility: hidden!important;
}

.blue-bg{
  background: rgb(255,255,255);
  background: linear-gradient(333deg, rgba(255,255,255,1) 0%, rgba(215,231,255,1) 100%);
  h1,h2,h3{
    color: #4B85E0;
  }
}
.pink-bg{
  background: rgb(255,255,255);
  background: linear-gradient(333deg, rgba(255,255,255,1) 0%, rgba(255,222,236,1) 100%);
  h1,h2,h3{
    color: #EB5795;
  }
}
.gold-bg{
  background: rgb(255,255,255);
  background: linear-gradient(333deg, rgba(255,255,255,1) 0%, rgba(255,244,205,1) 100%);
  h1,h2,h3{
    color: #D7AC0D;
  }
}
.green-bg{
  background: rgb(255,255,255);
  background: linear-gradient(333deg, rgba(255,255,255,1) 0%, rgba(207,255,218,1) 100%);
  h1,h2,h3{
    color: #43C762;
  }
}

</style>
