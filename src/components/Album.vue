<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'

const store = useStore()

const props = defineProps({
    album: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <router-link :to="`/albums/${album.id}`">
        {{ album.title  }}
    </router-link>
</template>

<style scoped>
a {
  background: darkcyan;
  color: white;
  border: none;
  padding: 10px;
  margin: 0 10px 5px 0;
  font-size: 18px;
  border-radius: 5px;
  transition: .1s;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: Arial;
}

a:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: .1s;
}
</style>