<template>
<div class="work">
  <navigation />
  <div class="page" >

    <v-container class="heading">
      <h1 class="primary--text">Samples of my work.</h1>
    </v-container>

    <template  v-if="$isEmpty(posts)">
        <v-container class="text-left col-md-8 pt-0">
          <v-row align="start" justify="center" class="header blank mb-8">
            <v-col cols="12" md="6" xl="4" class="pa-0" v-for="n in 6" :key="n">
              <v-card class="elevation-6 ma-4" @click="$router.push({path:`/work/${post.slug}`})">
                <v-skeleton-loader class="mx-auto" height="200" type="image"></v-skeleton-loader>
                <h3>
                  <v-skeleton-loader class="mx-auto" type="list-item-two-line"></v-skeleton-loader>
                </h3>
              </v-card>
            </v-col>
          </v-row>
      </v-container>
    </template>

    <template v-else>

      <v-container class="portfolio-cards text-left col-md-8 pt-0">
        <v-row class="pa-4 pt-0" align="center" justify="space-between">
          <v-col cols="12" md="6" xl="4" v-for="post in posts" :key="post.title">
            <v-card class="elevation-0 ma-2" @click="goTo(post)">
                <div class="tags mx-4 py-2 d-flex" v-html="post.fields.tags"></div>
              <v-img :src="post.fields.thumbnail" height="275px" postion="center top"></v-img>
              <v-card-title class="grey--text text--darken-1">{{post.fields.title}}</v-card-title>
               <v-card-subtitle class="text-left">{{post.fields.description}}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>

  </div>
  <footer-bar/>
</div>
</template>

<script>
// @ is an alias to /src
const navigation = () => import('@/components/navigation.vue')
const footerBar = () => import('@/components/footer-bar.vue')
import { butter } from '@/buttercms';

export default {
  name: 'work',
  components: {
    navigation,
    footerBar
  },
  computed:{

  },
  methods:{
    getOrganizedPosts(){
      let vThis = this;
      function compare(a, b) {
        return a.fields.date_published < b.fields.date_published ? 1: -1
      }

      this.getPosts().then(posts =>{
        vThis.posts = posts.sort(compare);

      });
    },
    async getPosts(){
     let work = await butter.page.list('work',{
         page: 1,
         order:'-date_published',
         levels: 2,
       }).then((res) => {return res.data.data});

     let subwork = await butter.page.list('subwork',{
        page: 1,
        order:'-date_published',
        // page_size: 4
      }).then((res) => {return res.data.data})
    // }).then((res) => {return []})

      return work.concat(subwork);
   },

   goTo(post){
     if(post.page_type == 'subwork'){
       this.$router.push({path:`/work/${post.fields.parent_page.slug}/${post.slug}`})
     }
     else{
       this.$router.push({path:`/work/${post.slug}`})
     }
   }
  },
  data(){
    return {
      posts: [],
    }
  },
  created(){
    this.getOrganizedPosts();
  }
}
</script>


<style lang="scss" >
.work{
  height: 100%;
  .page{
    // background-color: rgba(255,255,255,1);
    // height: 100%;
    padding-top: 40px;
    .heading{
      h1{
        // font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif;
        font-family: "Menlo-Regular", "Lucida Console", Monaco, monospace;
        font-weight: lighter;
      }
    }
  }
  .portfolio-cards{
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
    .v-card{
      box-shadow: 0 10px 50px rgba(0,0,0,.15)!important;
      transition: all .10s linear;
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
          flex-wrap:wrap;
          margin: 0!important;
          padding: 0!important;
          li{
            flex: 1 1 auto;
            margin-right: 5px;
            font-size: 11px;
            background: rgba(255,255,255,.75);
            border-radius: 6px;
            padding: 2px 4px;
            color: var(--v-primary-base);
            font-weight: bold;
          }
        }
      }
    }
  }
}

</style>
