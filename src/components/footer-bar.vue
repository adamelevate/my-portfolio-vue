<template>
  <div class="footer">
    <v-container class="">
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="4">
            <v-row class="portfolio-buttons">
              <v-col cols="12" class="pa-0"><small>connect with me:</small> <br></v-col>
              <v-col>
                <a class="linkedin" href="https://www.linkedin.com/in/adamlorentzen/" target="_blank">LinkedIn</a>
              </v-col>
              <v-col>
                <a class="instagram" href="https://www.instagram.com/whiskeyrobots/" target="_blank">Instagram</a>
              </v-col>
              <v-col>
                <a class="dribbble" href="#https://dribbble.com/adamelevate" target="_blank">Dribbble</a>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="2">
            <small>content powered by:</small> <br>
            <a href="https://buttercms.com" target="_blank">
              <img src="@/assets/images/butter-b.png" alt="">
            </a>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'footerBar',
  props: {
    msg: String
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.footer{
  min-height: 60px;
  width: 75%;
  margin: 0 auto;
  padding-top:20px;
  border-top:1px solid #ccc;
  img{
    max-width: 100px;
  }
  .portfolio-buttons{
    a{
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
    }
    .linkedin{
        color: #0076B7;
    }
    .dribbble{
      color:#E84386;
    }
    .instagram{
      color:#272324;
    }
  }
}
</style>
