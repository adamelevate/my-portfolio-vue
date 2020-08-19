<template>
<div class="post-content">

    <template  v-if="$isEmpty(post)">
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

      <v-row align="center" justify="center" class="header mb-8 py-4 py-md-0" >
        <v-col>
          <h1 class="text-h4 text-md-h3 font-weight-bold mb-0">{{post.fields.title}}</h1>
          <h3 class="mb-5">{{post.fields.description}}</h3>
          <v-container>
            <v-row justify="center" class="tags mb-8" v-html="post.fields.tags">
            </v-row>
          </v-container>

          <v-row align="center" justify="center">
            <v-btn v-if="post.fields.website !== ''" class="site-link" depressed :href="post.fields.website" target="_blank">
              <v-icon class="mr-3">mdi-open-in-new</v-icon>Website
            </v-btn>
            <template v-if="post.fields.website !== '' && post.fields.portfolio !== ''">
              <div class="mx-3">

              </div>
            </template>
            <v-btn v-if="post.fields.portfolio !== ''" class="site-link" depressed :href="post.fields.portfolio" target="_blank">
              <v-icon class="mr-3">mdi-image-multiple-outline</v-icon>More Screens
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-container fluid class="content text-left col-md-8 pt-0">
        <v-row class="pa-4 pt-0" justify="center" >
          <v-col cols="12" lg="10" v-html="post.fields.article" v-if="!$isEmpty(post)"></v-col>
        </v-row>
      </v-container>


    </template>

</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'postContent',
  components: {

  },
  computed:{
    headerStyle: function(){
      return this.$parent.post.fields.header
    },
    post: function(){
      return this.$parent.post;
    }
  },
  methods:{

  },
  data(){
    return {

    }
  },
  created(){

  }
}
</script>


<style lang="scss" >
.post-content{
    background-color: rgba(255,255,255,1);
    // height: 100%;
.header {
    color: white!important;
    text-shadow: 0 8px 20px rgba(0,0,0,.45)!important;
    min-height: 40vh;
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
