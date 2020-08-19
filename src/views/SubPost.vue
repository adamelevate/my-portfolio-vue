<template>
<div class="subpost">
  <div class="page" >


    <template  v-if="$isEmpty(subpost)">
      <v-row align="center" justify="center" class="header blank mb-8">
        <v-skeleton-loader
        class="mx-auto header-image"

        type="image"
        ></v-skeleton-loader>
        <v-col class="pa-0">
            <h1>
                loading work...
            </h1>
            <h3>
              <v-skeleton-loader
              class="mx-auto"
              max-width="500"

              type="card-heading, actions"
              ></v-skeleton-loader>
            </h3>
            <v-card color="transparent" class="elevation-0">

            </v-card>
        </v-col>
      </v-row>

      <v-container class="content text-left col-md-8 pt-0">
        <v-row class="pa-4 pt-0" justify="center" >
          <v-col cols="12" lg="10">
            <v-skeleton-loader class="mx-auto mb-8" type="heading"></v-skeleton-loader>
            <v-skeleton-loader class="mx-auto mb-8" v-for="n in 6" :key="n" type="paragraph"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-container>
    </template>


    <template v-else>

      <!-- eslint-disable-next-line vue/require-component-is -->
      <component is="style">
        {{headerStyle}}
      </component>
        <v-row align="center" class="header small py-4 py-md-0" >

          <v-container>
            <v-row align="center" :justify="$vuetify.breakpoint.smAndDown ? 'center':'space-between'">
              <v-btn color="white" rounded outlined :href="`#/work/${post.slug}`">
                <v-icon class="mr-3">mdi-arrow-left</v-icon>{{subpost.fields.title}} Overview
              </v-btn>
              <!-- <div class="flex-auto">
                <h1 class="text-h4 text-md-h4 font-weight-bold mb-0">{{post.fields.title}}</h1>
              </div> -->
            </v-row>
          </v-container>

        </v-row>

        <!-- eslint-disable-next-line vue/require-component-is -->
      <component is="style">
        {{subheaderStyle}}
      </component>

      <v-row align="center" justify="center" class="subheader mb-8 py-4 py-md-0" >
        <v-col>
          <h1 class="text-h4 text-md-h3 font-weight-bold mb-0">{{subpost.fields.title}}</h1>
          <!-- <h1 class="text-h4 text-md-h3 font-weight-bold mb-0">{{subpost.fields.title}}</h1> -->
          <v-container>
            <v-row justify="center" class="tags mb-8" v-html="post.fields.tags">
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <v-container>
        <v-card width="300" class="mx-auto text-center grey lighten-2" @click="$router.push({path:`/work/${post.slug}`})">
          <v-card-subtitle class="text-center pb-0">This is a part of a larger project:</v-card-subtitle>
          <v-card-title class="text-center primary--text pt-0">
            <div class="text-center" style="width:100%">{{subpost.fields.parent_page.name}}</div>
          </v-card-title>
        </v-card>
      </v-container>


      <v-container fluid class="content text-left col-md-8 pt-0">
        <v-row class="pa-4 pt-0" justify="center" >
          <v-col cols="12" lg="10" v-html="subpost.fields.article" v-if="!$isEmpty(post)">
            <!-- Post goes here -->
          </v-col>
        </v-row>
      </v-container>
    </template>

  </div>
</div>
</template>

<script>
// @ is an alias to /src
import { butter } from '@/buttercms';


export default {
  name: 'subpost',
  components: {

  },
  computed:{
    headerStyle: function(){
      return this.$parent.post.fields.header
    },
    subheaderStyle: function(){
      return this.subpost.fields.header
    },
    post: function(){
      return this.$parent.post;
    }
  },
  methods:{
   //  getPost(id){
   //   // let vThis = this;
   //   butter.page.retrieve('subwork', id).then((res) => {
   //     // console.log(res.data.data)
   //     this.subpost = res.data.data
   //   })
   // },
   getPost(id){
     //check for preview mode for ButterCMS
   let isPreview = ""
   if(this.$route.query.preview != undefined){
     isPreview = this.$route.query.preview == 1 ? 1 : 0;
   }
   else{
     isPreview = 0;
   }
   //get page from ButterCMS
    butter.page.retrieve('subwork', id, {'preview': isPreview}).then((res) => {
      this.subpost = res.data.data
    })
  },
  },
  data(){
    return {
      subpost: [],
    }
  },
  created(){
    this.getPost(this.$route.params.slugSub);
  }
}
</script>


<style lang="scss" >
.subpost{
  .page{
    background-color: rgba(255,255,255,1);
    height: 100%;
  }
  .small{
    max-height: 90px;
    min-height: 90px;
  }
  .header{
  }
.subheader{
  background: #ddd;
    color: white!important;
    text-shadow: 0 8px 20px rgba(0,0,0,.45)!important;
    min-height: 20vh;

    &.blank{
      position: relative;
      .col{

      }
      .header-image{
        height: 40vh;
        position: absolute;
        top: 0;
        width: 100%;
        .v-skeleton-loader__image{

          height: 40vh;
        }
      }
    }
    h1{
      font-size: 3rem;
      font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif!important;
    }
    .site-link{
      border-width: 3px;
      font-size: bold;
      background: rgba(0,0,0,.45)!important;
      color: #fff;
      text-shadow: 1px 1px 2px black;
    }
    .tags{
      ul{
        margin: 0 auto;
        padding: 0;
        li{
          margin: 0;
          list-style-type: none!important;
          display: inline-block;
          background: rgba(255,255,255,.95);
          padding: .25rem .5rem;
          border-radius: 25px;
          color: grey!important;
          box-shadow: 0 8px 20px rgba(0,0,0,.15)!important;
          // text-shadow: 0 8px 20px rgba(0,0,0,.45)!important;
        }
      }
    }
}
.content{
  color: #333;
  text-align: justify;
  text-justify: inter-word;
  font-size: 18px;
  p, ul{
    margin-bottom: 1.5rem;
    color: #777!important;
  }
  li{
    margin-bottom: .75rem;
  }
  h1{
    line-height: 2.5rem;
  }
  h1,h2,h3{
    margin-bottom: 1rem;
    padding-top: 2rem;
    color: #666;
    font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif;
    font-weight: lighter;
  }
  img{
    max-width: 100%;
  }
  hr{
    opacity: .5;
  }
  a > img{
    border: 1px solid var(--v-primary-base);
  }
  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
  }
  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  }
}
}

</style>
