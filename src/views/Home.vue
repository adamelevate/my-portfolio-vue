<template>
  <div class="home">
    <navigation />
    <div class="page">


      <v-container class="hero-header">
        <v-row align="stretch" align-content="start" align-content-md="center" no-gutters>
          <v-col cols="12" order="last" order-md="first" md="8" offset-md="1" class="text-left">
            <div class="grey--text text--darken-1 heading-subtitle  mt-4 mt-md-12 mt-lg-10 mt-xl-6 mb-4 pt-3 pt-md-0">👋 hey there, I'm </div>
            <div class="heading-main">
              <v-img src="@/assets/images/Name@2x.png"></v-img>
              <!-- <h1 class="title-white">Adam Lorentzen</h1> -->
            </div>
            <div class="grey--text text--darken-1 heading-paragraph  mt-md-12 mt-lg-10 mt-xl-6 mb-4 pt-3 pt-md-0">
              Creator, designer, <br v-if="$vuetify.breakpoint.smAndUp">
              developer, and leader.
            </div>
          </v-col>
        </v-row>

        <img class="my-image" src="@/assets/images/adam+shapes.png" v-if="$vuetify.breakpoint.mdAndUp"/>
        <div class="my-image-mobile" v-else></div>

      </v-container>


      <!-- <v-row class="pt-10 main-buttons  mb-md-0 mb-6" align="center" justify="space-around">
        <v-col>
          <v-btn block class="primary" dark @click="$router.push({path:`/work`})">View Work</v-btn>
        </v-col>
        <v-col>
          <v-btn block class="secondary" @click="$router.push({path:`/skills`})">My Skills</v-btn>
        </v-col>
        <v-col>
          <v-btn :block="$vuetify.breakpoint.mdAndUp" class="grey darken-3 white--text mb-6 mb-md-0 px-10 px-0" href="https://docs.google.com/document/d/1VujJK-PKmFpU6O7F_1ID557I65Kya8oLVP0eCQUCeug/edit?usp=sharing">View Résumé</v-btn>
        </v-col>
      </v-row> -->


      <div class="white heading-1">

      <v-container class="mb-8 pt-16">
        <h1 class="mt-16  mt-md-0 mb-4"><span class="grey--text mt-6 d-block">Creating with purpose and passion.</span></h1>
        <p class="subtext mb-16 mb-md-10">You'll find me in center of the action, trying every option, and being insanely curious about what's possible. I also value:</p>


          <v-row align-content="stretch">
            <v-col cols="12" md="4" class="">
              <div class="v-card blue-bg pa-3">
              <h3 class="mb-3">Forging Connections</h3>
              <p>Helping people to discover ways to work, live, and reach their goals.</p>
            </div>
            </v-col>
            <v-col cols="12" md="4" class="">
              <div class="v-card pink-bg pa-3">
              <h3 class="mb-3">Experiencing Life</h3>
              <p>Through traveling, designing, or making music/cooking/brewing, always learning something new.</p>
            </div>
            </v-col>
            <v-col cols="12" md="4" class="">
              <div class="v-card gold-bg pa-3">
              <h3 class="mb-3">Achieving Results</h3>
              <p>For over 10 years, in 20 different industries, and always finding a way for everyone to win.</p>
            </div>
            </v-col>
          </v-row>

          <v-row align="center" justify="center" class="pt-6">
            <div class="v-card green-bg pa-3 col-12 col-md-6">
              <h3 class="mb-2">Want to know more?</h3>
              <v-btn @click="$router.push({path:`/skills`})" large color="white" class="px-12">
                <span style="color:#43C762">View My Skills</span>
              </v-btn>
            </div>
          </v-row>

      </v-container>

    </div>


      <v-container class="">
        <h1 class="mt-8 mb-16 grey--text">Samples of my work.</h1>

        <v-row align="center" justify="space-between" class="mb-3 portfolio-cards" v-if="$isEmpty(posts)">
          <v-col cols="12" md="6" xl="4" v-for="n in 6" :key="n">
            <v-skeleton-loader
            class="mx-auto skeleloader"
            height="400"

            type="card"
            ></v-skeleton-loader>
          </v-col>
        </v-row>

        <v-row align="center" justify="space-between" class="mb-3 portfolio-cards" v-else>
          <v-col cols="12" md="6" xl="4" v-for="post in posts" :key="post.title">
            <v-card class="elevation-0 ma-2 custom-shadow" @click="$router.push({path:`/work/${post.slug}`})">
              <div class="tags mx-4 py-2" v-html="post.fields.tags"></div>
              <v-img :src="post.fields.thumbnail" height="275px" postion="top center"></v-img>
              <v-card-title class="grey--text text--darken-1">{{post.fields.title}}</v-card-title>
               <v-card-subtitle class="text-left ">{{post.fields.description}}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        <v-row align="center" justify="center" class="pt-6">
          <v-btn large color="primary" class="px-12" @click="$router.push({path:`/work`})">View More Work</v-btn>
        </v-row>

      </v-container>


    </div>
    <footer-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
const navigation = () => import('@/components/navigation.vue')
const footerBar = () => import('@/components/footer-bar.vue')
import { butter } from '@/buttercms'

