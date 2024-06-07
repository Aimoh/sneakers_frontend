<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import CardLIst from '@/components/CardLIst.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://ce1f5cf30cf45e0a.mokky.dev/favorites?_relations=items')

    favorites.value = data.map((obj) => obj.item);

  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

  <CardLIst :items="favorites" is-favorites />
</template>