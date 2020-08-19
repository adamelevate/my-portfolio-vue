<template>
  <div class="home">
    <!-- <navigation /> -->
    <div class="page">

      <v-container class="hero-header">
        <v-row  justify="center" no-gutters>
          <v-col cols="12" class="col-md-3 mt-md-6 mr-md-6 image-container">
            <div class="my-image mx-auto ml-md-0">
            </div>
          </v-col>
          <v-col cols="12" order="first" order-md="last" class="col-md-5">
            <h1 class="primary--text heading-main mt-md-12 mt-lg-10 mt-xl-6 mb-4 pt-3 pt-md-0">👋 I'm Adam</h1>
            <h2 class="grey--text text--lighten-1 heading-subititle">
              I connect people
            <br>
            through authentic interactions.</h2>
            <v-row class="pt-10 main-buttons  mb-md-0 mb-6" align="center" justify="space-around">
              <v-col>
                <v-btn block class="primary" dark @click="$router.push({path:`/work`})">View Work</v-btn>
              </v-col>
              <v-col>
                <v-btn block class="secondary" @click="$router.push({path:`/skills`})">My Skills</v-btn>
              </v-col>
              <v-col>
                <v-btn :block="$vuetify.breakpoint.mdAndUp" class="grey darken-3 white--text mb-6 mb-md-0 px-10 px-0" href="https://docs.google.com/document/d/1VujJK-PKmFpU6O7F_1ID557I65Kya8oLVP0eCQUCeug/edit?usp=sharing">View Résumé</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>




      <v-container class="mb-8 heading-1" >
        <h3 class="my-0 primary--text">‍I LOVE</h3>
        <h1 class="mt-0 mb-6 primary--text"><span class="primary--text">Products</span> <span class="black--text">&amp;</span> <span class="secondary--text">People</span></h1>
        <v-card class="elevation-0 pa-8 custom-shadow text-left">
          <p>You'll find me in center of the action, trying every option, and being insanely curious about what's possible. A little about what I like:</p>
          <h3>Forging Connections</h3>
          <p>There's nothing better than connecting people, whether it's to other people or products, helping them along the way to reach their goals.</p>
          <h3>Experiencing Life</h3>
          <p>I'm a passionate about design, music, writing, speaking, travel, brewing beer, and making real change in the world helping us to become more caring, connected, and sustainable.</p>
          <h3>Achieving Results</h3>
          <p>I bring people together working on physical and digital products for over 10 years, in 20 different industries, and contributing through design, development, marketing, user experience, and product leadership. </p>
          <hr>
          <v-row align="center" justify="center" class="pt-6">
            <v-btn @click="$router.push({path:`/skills`})" large color="secondary" class="px-12">View My Skills</v-btn>
          </v-row>
        </v-card>
      </v-container>


      <!-- <v-container class="mb-8" style="max-width:620px">
        <h1 class="my-8 primary--text">A little about me.</h1>
        <v-card class="elevation-0 pa-4 custom-shadow text-left">
          <p>I'm a passionate about design, music, writing, speaking, travel, and bringing people together to accomplish something amazing.</p>
          <v-row class="aboutme-icons" align="center" justify="space-between">
            <v-col><v-card class="elevation-6 pa-2"><div class="icon">❤️</div> <div class="text">Helping people.</div></v-card></v-col>
            <v-col><v-card class="elevation-6 pa-2"><div class="icon">💰</div> <div class="text">Helping businesses.</div></v-card></v-col>
            <v-col><v-card class="elevation-6 pa-2"><div class="icon">😍</div> <div class="text">Helping both!</div></v-card></v-col>
          </v-row>
          <p>Helping <strong>people</strong> reach their goals totally keeps me going, wakes up me with ideas, and drives my efforts to produce high quality, meaningful work. </p>
          <p>Assisting <strong>businesses</strong> to reach their goals is very profitable, let's me learn new industries, and produces personal growth, travel, and meanignful discussions. </p>
          <p>
            Yet working to help <strong>BOTH</strong> parties reach their goals creates an amazing, sustainable exchange of value, where everyone wins!
          </p>
        </v-card>
      </v-container> -->


      <v-container class="">
        <h1 class="my-8 primary--text">Samples of my work.</h1>

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
    footerBar
  },
  data(){
    return {
      posts: [],
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
.mobile .home:after{
  height: 20vh;
}
.home{
  .page{
    padding-bottom: 100px;
  }

  &:after{
    content: "";
    display: block;
    width:100%;
    height: 180px;
    background-color: white;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    box-shadow: 0 0px 50px rgba(0,0,0,.10);
  }
  .hero-header{
    position: relative;
    z-index: 999;
    .heading-main{
      font-size: 3rem;
    }
    .heading-subtitle{
      font-size: 2rem;
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
  .image-container{
    filter: drop-shadow(0 0px 30px rgba(0,0,0,.30));
    // box-shadow: 0 0px 50px rgba(0,0,0,.60);
  }
  .my-image{
    background-image: url("~@/assets/images/me-italy.jpg");
    background-size: 120%;
    background-position: 45% 36%;
    min-height: 320px;
    max-width: 320px;
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

  .heading-1{
      h1{
        line-height: normal!important;
        font-size: 350%;
        line-height: auto;
      }
      .v-card{
        max-width: 800px;
        min-width: 320px;
        margin: 0 auto;
        font-size: 18px;
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
