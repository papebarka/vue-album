<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'
import Layout from './components/Layout.vue'
import Album from './components/Album.vue'

const store = useStore()

onMounted(async () => {
  store.dispatch('albums/fetch')
})

const albums = computed(() => {
  return store.state.albums.all
})

const photos = computed(() => {
  return store.state.photos.all
})
</script>

<template>
  
  <layout>
      <template v-slot:header>
        Header
      </template>

      <template v-slot:sidebar>
        <album
          v-for="album in albums"
          :key="album.id"
          :album="album"
        />
      </template>

      <template v-slot:content>
        <img 
          v-for="photo in photos"
          :key="photo.id"
          :src="photo.thumbnailUrl"
        />
      </template>
  </layout>

  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
