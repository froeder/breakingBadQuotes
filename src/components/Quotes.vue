<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div>
          <h3>Quote</h3>
          <br>
          <br>

          <h2>"{{quotes.quote}}"</h2>
          <cite><h3 style="color:grey">- {{quotes.author}}</h3></cite>
          <br>
          <br>
        </div>
        <v-flex>
          <v-btn flat icon color="yellow" @click="favorite()">
            <v-icon>star</v-icon>
          </v-btn>
          <v-btn flat icon color="indigo" @click="refresh()">
            <v-icon>refresh</v-icon>
          </v-btn>
        </v-flex>
        <v-alert
          v-model="alert"
          dismissible
          type="success"
        >
          This is a success alert that is closable.
        </v-alert>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import axios from 'axios'
import {uuid} from 'vue-uuid'
import db from "../../db";

export default {
  data(){
    return{
      alert: false,
      quotes: []
    }
  },
  created(){
    this.refresh()
  },
  methods:{
    refresh(){
      var url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/1'
      axios.get(url).then(response => {
        this.quotes = {
          quote: response.data[0].quote,
          author: response.data[0].author,
          id: uuid.v1()
        }
      })
      this.alert = false
    },
    favorite(){
      this.alert=true
      db.collection("favorites").add(this.quotes);
    }
  }
}
</script>

