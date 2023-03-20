<template>
  <div class="navigation">
    <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
    right
  >

    <!-- <v-img class="logo-alt" src="@/assets/images/Logo+Alt.png"></v-img> -->
    <v-row class="black">
      <v-col>
        <h2 class="white--text">Menu</h2>
      </v-col>
    </v-row>



    <v-list>

      <v-list-item
        v-for="link in links"
        :key="link.text"
        link
        exact
         :to="{name:link.text}"
      >
        <v-list-item-icon>
          <v-img :src="require(`@/assets/images/icons/${link.text}.png`)"></v-img>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>



  <v-container class="pa-6" >
      <v-row align="center" justify="space-between">
        <div class="flex-auto">
          <v-row>
            <div class="icon-holder mr-3 ml-5 ml-md-0">
              <div class="image-container" @click="$router.push({name:'Home'})">
                <!-- <div class="my-image ml-3 ml-md-0"></div> -->
                <v-img src="@/assets/images/Logo.png"></v-img>
              </div>
            </div>
            <!-- <h2 class="primary--text">Adam Lorentzen</h2> -->
          </v-row>
        </div>
              <!-- :class="[{'active' : $route.path.endsWith(link.path)}, link.text]" -->
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-row class="links flex-auto" align="center" justify="space-between">
            <v-btn v-for="link in links" :key="link.text"
              class="mr-2"
              active-class="active"
              :class="[link.text, {'hidden-md-and-up': link.text == 'Contact'}]"
              text
              :to="link.path">
              {{link.text}}
            </v-btn>
          </v-row>
          <!-- <v-row class="links flex-auto">
            <v-btn class="mr-2" text href="https://docs.google.com/document/d/1VujJK-PKmFpU6O7F_1ID557I65Kya8oLVP0eCQUCeug/edit?usp=sharing">Resume</v-btn>
          </v-row> -->
          <div class="links flex-auto">
            <v-btn class="mr-2 Contact" active-class="active" text to="/contact">Contact <v-icon class="ml-2">mdi-forum-outline</v-icon></v-btn>
          </div>
        </template>
        <template v-else>
            <div class="flex-auto py-0">
              <v-btn color="black lighten-2" @click="drawer = !drawer" dark class="ma-0 mr-4 mt-0"><v-icon>mdi-menu</v-icon>Menu</v-btn>
            </div>

        </template>
      </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    msg: String
  },
  data(){
    return{
      drawer: false,
      links: [
        {'icon': 'mdi-home', 'text': 'Home', 'path': '/', showDesktop: false},
        {'icon': 'mdi-playlist-star', 'text': 'Skills', 'path': '/skills', showDesktop: false},
        {'icon': 'mdi-image-multiple', 'text': 'Work', 'path': '/work', showDesktop: false},
        {'icon': 'mdi-image-multiple', 'text': 'Contact', 'path': '/contact', showDesktop: false},
      ]
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.navigation{
  z-index: 99999!important;
  // position: absolute;
  width: 100%;
  background: white;
  box-shadow: 0 0px 50px rgba(0,0,0,.10);
h2{
  line-height: 44px;
}
.icon-holder{
    height: 36px;
    width: 100px;
    position: relative;
    transition: all linear .15s;
    &:hover{
      top: 0;
      transform: scale(1.10, 1.10);
    }
}
.links .v-btn{
  font-weight: bold;
  color: #888;
  position: relative;
  background: white!important;
  outline: none;
  text-transform: none!important;
  &.active:before{
    opacity: 0!important;
  }
  &.active:after{
    content: "";
    position: absolute;
    bottom:0;
    border-radius: 4px;
    height: 4px;
    width: 75%;
  }
  &.Home:after{
    background: #F281B0!important;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F281B0, #F9C504)!important;  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F281B0, #F9C504)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  &.Skills:after{
    background: #F9C504!important;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F9C504, #43C762)!important;  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F9C504, #43C762)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  &.Work:after{
    background: #43C762!important;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #43C762, #6AA8FF)!important;  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #43C762, #6AA8FF)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  &.Contact:after{
    background: #6AA8FF!important;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6AA8FF, #F281B0)!important;  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6AA8FF, #F281B0)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}
.image-container{
  top: 0;
  position: absolute;
  filter: drop-shadow(0 8px 10px rgba(0,0,0,.25));
  &:hover{
    cursor: pointer;
  }
}
.my-image{
  background-image: url("~@/assets/images/me-italy.jpg");
  background-size: 180%;
  background-position: 52% 20%;
  min-height: 80px;
  max-width: 80px;
  width: 100px;
  // mask-image: url("~@/assets/images/Mask.svg");
  // mask-size:300px;
  // mask-repeat:no-repeat;
  // mask-position:top right;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  position: relative;
  &:before{
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 1);
  }
}
  .v-navigation-drawer{
      z-index: 999999;
      .logo-alt{
        max-width: 75%;
        margin: 10px auto;
      }
      .black{
        font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif;
        min-height: 60px;
      }
    .v-list-item{
      // padding: 5px 0;
      font-family: "Menlo-Regular", "Lucida Console", Monaco, monospace;
      .v-list-item__title{
        text-align: left;
        font-size: 18px!important;
      }
      .v-list-item__icon{
        .v-image{
          width: 45px;
          opacity: .5;
        }
      }
      &.v-list-item--active{
        .v-list-item__title{
        color: var(--v-primary-base);
        }

        .v-list-item__icon{
          .v-image{
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
