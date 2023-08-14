<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(async () => {
  store.dispatch('albums/fetch')
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
