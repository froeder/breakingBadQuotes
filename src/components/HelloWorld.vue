<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div>
          <p>{{this.quote}}</p>
          <small>{{this.author}}</small>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      quote: '',
      author: ''
    }
  },
  mounted (){
    let uri = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/1'
    axios.get(uri).then((response) => {
      console.log(response.data[0])
      this.quote = response.data[0].quote
      this.author = response.data[0].author
    })
  }
}
</script>