export default {
  name: 'Home',
  components: {
    navigation,
    footerBar,
  },
  data(){
    return {
      posts: [],
      currStep: null,
    }
  },
  methods:{
     getPosts(){
      // let vThis = this;
      butter.page.list('work',{
        page: 1,
        order:'-date_published',
        // order:'title',
        page_size: 4
      }).then((res) => {
        // console.log(res.data)
        this.posts = res.data.data
      })
    },
  },
  created(){
    this.getPosts();
  }
}
</script>



<style lang="scss">
.mobile{
  .hero-header{
    min-height: auto!important;
    .row{
      min-height: 83vh!important;
    }
    .my-image{
      // position: relative!important;
      left: 0%!important;
      bottom: -15%!important;
    }
    .heading-paragraph{
      font-size: 1.75rem!important;
    }
  }
}


.home{
  .page{
    padding-bottom: 100px;
  }


  .hero-header{
    position: relative;
    z-index: 999;
    // max-width: 90vw;
    min-height: 70vh;
    position: relative;

    .row{
      min-height: 60vh;
      z-index: 100;
      position:relative;
    }
    .heading-main{
      font-size: 3rem;
    }
    $title-height: 5rem;
    .heading-main{
      position: relative;
      max-width: 660px;
      .title-white{
        color: white;
        font-size: $title-height;
      }
    }
    .heading-subtitle{
      font-size: 1.6rem;
      font-family: "Menlo-Regular", "Lucida Console", Monaco, monospace;

    }
    .heading-paragraph{
      font-size: 2.5rem;
      font-family: "Menlo-Regular", "Lucida Console", Monaco, monospace;
    }
    .my-image{
        position: absolute;
        right: 5%;
        bottom: 10%;
        max-width: 500px;
        z-index:0;
    }
    .my-image-mobile{
      background-image: url("~@/assets/images/adam+shapes.png");
      background-size: 120%;
      background-position: 45% 36%;
      height: 500px;
      max-width: 320px;
      min-width: 100%;
      position: absolute;
      display: block;
      z-index: 999;
      bottom: -15%;
      right: 0;
    }
  }




  .welcome-card{
    box-shadow: 0 10px 50px rgba(0,0,0,.15)!important;
  }
  .aboutme-icons{
    text-align: center;
    .icon{
      font-size: 2rem;
    }
  }



  .heading-1{
    box-shadow: 0 10px 50px rgba(0,0,0,.15)!important;
    margin: 30px 0;
      h1{
        line-height: normal!important;
        line-height: auto;
        font-size: 250%;
      }
      .subtext{
        font-size: 17px;
        max-width: 500px;
        margin: 0 auto;
      }
      > .v-card{
        max-width: 800px;
        min-width: 320px;
        margin: 0 auto;
        font-size: 18px;
      }
      .row{
        min-height: 200px;
        .v-card{
          height: 100%;
        }
      }
      h3{

        font-family: "Menlo-Regular", "Lucida Console", Monaco, monospace;
        font-weight: bold;
      }
      p{
        font-size: 15px;
      }
      .blue-bg{
        background: rgb(255,255,255);
        background: linear-gradient(333deg, rgba(255,255,255,1) 0%, rgba(215,231,255,1) 100%);
        h3{
          color: #4B85E0;
        }
      }
      .pink-bg{
        background: rgb(255,255,255);
        background: linear-gradient(333deg, rgba(255,255,255,1) 0%, rgba(255,222,236,1) 100%);
        h3{
          color: #EB5795;
        }
      }
      .gold-bg{
        background: rgb(255,255,255);
        background: linear-gradient(333deg, rgba(255,255,255,1) 0%, rgba(255,244,205,1) 100%);
        h3{
          color: #D7AC0D;
        }
      }
      .green-bg{
        background: rgb(255,255,255);
        background: linear-gradient(333deg, rgba(255,255,255,1) 0%, rgba(207,255,218,1) 100%);
        h3{
          color: #43C762;
        }
      }
  }

  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
  }
  blockquote:before {
    // color: #ccc;
    // content: open-quote;
    // font-size: 4em;
    // line-height: 0.1em;
    // margin-right: 0.25em;
    // vertical-align: -0.4em;
  }
  blockquote p {
    // display: inline;
    font-size: 1.5rem;
  }
  h1,h2,h3, .v-card__title{
    font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif;
    font-weight: lighter;
  }
  h1{
    line-height: 2rem;
  }
  h2{
    line-height: 1.5rem;
  }

  .skeleloader{
    .v-skeleton-loader__image.v-skeleton-loader__bone{
      height: 300px;
    }
  }
  .portfolio-cards{
    .v-card{
      transition: all .10s linear;
      position: relative;
      &:hover{
        transform: scale(1.05,1.05);
        cursor: pointer;
      }
      .v-image__image{
        background-position: top center!important;
      }
      .tags{
        position: absolute;
        top: 242px;
        z-index: 99;
        ul{
          list-style: none;
          display: flex;
          margin: 0!important;
          padding: 0!important;
          li{
            margin-right: 5px;
            font-size: 11px;
            background: rgba(255,255,255,.75);
            border-radius: 6px;
            padding: 2px 4px;
            color: var(--v-primary-base);
          }
        }
      }
    }
  }
}
hr{
  opacity: .5;
}
.main-buttons{
  .v-btn{

    text-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
  }
}
.v-btn{
  text-transform: none!important;
  font-weight: bold;
  font-size: 16px;
}
.v-card.custom-shadow{
  box-shadow: 0 10px 50px rgba(0,0,0,.15)!important;
}
</style>
