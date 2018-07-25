<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <v-card style="margin-top:1em" v-for="(quote, idx) in quotes" :key="idx">
          <v-card-text>
            <h2>"{{quote.quote}}"</h2>
            <cite><h3 style="color:grey">- {{quote.author}}</h3></cite>
            <v-btn flat icon color="yellow" @click="deletar(quote.id)">
              <v-icon>star</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import db from '../../db'

export default {
  data(){
    return{
      quotes:[]
    }
  },
  created(){
    db
      .collection("favorites")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.quotes.push({
            quote: doc.data().quote,
            author: doc.data().author,
            id: doc.data().id
          })
        })
      })
    console.log(this.quotes)
  },
  methods:{
    deletar(){
      const id = db.collection('favorites').doc().id
      console.log(db.collection('favorites').doc())
      db.collection("favorites").doc().delete()
    }
  }
}
</script>

