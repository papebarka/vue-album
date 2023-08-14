<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Layout from './Layout.vue'
import Album from './Album.vue'

const store = useStore()

onMounted(async () => {
  store.dispatch('albums/fetch')
})

const albums = computed(() => {
  return store.state.albums.all
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
        <RouterView />
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
