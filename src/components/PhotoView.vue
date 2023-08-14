<script setup>
import { computed, onMounted, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()

const route = useRoute()

onMounted(async () => {
  store.dispatch('albums/fetch')
})

watchEffect( () => {
    const id = route.params.id
    if (!id){
        return
    }
    store.dispatch('photos/getByAlbum', {albumId: id})
})

const photos = computed(() => {
  return store.state.photos.all
})
</script>

<template>
  <img 
    v-for="photo in photos"
    :key="photo.id"
    :src="photo.thumbnailUrl"
    />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
