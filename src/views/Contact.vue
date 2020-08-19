<template>
<div class="contact">
  <navigation />
  <div class="page" >

    <v-container class="heading">
      <h1 class="primary--text">Let's connect and do something amazing.</h1>
    </v-container>


    <v-container class="text-center col-md-8 pt-0">
      <v-row align="start" justify="center" class="header blank mb-8">

      </v-row>
        <v-row class="pa-4 pt-0" justify="center" >
        <v-col cols="12" lg="10" class="">
          <h2>Just reach out wit the form below.</h2>
          <p>I'd love to help work through your operations challenges, communication issues, or even just basic design dilemmas.</p>
          <contact-form></contact-form>
        </v-col>
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
const contactForm = () => import('@/components/contact-form.vue')

export default {
  name: 'work',
  components: {
    navigation,
    footerBar,
    contactForm
  },
  computed:{

  },
  methods:{

  },
  data(){
    return {
      posts: [],
    }
  }
}
</script>


<style lang="scss" >
.contact{
  height: 100%;
  .page{
    // background-color: rgba(255,255,255,1);
    // height: 100%;
    padding-top: 40px;

    h1{
      font-family: "Menlo-Regular", "Lucida Console", Monaco, monospace;
      font-weight: lighter;
    }
    h2{
      font-family: "MADETommySoft-Bold",Helvetica, Arial, sans-serif;
    }

  }
}

</style>
