<template>
  <div class="skills">

    <navigation />

    <div class="page" >
      <v-container class="heading">
        <h1 class="primary--text">Overview of my skills.</h1>
      </v-container>

      <v-container>
        <template  v-if="$isEmpty(post)">
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
          <v-row align-content="stretch"></v-row>
          <div class="content" v-html="post.fields.article"></div>
        </template>
      </v-container>
    </div>

    <footer-bar/>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
import footerBar from '@/components/footer-bar.vue'
import { butter } from '@/buttercms'

export default {
  name: 'skills',
  components: {
    navigation,
    footerBar
  },
  computed:{

  },
  methods:{
    getPosts(){
     // let vThis = this;
     //check for preview mode for ButterCMS
     let isPreview = ""
     if(this.$route.query.preview != undefined){
       isPreview = this.$route.query.preview == 1 ? 1 : 0;
     }
     else{
       isPreview = 0;
     }
     //get page
     butter.page.retrieve('skills', 'my-skills', {'preview': isPreview})
     .then((res) => {
       // console.log(res.data)
       this.post = res.data.data
     })
   },
  },
  data(){
    return {
      post: [],
    }
  },
  created(){
    this.getPosts();
  }
}
</script>

<style lang="scss">
.skills{
  .page{
    padding-top: 40px;
    .heading{
      h1{
        // font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif;
        font-family: "Menlo-Regular", "Lucida Console", Monaco, monospace;
        font-weight: lighter;
      }
    }
    .content{
      .row{
        .v-card{
          background: #fff;
          margin:10px;
          padding: 10px;
          box-shadow: 0 10px 50px rgba(0,0,0,.15)!important;
          border-radius: 6px;
          min-height: 94.5%;
          h2{
            color: var(--v-secondary-lighten3);
            font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif;
            // font-family: "Menlo-Regular", "Lucida Console", Monaco, monospace;
            margin: 10px auto 15px;
          }
          ul{
            text-align: left;
            margin: 0 auto;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
